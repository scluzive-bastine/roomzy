import { FiShare } from 'react-icons/fi'
import {
  MdLocationOn,
  MdOutlineNearbyError,
  MdOutlineStar,
} from 'react-icons/md'
import { RiArrowDropDownLine, RiCommunityLine } from 'react-icons/ri'
import CheckInOutDate from '../../components/rooms/CheckInOutDate'
import HotelSkeleton from '../../components/rooms/HotelSkeleton'
import MobileReserveButton from '../../components/rooms/MobileReserveButton'
import MobileReserveContainer from '../../components/rooms/MobileReserveContainer'

import getSymbolFromCurrency from 'currency-symbol-map'
import parse from 'html-react-parser'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BsDot } from 'react-icons/bs'
import { HiOutlinePhotograph } from 'react-icons/hi'
import AddGuests from '../../components/rooms/AddGuests'
import Reviews from '../../components/rooms/Reviews'
import ShowImages from '../../components/rooms/ShowImages'
import { useProviderContext } from '../../context/context'
import { HotelsInterface, ReviewsInterface } from '../../typings'
import {
  breakLines,
  formatDate,
  metersToKilometers,
  priceFormatter,
} from '../../utils/functions'
import { fetchHotelData } from '../../utils/hotelApi'

interface ImageInterface {
  url_max: string
}

const Room = () => {
  const { isCheckoutOpen, setHotel } = useProviderContext()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [retrying, setRetrying] = useState(false)
  const [images, setImages] = useState<ImageInterface[]>([])
  const [hotel, setHotelData] = useState<Partial<HotelsInterface>>({})
  const [description, setDescription] = useState('')
  const [places, setPlaces] = useState<any[]>([])
  const [tips, setTips] = useState<any[]>([])
  const [reviews, setReviews] = useState<ReviewsInterface[]>([])
  const [showImages, setShowImages] = useState(false)
  const [showCheckInOutDate, setShowCheckInOutDate] = useState(false)
  const [showAddGuests, setShowAddGuests] = useState(false)

  const { id, checkin, checkout, guests } = router.query

  const [reservation, setReservation] = useState({
    visitors: Number(guests),
    checkin: new Date(),
    checkout: new Date(),
  })

  const {
    hotel_name,
    address,
    currency_code,
    min_total_price,
    hotel_id,
    unit_configuration_label,
    review_nr,
    review_score,
  } = hotel

  // Combined fetch function
  const fetchAllHotelData = async () => {
    if (!id) return

    setLoading(true)
    setError(false)
    setErrorMessage('')
    setRetrying(false)

    try {
      const hotelData = await fetchHotelData(id)

      setImages(hotelData.images)
      setDescription(hotelData.description)
      setPlaces(hotelData.nearbyPlaces)
      setReviews(hotelData.reviews || [])
    } catch (err: any) {
      console.error('Error fetching hotel data:', err)
      setError(true)
      setErrorMessage(
        err.message || 'Failed to load hotel data. Please try again later.'
      )
    } finally {
      setLoading(false)
      setRetrying(false)
    }
  }

  const handleShowImages = () => {
    setShowImages(!showImages)
  }

  const handleShowCheckInOutDate = () => {
    setShowCheckInOutDate(!showCheckInOutDate)
  }

  const handleShowAddGuests = () => {
    setShowAddGuests(!showAddGuests)
  }

  const addGuest = () => {
    setReservation({ ...reservation, visitors: reservation.visitors + 1 })
  }

  const removeGuest = () => {
    if (reservation.visitors > 1) {
      setReservation({ ...reservation, visitors: reservation.visitors - 1 })
    }
  }

  const handleSelect = (ranges: any) => {
    setReservation({
      ...reservation,
      checkin: ranges.selection.startDate,
      checkout: ranges.selection.endDate,
    })
  }

  useEffect(() => {
    if (id) {
      fetchAllHotelData()
    }

    const hotel = JSON.parse(localStorage.getItem('hotel') || '{}')
    const guests = JSON.parse(localStorage.getItem('checkinData') || '{}')
    if (guests) {
      setReservation({
        ...reservation,
        checkin: guests.checkin,
        checkout: guests.checkout,
        visitors: guests.guests,
      })
    }

    if (hotel) {
      setHotelData(hotel)
      setLoading(false)
    }
  }, [id])

  console.log('reviews: ', reviews)

  return (
    <div className="mx-auto mt-5 max-w-screen-xl md:mt-10">
      {loading ? (
        <HotelSkeleton />
      ) : error ? (
        <div className="px-4 text-center">
          <div className="mb-4 text-lg text-red-500">{errorMessage}</div>
          <button
            onClick={() => {
              setRetrying(true)
              fetchAllHotelData()
            }}
            disabled={retrying}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {retrying ? 'Retrying...' : 'Try Again'}
          </button>
          {errorMessage.includes('Rate limit') && (
            <p className="mt-2 text-sm text-gray-500">
              This usually happens when too many requests are made quickly.
              Please wait a moment and try again.
            </p>
          )}
        </div>
      ) : (
        <>
          <div className="px-4">
            <div className="mb-10 w-full">
              <h1 className="mb-5 mt-5 text-lg font-semibold md:mt-0 md:text-3xl">
                {hotel_name}
              </h1>
              <div className="flex flex-col justify-between space-y-3 md:flex-row md:space-y-0">
                <div className="flex flex-col items-center space-y-3 md:flex-row md:space-x-4 md:space-y-0">
                  <div className="flex w-full items-center space-x-1 md:w-auto">
                    <MdOutlineStar className="text-xl" />
                    <span className="flex items-center">
                      Review score: {review_score} <BsDot />
                      <span className="text-sm text-gray-500">
                        ({review_nr}) reviews
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <FiShare className="text-xl" />
                  <span className="underline">Share</span>
                </div>
              </div>
            </div>
            <div className="relative hidden grid-cols-1 gap-3 md:grid md:grid-cols-2">
              {images.slice(0, 1).map((image, index) => (
                <div
                  className="group relative h-[240px] w-full rounded-l-2xl md:h-[500px]"
                  key={index}
                >
                  <Image
                    alt="Image"
                    src={image.url_max}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
              ))}
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="flex flex-col space-y-3">
                  {images.slice(1, 3).map((image, index) => (
                    <div
                      className="group relative h-[244px] w-full rounded-2xl"
                      key={index}
                    >
                      <Image
                        alt="Image"
                        src={image.url_max}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col space-y-3">
                  {images.slice(3, 5).map((image, index) => (
                    <div
                      className="group relative h-[244px] w-full rounded-br-2xl"
                      key={index}
                    >
                      <Image
                        alt="Image"
                        src={image.url_max}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={handleShowImages}
                className="absolute bottom-5 right-5 flex items-center space-x-2 rounded-lg bg-white px-4 py-2 text-sm text-black transition duration-150 ease-in-out hover:shadow-lg"
              >
                <HiOutlinePhotograph className="text-lg" />{' '}
                <span>
                  Show all photos{' '}
                  <span className="text-xs">+{images.length}</span>{' '}
                </span>
              </button>
              <ShowImages
                isOpen={showImages}
                closeModal={handleShowImages}
                data={images}
              />
            </div>
            <div className="relative mt-10 shrink-0 flex-grow-0 flex-col justify-between space-x-5 md:flex md:flex-row">
              <div className="md:w-2/3">
                <div className="border-b border-gray-200 pb-5">
                  <div className="flex w-full space-x-1 text-lg md:w-auto md:items-center md:text-xl">
                    <MdLocationOn className="" />
                    <span className="w-4/5 flex-grow-0 md:w-auto">
                      {address}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h4 className="flex items-center space-x-2 text-lg font-semibold">
                      <RiCommunityLine /> <span>Unit Configuration</span>
                    </h4>
                    <span className="text-sm text-gray-600">
                      {parse(unit_configuration_label || '')}
                    </span>
                  </div>
                </div>
                <div className="border-b border-gray-200 py-10 pb-5 text-gray-500">
                  {breakLines(description)}
                </div>
                <div className="w-100 py-10 md:w-1/2">
                  <h1 className="flex items-center space-x-2 text-xl font-semibold text-black">
                    <MdOutlineNearbyError />
                    <span>Nearby Places</span>
                  </h1>
                  <ul className="mt-4">
                    {places?.map((place: { items: [] }) =>
                      place.items.map(
                        (item: { landmark_name: string; distance: number }) => (
                          <li
                            className="flex items-center justify-between border-b border-gray-100 py-4 text-gray-500"
                            key={item.landmark_name}
                          >
                            <span>{item.landmark_name}</span>
                            <span className="text-sm">
                              {metersToKilometers(item.distance)}
                            </span>
                          </li>
                        )
                      )
                    )}
                  </ul>
                </div>
                <Reviews reviews={reviews} />

                {/* Hotel Tips Section */}
                {tips && tips.length > 0 && (
                  <div className="w-100 py-10 md:w-1/2">
                    <h1 className="flex items-center space-x-2 text-xl font-semibold text-black">
                      <MdOutlineStar />
                      <span>Guest Tips</span>
                    </h1>
                    <ul className="mt-4">
                      {tips.slice(0, 5).map((tip: any, index: number) => (
                        <li
                          className="border-b border-gray-100 py-4 text-gray-500"
                          key={index}
                        >
                          <div className="flex items-start space-x-2">
                            <MdOutlineStar className="mt-1 flex-shrink-0 text-yellow-400" />
                            <div>
                              <p className="text-sm">{tip.text}</p>
                              {tip.reviewer_name && (
                                <p className="mt-1 text-xs text-gray-400">
                                  - {tip.reviewer_name}
                                </p>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="hidden h-[300px] flex-grow rounded-2xl border border-gray-100 p-5 shadow-md md:block">
                <div className="flex justify-between">
                  <h1>
                    <span className="font-semibold">
                      {getSymbolFromCurrency(currency_code || 'USD')}
                      {priceFormatter(min_total_price)}
                    </span>{' '}
                    / night
                  </h1>
                  <span className="flex items-center space-x-1">
                    <MdOutlineStar className="text-xl" />
                    <span>
                      5.0{' '}
                      <span className="text-gray-500 underline">
                        (178) reviews
                      </span>
                    </span>
                  </span>
                </div>
                <div className=" mt-5">
                  <div className="">
                    <div
                      className="mt-2 flex h-fit cursor-pointer items-center justify-between space-x-2 rounded-t-xl border border-gray-200 px-4 py-2"
                      onClick={handleShowCheckInOutDate}
                    >
                      <div className="w-1/2 border-r border-gray-200">
                        <h1 className="font-semibold text-gray-800">
                          Check-In
                        </h1>
                        <span className="text-sm text-gray-500">
                          {formatDate(reservation.checkin)}
                        </span>
                      </div>
                      <div className="w-1/2">
                        <h1 className=" font-semibold  text-gray-800">
                          Check-Out
                        </h1>
                        <span className="text-sm text-gray-500">
                          {formatDate(reservation.checkout)}
                        </span>
                      </div>
                    </div>
                    {showCheckInOutDate && (
                      <CheckInOutDate
                        isOpen={showCheckInOutDate}
                        handleShowDate={handleShowCheckInOutDate}
                        checkin={reservation.checkin}
                        checkout={reservation.checkout}
                        selectDate={handleSelect}
                      />
                    )}
                  </div>
                  <div className="relative">
                    <div
                      className="cursor-pointer rounded-b-xl border-x border-b border-gray-200 px-4 py-2 outline-none"
                      onClick={handleShowAddGuests}
                    >
                      <h1>Guests</h1>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">
                          {reservation.visitors} Guest
                        </span>
                        <RiArrowDropDownLine />
                      </div>
                    </div>
                    {showAddGuests && (
                      <AddGuests
                        handleShowGuests={handleShowAddGuests}
                        guests={Number(reservation.visitors)}
                        handleAddGuests={addGuest}
                        handleRemoveGuests={removeGuest}
                      />
                    )}
                  </div>

                  <button className="btn mt-4 w-full">Reserve</button>
                </div>
              </div>
            </div>
          </div>
          <MobileReserveButton />
        </>
      )}
      {isCheckoutOpen && <MobileReserveContainer />}
    </div>
  )
}

export default Room
