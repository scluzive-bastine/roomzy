import type { NextPage } from 'next'
import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'
import Explore from '../components/Explore/Explore'

const Home: NextPage = () => {
  const IMG_URL =
    'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670'

  const img1 =
    'https://images.unsplash.com/photo-1611602132416-da2045990f76?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287'
  const img2 =
    'https://images.unsplash.com/photo-1614846384571-1e31322ed3a9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800'
  const img3 =
    'https://images.unsplash.com/photo-1563720223420-70e9835a9cb3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800'
  const img4 =
    'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287'
  return (
    <main className="mx-auto max-w-screen-2xl px-4">
      <div className="relative pb-10">
        <div className="relative h-[400px] w-full rounded-3xl md:h-[400px] md:w-full xl:h-[600px]">
          <Image
            src={IMG_URL}
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
          <div className="absolute h-full w-full rounded-3xl bg-[#0000003d]"></div>
        </div>
        <div className="absolute top-1/3 left-1/2 w-full -translate-x-2/4 transform px-4 text-center">
          <h1 className="text-3xl font-semibold text-white">
            The Greatest Outdoors
          </h1>
          <p className="text-lg font-light text-gray-300">
            Travling and Booking Simplified
          </p>
          <div className="mt-4 flex justify-center">
            <button className="rounded-lg bg-black px-4 py-2 text-white">
              Get inspired
            </button>
          </div>
          <div className="mx-auto hidden w-full xl:mt-10 xl:block xl:w-2/3">
            <div className="flex items-center justify-between rounded-xl bg-white px-5 py-3">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col xl:w-64">
                  <label htmlFor="location" className="text-left font-semibold">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Where are you going to?"
                    className="mt-1 text-sm outline-none"
                  />
                </div>
                <div className="flex flex-col border-l border-gray-200 pl-4">
                  <label htmlFor="location" className="text-left font-semibold">
                    Check in
                  </label>
                  <input
                    type="text"
                    placeholder="Check in date"
                    className="mt-1 text-sm outline-none"
                  />
                </div>
                <div className="flex flex-col border-l border-gray-200 pl-4">
                  <label htmlFor="location" className="text-left font-semibold">
                    Check out
                  </label>
                  <input
                    type="text"
                    placeholder="Check out date"
                    className="mt-1 text-sm outline-none"
                  />
                </div>
                <div className="flex flex-col border-l border-gray-200 pl-4">
                  <label htmlFor="location" className="text-left font-semibold">
                    Guests
                  </label>
                  <input
                    type="text"
                    placeholder="Number of Guests"
                    className="mt-1 text-sm outline-none"
                  />
                </div>
              </div>
              <button className="rounded-lg bg-[#fa6932] p-3 text-lg text-white">
                <FiSearch />
              </button>
            </div>
          </div>
          <div className="mx-auto mt-3 block w-full cursor-pointer md:mt-10 xl:hidden">
            <div className="flex items-center justify-between rounded-lg bg-white px-5 py-3">
              <div className="flex flex-col">
                <div className="text-left font-semibold text-black">
                  Where to?
                </div>
                <span className="mt-1 whitespace-nowrap text-sm text-gray-500">
                  Anywhere . Anytime. Add Guests
                </span>
              </div>
              <button className="rounded-lg bg-[#fa6932] p-3 text-lg text-white">
                <FiSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-5 pb-10 md:grid-cols-3">
          <div className="group relative h-[240px] w-full rounded-2xl md:h-[500px]">
            <Image
              src={img1}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            <div className="absolute hidden h-full w-full rounded-2xl bg-[#0000006f] transition duration-150 ease-in-out group-hover:flex">
              <div className="absolute bottom-10 left-4">
                <h1 className="text-xl font-semibold text-white">Outdoor</h1>
                <p className="text-sm font-light text-white">131 Stays</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="group relative h-[240px] w-full rounded-2xl">
              <Image
                src={img2}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute hidden h-full w-full rounded-2xl bg-[#0000006f] transition duration-150 ease-in-out group-hover:flex">
                <div className="absolute bottom-10 left-4">
                  <h1 className="text-xl font-semibold text-white">Outdoor</h1>
                  <p className="text-sm font-light text-white">131 Stays</p>
                </div>
              </div>
            </div>
            <div className="group relative h-[240px] w-full rounded-2xl">
              <Image
                src={img3}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute hidden h-full w-full rounded-2xl bg-[#0000006f] transition duration-150 ease-in-out group-hover:flex">
                <div className="absolute bottom-10 left-4">
                  <h1 className="text-xl font-semibold text-white">Outdoor</h1>
                  <p className="text-sm font-light text-white">131 Stays</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative h-[240px] w-full rounded-2xl md:h-[500px]">
            <Image
              src={img4}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            <div className="absolute hidden h-full w-full rounded-2xl bg-[#0000006f] transition duration-150 ease-in-out group-hover:flex">
              <div className="absolute bottom-10 left-4">
                <h1 className="text-xl font-semibold text-white">Outdoor</h1>
                <p className="text-sm font-light text-white">131 Stays</p>
              </div>
            </div>
          </div>
        </div>
        <Explore />
      </div>
    </main>
  )
}

export default Home
