import Image from 'next/image'
import categories from '../../data/categories.json'
const Explore = () => {
  return (
    <div className="pb-10">
      <h1 className="text-xl font-semibold text-black">Explore Locations</h1>
      <div className="mt-5 flex touch-pan-x snap-x snap-mandatory snap-center gap-4 space-x-4 overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide md:grid md:grid-cols-4 md:space-x-0">
        {categories.map(({ image, id, name, drive }) => (
          <div className="group flex cursor-pointer space-x-2" key={id}>
            <div className="relative h-14 w-14 overflow-hidden rounded-md p-1">
              <Image
                alt={name}
                src={image}
                layout="fill"
                objectFit="cover"
                className="rounded-md transition duration-150 ease-in-out group-hover:scale-110"
              />
            </div>
            <div>
              <h1 className="font-semibold text-black">{name}</h1>
              <span className="text-xs text-gray-500">{drive}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explore
