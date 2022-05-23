import locations from '../../data/locations.json'

const Destinations = () => {
  return (
    <div className="pb-10">
      <h1 className="text-xl font-semibold text-black">Explore Locations</h1>
      <div className="relative mt-5 flex touch-pan-x snap-x snap-mandatory snap-center space-x-8 overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide md:grid md:grid-cols-4 md:gap-4 md:space-x-0 lg:grid-cols-6 ">
        {locations.map(({ city, country, id }) => (
          <div className="group cursor-pointer" key={id}>
            <h1 className="font-semibold text-gray-700 transition duration-150 ease-in-out group-hover:underline">
              {city}
            </h1>
            <span className="text-sm text-gray-500">{country}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Destinations
