import axios from 'axios'
import { ReviewsInterface } from '../typings'
import { API_CONFIG, ERROR_MESSAGES } from './apiConfig'

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
    const response = await axios.get(`/api/hotels/${hotelIdStr}`)
    const hotelData = response.data

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

// Export cache for debugging
export const clearHotelCache = () => hotelCache.clear()
