export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || ''

const key = process.env.NEXT_PUBLIC_API_KEY || ''
export const HEADERS = {
  'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST || '',
  'X-RapidAPI-Key': key,
}

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || ''
