import Image from 'next/image'
import { FiShare } from 'react-icons/fi'
import {
  MdOutlineStar,
  MdLocationOn,
  MdOutlineNearbyError,
} from 'react-icons/md'
import { RiArrowDropDownLine, RiCommunityLine } from 'react-icons/ri'
import MobileReserveContainer from '../../components/rooms/MobileReserveContainer'
import MobileReserveButton from '../../components/rooms/MobileReserveButton'
import CheckInOutDate from '../../components/rooms/CheckInOutDate'

import { useProviderContext } from '../../context/context'
import { useRouter } from 'next/router'
import getSymbolFromCurrency from 'currency-symbol-map'
import {
  breakLines,
  metersToKilometers,
  priceFormatter,
} from '../../utils/functions'
import {
  Key,
  ReactChild,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from 'react'
import axios from 'axios'
import { BASE_URL, HEADERS } from '../../utils/constants'
import { HotelsInterface } from '../../typings'
import ShowImages from '../../components/rooms/ShowImages'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { BsDot } from 'react-icons/bs'
import parse from 'html-react-parser'
import AddGuests from '../../components/rooms/AddGuests'

interface Images {
  url_max: string
}

const Room = () => {
  const { isCheckoutOpen, setHotel } = useProviderContext()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState<Images[]>([])
  const [hotel, setHotelData] = useState<Partial<HotelsInterface>>({})
  const [description, setDescription] = useState('')
  const [places, setPlaces] = useState([])
  const [showImages, setShowImages] = useState(false)
  const [showCheckInOutDate, setShowCheckInOutDate] = useState(false)
  const [showAddGuests, setShowAddGuests] = useState(false)

  const { id } = router.query

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

  const fetchHotelImages = () => {
    axios
      .request({
        method: 'GET',
        url: BASE_URL + 'photos',
        params: { locale: 'en-gb', hotel_id: id },
        headers: HEADERS,
      })
      .then((res) => {
        console.log(res.data)
        setImages(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const fetchHotelDescription = () => {
    axios
      .request({
        method: 'GET',
        url: BASE_URL + 'description',
        params: { locale: 'en-gb', hotel_id: id },
        headers: HEADERS,
      })
      .then((res) => {
        console.log(res.data.description)
        setDescription(res.data.description)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const fetchNearbyPlaces = () => {
    axios
      .request({
        method: 'GET',
        url: BASE_URL + 'nearby-places',
        params: { locale: 'en-gb', hotel_id: id },
        headers: HEADERS,
      })
      .then((res) => {
        console.log(res.data.surroundings)
        setPlaces(res.data.surroundings)
      })
      .catch((err) => {
        console.log(err)
      })
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

  useEffect(() => {
    if (id) {
      // fetchHotelImages()
      // fetchHotelDescription()
      // fetchNearbyPlaces()
    }

    const hotel = JSON.parse(localStorage.getItem('hotel') || '{}')
    if (hotel) {
      setHotelData(hotel)
      setLoading(false)
    }
  }, [id])

  return (
    <div className="mx-auto mt-5 max-w-screen-xl md:mt-10">
      {loading ? (
        'Loading...'
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
                    {places.map((place: { items: [] }) =>
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
                        <span className="text-sm text-gray-500">Add date</span>
                      </div>
                      <div className="w-1/2">
                        <h1 className=" font-semibold  text-gray-800">
                          Check-Out
                        </h1>
                        <span className="text-sm text-gray-500">Add date</span>
                      </div>
                    </div>
                    {showCheckInOutDate && (
                      <CheckInOutDate
                        isOpen={showCheckInOutDate}
                        handleShowDate={handleShowCheckInOutDate}
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
                        <span className="text-sm text-gray-500">1 Guest</span>
                        <RiArrowDropDownLine />
                      </div>
                    </div>
                    {showAddGuests && (
                      <AddGuests handleShowGuests={handleShowAddGuests} />
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
