export const BASE_URL = 'https://booking-com.p.rapidapi.com/v1/hotels/'
const key = process.env.NEXT_PUBLIC_API_KEY || ''
export const HEADERS = {
  'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
  'X-RapidAPI-Key': key,
}
