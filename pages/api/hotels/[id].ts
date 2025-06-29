import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || ''
const API_KEY = process.env.API_KEY || ''
const API_HOST = process.env.NEXT_PUBLIC_API_HOST || ''

// Utility function to add delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const API_CONFIG = {
  ENDPOINTS: {
    PHOTOS: 'photos',
    DESCRIPTION: 'description',
    NEARBY_PLACES: 'nearby-places',
    TIPS: 'tips',
    REVIEWS: 'reviews',
  },
  DEFAULT_PARAMS: {
    LOCALE: 'en-gb',
    CUSTOMER_TYPE: 'solo_traveller,review_category_group_of_friends',
    LANGUAGE_FILTER: 'en-gb,de,fr',
    SORT_TYPE: 'SORT_MOST_RELEVANT',
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  const { type } = req.query

  if (!id) {
    return res
      .status(400)
      .json({ error: 'Missing required parameter: hotel ID' })
  }

  try {
    let endpoint = ''
    let params: any = {
      locale: API_CONFIG.DEFAULT_PARAMS.LOCALE,
      hotel_id: id,
    }

    // Determine which endpoint to call based on the type parameter
    switch (type) {
      case 'photos':
        endpoint = API_CONFIG.ENDPOINTS.PHOTOS
        break
      case 'description':
        endpoint = API_CONFIG.ENDPOINTS.DESCRIPTION
        break
      case 'nearby-places':
        endpoint = API_CONFIG.ENDPOINTS.NEARBY_PLACES
        break
      case 'reviews':
        endpoint = API_CONFIG.ENDPOINTS.REVIEWS
        params = {
          locale: API_CONFIG.DEFAULT_PARAMS.LOCALE,
          hotel_id: id,
          customer_type: API_CONFIG.DEFAULT_PARAMS.CUSTOMER_TYPE,
          page_number: 0,
          sort_type: API_CONFIG.DEFAULT_PARAMS.SORT_TYPE,
          language_filter: API_CONFIG.DEFAULT_PARAMS.LANGUAGE_FILTER,
        }
        break
      case 'tips':
        endpoint = API_CONFIG.ENDPOINTS.TIPS
        params = {
          ...params,
          customer_type: API_CONFIG.DEFAULT_PARAMS.CUSTOMER_TYPE,
          page_number: 0,
          sort_type: API_CONFIG.DEFAULT_PARAMS.SORT_TYPE,
          language_filter: API_CONFIG.DEFAULT_PARAMS.LANGUAGE_FILTER,
        }
        break
      default:
        // If no type specified, return all data
        return await fetchAllHotelData(id as string, res)
    }

    const response = await axios.request({
      method: 'GET',
      url: BASE_URL + endpoint,
      params,
      headers: {
        'X-RapidAPI-Host': API_HOST,
        'X-RapidAPI-Key': API_KEY,
      },
    })

    return res.status(200).json(response.data)
  } catch (error: any) {
    console.error('API error:', error?.response?.data || error.message)
    return res.status(error?.response?.status || 500).json({
      error: error?.response?.data || 'Internal server error',
    })
  }
}

async function fetchAllHotelData(hotelId: string, res: NextApiResponse) {
  try {
    // Make requests for photos, description, and nearby places
    const [imagesRes, descriptionRes, placesRes] = await Promise.all([
      axios.request({
        method: 'GET',
        url: BASE_URL + API_CONFIG.ENDPOINTS.PHOTOS,
        params: {
          locale: API_CONFIG.DEFAULT_PARAMS.LOCALE,
          hotel_id: hotelId,
        },
        headers: {
          'X-RapidAPI-Host': API_HOST,
          'X-RapidAPI-Key': API_KEY,
        },
      }),
      axios.request({
        method: 'GET',
        url: BASE_URL + API_CONFIG.ENDPOINTS.DESCRIPTION,
        params: {
          locale: API_CONFIG.DEFAULT_PARAMS.LOCALE,
          hotel_id: hotelId,
        },
        headers: {
          'X-RapidAPI-Host': API_HOST,
          'X-RapidAPI-Key': API_KEY,
        },
      }),
      axios.request({
        method: 'GET',
        url: BASE_URL + API_CONFIG.ENDPOINTS.NEARBY_PLACES,
        params: {
          locale: API_CONFIG.DEFAULT_PARAMS.LOCALE,
          hotel_id: hotelId,
        },
        headers: {
          'X-RapidAPI-Host': API_HOST,
          'X-RapidAPI-Key': API_KEY,
        },
      }),
    ])

    // Try to fetch reviews separately to avoid breaking the entire request
    let reviewsData = []
    try {
      await delay(500) // Wait between requests to avoid rate limiting
      const reviewsRes = await axios.request({
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
        headers: {
          'X-RapidAPI-Host': API_HOST,
          'X-RapidAPI-Key': API_KEY,
        },
      })
      reviewsData = reviewsRes.data.result || []
    } catch (reviewsError: any) {
      console.warn(
        'Failed to fetch reviews:',
        reviewsError?.response?.data || reviewsError.message
      )
      // Continue without reviews data
    }

    const hotelData = {
      images: imagesRes.data,
      description: descriptionRes.data.description,
      nearbyPlaces: placesRes.data.surroundings,
      reviews: reviewsData,
    }

    return res.status(200).json(hotelData)
  } catch (error: any) {
    console.error('API error:', error?.response?.data || error.message)
    return res.status(error?.response?.status || 500).json({
      error: error?.response?.data || 'Internal server error',
    })
  }
}
