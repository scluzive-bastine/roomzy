import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'

const search = () => {
  const IMG_URL =
    'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
  const img1 =
    'https://images.unsplash.com/photo-1611602132416-da2045990f76?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287'
  const img2 =
    'https://images.unsplash.com/photo-1614846384571-1e31322ed3a9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800'
  const img3 =
    'https://images.unsplash.com/photo-1563720223420-70e9835a9cb3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800'
  const img4 =
    'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287'
  return (
    <div>
      <div className="border-y border-gray-200 bg-gray-100 py-4">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="flex flex-col items-center space-y-2 md:flex-row md:justify-between md:space-y-0">
            <div className="w-full md:w-2/5 lg:w-3/5">
              <span className="text-sm text-gray-500">Location</span>
              <h1 className="font-semibold">
                Still Bend/Frank Lloyd Wright's Schwartz House
              </h1>
            </div>
            <div className="flex w-full flex-grow items-center justify-end space-x-10 md:w-auto">
              <div className="w-1/2 border-gray-300 md:border-l md:pl-4">
                <span className="text-sm text-gray-500">Check-In</span>
                <h1 className="font-semibold">Jun 5</h1>
              </div>
              <div className="w-1/2 border-gray-300 md:border-l md:pl-4">
                <span className="text-sm text-gray-500">Check-Out</span>
                <h1 className="font-semibold">Jun 10</h1>
              </div>
              <div className="w-1/2 border-gray-300 md:border-l md:pl-4">
                <span className="text-sm text-gray-500">Guests</span>
                <h1 className="font-semibold">2</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="my-10 grid grid-cols-1 gap-4 md:grid-cols-4 ">
          <div className="group rounded-xl border border-gray-200 p-4">
            <div className="relative h-[200px] w-full overflow-hidden rounded-xl">
              <Image
                src={img3}
                layout="fill"
                objectFit="cover"
                className="rounded-xl transition duration-150 ease-in-out group-hover:scale-110"
              />
              <div className="absolute top-2 right-2 rounded-md bg-white px-2 py-1 text-xs font-semibold">
                4.9
              </div>
            </div>
            <div className="mt-2">
              <h1 className="cursor-pointer text-xl font-semibold">Tai Hut</h1>
              <h3 className="text-sm text-gray-800">Wright's Schwartz House</h3>
              <span className="text-xs text-gray-500">
                Entire apartment • 3 bedrooms • 3 bathrooms
              </span>
              <button className="mt-4 font-semibold">$1050</button>
            </div>
          </div>
          <div className="group rounded-xl border border-gray-200 p-4">
            <div className="relative h-[200px] w-full overflow-hidden rounded-xl">
              <Image
                src={img2}
                layout="fill"
                objectFit="cover"
                className="rounded-xl transition duration-150 ease-in-out group-hover:scale-110"
              />
              <div className="absolute top-2 right-2 rounded-md bg-white px-2 py-1 text-xs font-semibold">
                4.9
              </div>
            </div>
            <div className="mt-2">
              <h1 className="cursor-pointer text-xl font-semibold">Tai Hut</h1>
              <h3 className="text-sm text-gray-800">Wright's Schwartz House</h3>
              <span className="text-xs text-gray-500">
                Entire apartment • 3 bedrooms • 3 bathrooms
              </span>
              <button className="mt-4 font-semibold">$1050</button>
            </div>
          </div>
          <div className="group rounded-xl border border-gray-200 p-4">
            <div className="relative h-[200px] w-full overflow-hidden rounded-xl">
              <Image
                src={img4}
                layout="fill"
                objectFit="cover"
                className="rounded-xl transition duration-150 ease-in-out group-hover:scale-110"
              />
              <div className="absolute top-2 right-2 rounded-md bg-white px-2 py-1 text-xs font-semibold">
                4.9
              </div>
            </div>
            <div className="mt-2">
              <h1 className="cursor-pointer text-xl font-semibold">Tai Hut</h1>
              <h3 className="text-sm text-gray-800">Wright's Schwartz House</h3>
              <span className="text-xs text-gray-500">
                Entire apartment • 3 bedrooms • 3 bathrooms
              </span>
              <button className="mt-4 font-semibold">$1050</button>
            </div>
          </div>
          <div className="group rounded-xl border border-gray-200 p-4">
            <div className="relative h-[200px] w-full overflow-hidden rounded-xl">
              <Image
                src={img1}
                layout="fill"
                objectFit="cover"
                className="rounded-xl transition duration-150 ease-in-out group-hover:scale-110"
              />
              <div className="absolute top-2 right-2 rounded-md bg-white px-2 py-1 text-xs font-semibold">
                4.9
              </div>
            </div>
            <div className="mt-2">
              <h1 className="cursor-pointer text-xl font-semibold">Tai Hut</h1>
              <h3 className="text-sm text-gray-800">Wright's Schwartz House</h3>
              <span className="text-xs text-gray-500">
                Entire apartment • 3 bedrooms • 3 bathrooms
              </span>
              <button className="mt-4 font-semibold">$1050</button>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-gray-300">
          <Image
            src={IMG_URL}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
          <div className="absolute h-full w-full bg-gradient-to-r from-black"></div>
          <div className="absolute flex h-full max-w-xl items-center">
            <div className="px-4 md:px-10">
              <h1 className="mb-3 text-lg text-white md:text-2xl">
                Thoughtfully designed homes <br /> Exceptional locations.{' '}
                <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-orange">
                  <span className="relative text-sm uppercase italic">
                    Verified Quality
                  </span>
                </span>
              </h1>
              <p className="font-light text-gray-200">
                Every location is verified through in person quality inspection
                to ensure quality and design. Just look out for the{' '}
                <span className="rounded bg-orange px-2 py-1 text-sm font-semibold">
                  Pro
                </span>{' '}
                badge
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default search
