import Image from 'next/image'
import { HotelsInterface } from '../../typings'
import getSymbolFromCurrency from 'currency-symbol-map'
import { priceFormatter } from '../../utils/functions'

interface Props {
  image: string
  name: string | undefined
  currency: string
  price: number | null
  distance: [
    {
      icon_set: string | null
      icon_name: string
      text: string
    }
  ]
}
const Feed = ({ image, name, currency, price, distance }: Props) => {
  let distanceFromCityCenter
  distance.map((item) => {
    distanceFromCityCenter = item.text
  })

  return (
    <div className="group rounded-xl border border-gray-200 p-4">
      <div className="relative h-[200px] w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          className="rounded-xl transition duration-150 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="mt-2">
        <h1 className="cursor-pointer text-sm font-bold">{name}</h1>
        <span className="text-xs text-gray-500">{distanceFromCityCenter}</span>
        <div>
          <h1 className="mt-2 font-semibold">
            {getSymbolFromCurrency(currency)}
            {priceFormatter(price)}{' '}
            <span className="text-sm font-normal text-gray-500">night</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Feed
