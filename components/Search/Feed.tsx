import getSymbolFromCurrency from 'currency-symbol-map'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useProviderContext } from '../../context/context'
import { Hotel } from '../../typings'
import { priceFormatter, saveHotelOnLocalStorage } from '../../utils/functions'

const Feed = ({ hotel }: Hotel) => {
  const router = useRouter()
  const { setHotel } = useProviderContext()

  const {
    max_photo_url,
    distances,
    hotel_name,
    currency_code,
    min_total_price,
    hotel_id,
  } = hotel

  let distanceFromCityCenter
  distances.map((item) => {
    distanceFromCityCenter = item.text
  })

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
    <div className="group rounded-xl border border-gray-200 p-4">
      <div
        className="relative h-[200px] w-full cursor-pointer overflow-hidden rounded-xl"
        onClick={showHotel}
      >
        <Image
          alt={hotel_name}
          src={max_photo_url}
          layout="fill"
          objectFit="cover"
          className="rounded-xl transition duration-150 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="mt-2">
        <h1 className="cursor-pointer text-sm font-bold" onClick={showHotel}>
          {hotel_name}
        </h1>
        <span className="text-xs text-gray-500">{distanceFromCityCenter}</span>
        <div>
          <h1 className="mt-2 font-semibold">
            {getSymbolFromCurrency(currency_code)}
            {priceFormatter(min_total_price)}{' '}
            <span className="text-sm font-normal text-gray-500">night</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Feed
