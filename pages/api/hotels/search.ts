import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || ''
const API_KEY = process.env.API_KEY || ''
const API_HOST = process.env.NEXT_PUBLIC_API_HOST || ''

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    checkout_date,
    checkin_date,
    adults_number,
    dest_id,
    dest_type,
    units = 'metric',
    locale = 'en-gb',
    order_by = 'popularity',
    filter_by_currency = 'USD',
    room_number = '1',
  } = req.query

  // Validate required parameters
  if (
    !checkout_date ||
    !checkin_date ||
    !adults_number ||
    !dest_id ||
    !dest_type
  ) {
    return res.status(400).json({
      error:
        'Missing required parameters: checkout_date, checkin_date, adults_number, dest_id, dest_type',
    })
  }

  try {
    const response = await axios.request({
      method: 'GET',
      url: BASE_URL + 'search',
      params: {
        checkout_date,
        checkin_date,
        adults_number,
        dest_id,
        dest_type,
        units,
        locale,
        order_by,
        filter_by_currency,
        room_number,
      },
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
