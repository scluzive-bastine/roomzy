import axios from 'axios'
import { format, parseISO } from 'date-fns'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import SearchFeed from '../components/Search/SearchFeed'
import { Loader } from '../utils/loaders/Loader'
import { BASE_URL, HEADERS } from '../utils/constants'
import { MdErrorOutline } from 'react-icons/md'
import Link from 'next/link'
import Error from '../utils/Error'

const search = () => {
  const router = useRouter()
  const { location, checkin, checkout, guests, dest_type, dest_id } =
    router.query
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [hotels, setHotels] = useState([])

  let formattedCheckInDate: string
  let formattedCheckOutDate: string

  if (checkin && checkout) {
    formattedCheckInDate = format(parseISO(checkin?.toString()), 'yyyy-MM-dd')
    formattedCheckOutDate = format(parseISO(checkout?.toString()), 'yyyy-MM-dd')
  }

  const fetchHotels = () => {
    setLoading(true)
    axios
      .request({
        method: 'GET',
        url: BASE_URL + 'search',
        params: {
          checkout_date: formattedCheckOutDate,
          checkin_date: formattedCheckInDate,
          adults_number: guests,
          dest_id: dest_id,
          dest_type: dest_type,
          units: 'metric',
          locale: 'en-gb',
          order_by: 'popularity',
          filter_by_currency: 'USD',
          room_number: '1',
        },
        headers: HEADERS,
      })
      .then((res) => {
        console.log(res.data)
        setHotels(res.data.result)
      })
      .catch((err) => {
        console.log(err)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const renderConent = () => {
    if (loading) {
      return <Loader />
    }
    if (error) {
      return <Error />
    }
    return <SearchFeed feeds={hotels} />
  }

  useEffect(() => {
    if (location && checkin && checkout && guests && dest_type && dest_id) {
      fetchHotels()
    }
  }, [location])

  return (
    <div>
      <div className="sticky border-y border-gray-200 bg-gray-100 py-4">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="flex flex-col items-center space-y-2 md:flex-row md:justify-between md:space-y-0">
            <div className="w-full md:w-2/5 lg:w-3/5">
              <span className="text-sm text-gray-500">Location</span>
              <h1 className="font-semibold">{location}</h1>
            </div>
            <div className="flex w-full flex-grow items-center justify-end space-x-10 md:w-auto">
              <div className="w-1/2 border-gray-300 md:border-l md:pl-4">
                <span className="text-sm text-gray-500">Check-In</span>
                <h1 className="font-semibold">
                  {checkin
                    ? format(parseISO(checkin?.toString()), 'MMM dd')
                    : '-'}
                </h1>
              </div>
              <div className="w-1/2 border-gray-300 md:border-l md:pl-4">
                <span className="text-sm text-gray-500">Check-Out</span>
                <h1 className="font-semibold">
                  {checkout
                    ? format(parseISO(checkout?.toString()), 'MMM dd')
                    : '-'}
                </h1>
              </div>
              <div className="w-1/2 border-gray-300 md:border-l md:pl-4">
                <span className="text-sm text-gray-500">Guests</span>
                <h1 className="font-semibold">{guests ? guests : '-'}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4">{renderConent()}</div>
    </div>
  )
}

export default search
