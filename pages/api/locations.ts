import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || ''
const API_KEY = process.env.API_KEY || ''
const API_HOST = process.env.NEXT_PUBLIC_API_HOST || ''

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { locale = 'en-gb', name = '' } = req.query

  if (!name) {
    return res.status(400).json({ error: 'Missing required parameter: name' })
  }

  try {
    const response = await axios.request({
      method: 'GET',
      url: BASE_URL + 'locations',
      params: { locale, name },
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
