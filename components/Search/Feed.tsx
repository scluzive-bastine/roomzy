import Image from 'next/image'
import { HotelsInterface } from '../../typings'

interface Props {
  image: string
  name: string | undefined
}
const Feed = ({ image, name }: Props) => {
  return (
    <div className="group rounded-xl border border-gray-200 p-4">
      <div className="relative h-[200px] w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          className="rounded-xl transition duration-150 ease-in-out group-hover:scale-110"
        />
        {/* <div className="absolute top-2 right-2 rounded-md bg-white px-2 py-1 text-xs font-semibold">
                    Review score: {hotel.review_score}
                  </div> */}
      </div>
      <div className="mt-2">
        <h1 className="cursor-pointer text-sm font-bold">{name}</h1>
        <h3 className="text-sm text-gray-800">Wright's Schwartz House</h3>
        <span className="text-xs text-gray-500">
          Entire apartment • 3 bedrooms • 3 bathrooms
        </span>
        <div>
          <button className="mt-4 font-semibold">$1050</button>
        </div>
      </div>
    </div>
  )
}

export default Feed
