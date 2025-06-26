import axios from 'axios'

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST || '',
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY || '',
  },
})
