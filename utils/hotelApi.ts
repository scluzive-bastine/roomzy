import axios from 'axios'
import { ReviewsInterface } from '../typings'
import { API_CONFIG, ERROR_MESSAGES } from './apiConfig'
import { BASE_URL, HEADERS } from './constants'

export interface HotelData {
  images: any[]
  description: string
  nearbyPlaces: any[]
  reviews?: ReviewsInterface[]
}

// Simple cache to store hotel data
class HotelCache {
  private cache = new Map<string, { data: HotelData; timestamp: number }>()

  get(hotelId: string): HotelData | null {
    const cached = this.cache.get(hotelId)
    if (cached && Date.now() - cached.timestamp < API_CONFIG.CACHE.TIMEOUT_MS) {
      return cached.data
    }
    this.cache.delete(hotelId)
    return null
  }

  set(hotelId: string, data: HotelData): void {
    this.cache.set(hotelId, { data, timestamp: Date.now() })
  }

  clear(): void {
    this.cache.clear()
  }
}

const hotelCache = new HotelCache()

// Rate limiting utility
class RateLimiter {
  private requests: number[] = []

  canMakeRequest(): boolean {
    const now = Date.now()
    // Remove old requests outside the window
    this.requests = this.requests.filter(
      (time) => now - time < API_CONFIG.RATE_LIMIT.WINDOW_MS
    )

    if (this.requests.length < API_CONFIG.RATE_LIMIT.MAX_REQUESTS) {
      this.requests.push(now)
      return true
    }
    return false
  }

  getDelay(): number {
    if (this.requests.length === 0) return 0
    const oldestRequest = this.requests[0]
    const now = Date.now()
    return Math.max(0, API_CONFIG.RATE_LIMIT.WINDOW_MS - (now - oldestRequest))
  }
}

const rateLimiter = new RateLimiter()

// Retry utility
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const retryRequest = async (requestFn: () => Promise<any>) => {
  for (let attempt = 1; attempt <= API_CONFIG.RETRY.MAX_RETRIES; attempt++) {
    try {
      // Check rate limit before making request
      if (!rateLimiter.canMakeRequest()) {
        const delayMs = rateLimiter.getDelay()
        console.log(`Rate limited. Waiting ${delayMs}ms...`)
        await delay(delayMs)
      }

      return await requestFn()
    } catch (error: any) {
      if (
        error.response?.status === 429 &&
        attempt < API_CONFIG.RETRY.MAX_RETRIES
      ) {
        const delayMs = API_CONFIG.RETRY.BASE_DELAY * Math.pow(2, attempt - 1) // Exponential backoff
        console.log(
          `429 error. Retrying in ${delayMs}ms... (attempt ${attempt}/${API_CONFIG.RETRY.MAX_RETRIES})`
        )
        await delay(delayMs)
        continue
      }
      throw error
    }
  }
}

export const fetchHotelData = async (
  hotelId: string | string[]
): Promise<HotelData> => {
  const hotelIdStr = Array.isArray(hotelId) ? hotelId[0] : hotelId

  // Check cache first
  const cached = hotelCache.get(hotelIdStr)
  if (cached) {
    console.log('Using cached hotel data')
    return cached
  }

  try {
    // Create all requests at once
    const requests = [
      () =>
        axios.request({
          method: 'GET',
          url: BASE_URL + API_CONFIG.ENDPOINTS.PHOTOS,
          params: {
            locale: API_CONFIG.DEFAULT_PARAMS.LOCALE,
            hotel_id: hotelId,
          },
          headers: HEADERS,
        }),
      () =>
        axios.request({
          method: 'GET',
          url: BASE_URL + API_CONFIG.ENDPOINTS.DESCRIPTION,
          params: {
            locale: API_CONFIG.DEFAULT_PARAMS.LOCALE,
            hotel_id: hotelId,
          },
          headers: HEADERS,
        }),
      () =>
        axios.request({
          method: 'GET',
          url: BASE_URL + API_CONFIG.ENDPOINTS.NEARBY_PLACES,
          params: {
            locale: API_CONFIG.DEFAULT_PARAMS.LOCALE,
            hotel_id: hotelId,
          },
          headers: HEADERS,
        }),
      () =>
        axios.request({
          method: 'GET',
          url: BASE_URL + API_CONFIG.ENDPOINTS.REVIEWS,
          params: {
            locale: API_CONFIG.DEFAULT_PARAMS.LOCALE,
            hotel_id: hotelId,
            customer_type: API_CONFIG.DEFAULT_PARAMS.CUSTOMER_TYPE,
            page_number: 0,
            sort_type: API_CONFIG.DEFAULT_PARAMS.SORT_TYPE,
            language_filter: API_CONFIG.DEFAULT_PARAMS.LANGUAGE_FILTER,
          },
          headers: HEADERS,
        }),
    ]

    // Execute all requests in parallel with retry logic
    const [imagesRes, descriptionRes, placesRes, reviewsRes] =
      await Promise.all(requests.map((requestFn) => retryRequest(requestFn)))

    const hotelData = {
      images: imagesRes.data,
      description: descriptionRes.data.description,
      nearbyPlaces: placesRes.data.surroundings,
      reviews: reviewsRes.data.result || [],
    }

    // Cache the result
    hotelCache.set(hotelIdStr, hotelData)

    return hotelData
  } catch (error: any) {
    console.error('Error fetching hotel data:', error)

    // Provide more specific error messages
    if (error.response?.status === 429) {
      throw new Error(ERROR_MESSAGES.RATE_LIMIT)
    } else if (error.response?.status === 401) {
      throw new Error(ERROR_MESSAGES.INVALID_API_KEY)
    } else if (error.response?.status === 404) {
      throw new Error(ERROR_MESSAGES.NOT_FOUND)
    } else if (error.code === 'NETWORK_ERROR') {
      throw new Error(ERROR_MESSAGES.NETWORK_ERROR)
    } else {
      throw new Error(ERROR_MESSAGES.GENERIC)
    }
  }
}

// Individual functions for backward compatibility with retry logic
export const fetchHotelImages = async (hotelId: string | string[]) => {
  const response = await retryRequest(() =>
    axios.request({
      method: 'GET',
      url: BASE_URL + API_CONFIG.ENDPOINTS.PHOTOS,
      params: {
        locale: API_CONFIG.DEFAULT_PARAMS.LOCALE,
        hotel_id: hotelId,
      },
      headers: HEADERS,
    })
  )
  return response.data
}

export const fetchHotelDescription = async (hotelId: string | string[]) => {
  const response = await retryRequest(() =>
    axios.request({
      method: 'GET',
      url: BASE_URL + API_CONFIG.ENDPOINTS.DESCRIPTION,
      params: {
        locale: API_CONFIG.DEFAULT_PARAMS.LOCALE,
        hotel_id: hotelId,
      },
      headers: HEADERS,
    })
  )
  return response.data.description
}

export const fetchNearbyPlaces = async (hotelId: string | string[]) => {
  const response = await retryRequest(() =>
    axios.request({
      method: 'GET',
      url: BASE_URL + API_CONFIG.ENDPOINTS.NEARBY_PLACES,
      params: {
        locale: API_CONFIG.DEFAULT_PARAMS.LOCALE,
        hotel_id: hotelId,
      },
      headers: HEADERS,
    })
  )
  return response.data.surroundings
}

export const fetchHotelTips = async (hotelId: string | string[]) => {
  const response = await retryRequest(() =>
    axios.request({
      method: 'GET',
      url: BASE_URL + API_CONFIG.ENDPOINTS.TIPS,
      //   page_number=0&customer_type=solo_traveller%2Creview_category_group_of_friends&language_filter=en-gb%2Cde%2Cfr&locale=en-gb&hotel_id=1676161&sort_type=SORT_MOST_RELEVANT'
      params: {
        locale: API_CONFIG.DEFAULT_PARAMS.LOCALE,
        hotel_id: hotelId,
        customer_type: API_CONFIG.DEFAULT_PARAMS.CUSTOMER_TYPE,
        page_number: 0,
        sort_type: API_CONFIG.DEFAULT_PARAMS.SORT_TYPE,
        language_filter: API_CONFIG.DEFAULT_PARAMS.LANGUAGE_FILTER,
      },
      headers: HEADERS,
    })
  )
  console.log('response: ', response.data)
  return response.data
}

// Export cache for debugging
export const clearHotelCache = () => hotelCache.clear()
