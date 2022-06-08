import Image from 'next/image'
import { HotelsInterface, Hotel } from '../../typings'
import getSymbolFromCurrency from 'currency-symbol-map'
import { priceFormatter } from '../../utils/functions'
import { useRouter } from 'next/router'
import { useProviderContext } from '../../context/context'

const Feed = ({ hotel }: Hotel) => {
  const { setHotel } = useProviderContext()
  const {
    max_photo_url,
    distances,
    hotel_name,
    currency_code,
    min_total_price,
    hotel_id,
  } = hotel
  const router = useRouter()

  let distanceFromCityCenter
  distances.map((item) => {
    distanceFromCityCenter = item.text
  })

  // function to save hotel on local storage
  const saveHotelOnLocalStorage = () => {
    localStorage.setItem('hotel', JSON.stringify(hotel))
  }

  const showHotel = () => {
    router.push({
      pathname: `/rooms/${hotel_id}`,
      query: {
        name: hotel_name,
        id: hotel_id,
        price: min_total_price,
      },
    })
    setHotel(hotel)
    saveHotelOnLocalStorage()
  }

  return (
    <div className="group rounded-xl border border-gray-200 p-4">
      <div className="relative h-[200px] w-full overflow-hidden rounded-xl">
        <Image
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
