import { useRouter } from 'next/router'
import { useProviderContext } from '../../context/context'
import { Hotel } from '../../typings'
import { saveHotelOnLocalStorage } from '../../utils/functions'

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
        className=" relative h-[200px] w-full cursor-pointer overflow-hidden rounded-xl"
        onClick={showHotel}
      >
        <Rating
          review_score={hotel.review_score || 0}
          review_score_word={hotel.review_score_word || ''}
          review_nr={hotel.review_nr || 0}
        />
        <img
          alt={hotel_name}
          src={max_photo_url}
          loading="lazy"
          className="h-full w-full rounded-xl object-cover transition duration-150 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="mt-2">
        <h1 className="cursor-pointer text-sm font-bold" onClick={showHotel}>
          {hotel_name}
        </h1>
        <span className="text-xs text-gray-500">{distanceFromCityCenter}</span>
        <div>
          <h1 className="mt-2 font-semibold">
            {hotel.composite_price_breakdown?.gross_amount.amount_rounded}{' '}
            <span className="text-sm font-normal text-gray-500">night</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Feed

const Rating = ({
  review_score,
}: {
  review_score: number
  review_score_word: string
  review_nr: number
}) => {
  return (
    <div className=" absolute top-2 right-2 z-20 rounded-md bg-orange p-2">
      <div className="flex gap-2">
        <p className="text-xs text-white">{review_score.toFixed(1)}</p>
      </div>
    </div>
  )
}
