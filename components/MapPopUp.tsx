import getSymbolFromCurrency from 'currency-symbol-map'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Popup } from 'react-map-gl'
import { useProviderContext } from '../context/context'
import { HotelsInterface } from '../typings'
import { priceFormatter, saveHotelOnLocalStorage } from '../utils/functions'

interface Props {
  hotel: HotelsInterface
  setSelectedLocation: (location: any) => void
}

const MapPopUp = ({ hotel, setSelectedLocation }: Props) => {
  const router = useRouter()
  const { setHotel } = useProviderContext()

  const {
    hotel_id,
    min_total_price,
    hotel_name,
    latitude,
    longitude,
    max_photo_url,
    currencycode,
  } = hotel

  const showHotel = () => {
    router.push({
      pathname: `/rooms/${hotel_id}`,
      query: {
        name: hotel_name,
        id: hotel_id,
        price: min_total_price,
        checkin: router.query.checkin,
        checkout: router.query.checkout,
        guests: router.query.guests,
      },
    })
    setHotel(hotel)
    saveHotelOnLocalStorage(hotel)
  }
  return (
    <Popup
      onClose={() => setSelectedLocation({ longitude: 0 })}
      closeOnClick={true}
      closeButton={false}
      latitude={latitude}
      longitude={longitude}
      className="relative z-10 w-[300px]"
    >
      <div className="">
        <div
          className="relative h-[150px] w-full cursor-pointer overflow-hidden"
          onClick={showHotel}
        >
          <Image
            alt={hotel_name}
            src={max_photo_url}
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
          />
        </div>
        <div className="mt-2">
          <h1 className="text-sm font-semibold">{hotel_name}</h1>
          <p className="mt-1 text-sm font-semibold">
            {getSymbolFromCurrency(currencycode)}
            {priceFormatter(min_total_price)} {''}
            <span className="font-normal text-gray-500">night</span>{' '}
          </p>
        </div>
      </div>
    </Popup>
  )
}

export default MapPopUp
