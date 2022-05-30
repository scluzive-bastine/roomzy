import Image from 'next/image'
import { FiShare } from 'react-icons/fi'
import { MdOutlineStar, MdLocationOn } from 'react-icons/md'
import { RiArrowDropDownLine } from 'react-icons/ri'
import MobileReserveContainer from '../../components/rooms/MobileReserveContainer'
import MobileReserveButton from '../../components/rooms/MobileReserveButton'
import { useProviderContext } from '../../context/context'

const Room = () => {
  const img1 =
    'https://images.unsplash.com/photo-1611602132416-da2045990f76?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287'
  const img2 =
    'https://images.unsplash.com/photo-1614846384571-1e31322ed3a9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800'
  const img3 =
    'https://images.unsplash.com/photo-1563720223420-70e9835a9cb3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800'
  const img4 =
    'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287'

  const { isCheckoutOpen } = useProviderContext()
  return (
    <div className="mx-auto mt-5 max-w-screen-xl md:mt-10">
      <div className="px-4">
        <div className="relative h-[200px] w-full md:hidden">
          <Image
            src={img1}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="mb-5 mt-5 text-lg font-semibold md:mt-0 md:text-3xl">
            Still Bend/Frank Lloyd Wright's Schwartz House
          </h1>
          <div className="flex-col items-center justify-between space-y-2 md:flex-row md:space-y-0">
            <div className="flex-col items-center space-y-2 md:flex-row md:space-x-4 md:space-y-0">
              <span className="flex items-center space-x-1">
                <MdOutlineStar className="text-xl" />
                <span>
                  5.0{' '}
                  <span className="text-gray-500 underline">(178) reviews</span>
                </span>
              </span>
              <span className="flex items-center space-x-1">
                <MdLocationOn />
                <span className="text-gray-500">
                  Two Rivers, Wisconsin, United States
                </span>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FiShare className="text-xl" />
              <span className="underline">Share</span>
            </div>
          </div>
        </div>
        <div className="hidden grid-cols-1 gap-4 py-10 md:grid md:grid-cols-3">
          <div className="group relative h-[240px] w-full rounded-l-2xl md:h-[500px]">
            <Image
              src={img1}
              layout="fill"
              objectFit="cover"
              className="rounded-l-2xl"
            />
          </div>
          <div className="flex flex-col space-y-5">
            <div className="group relative h-[240px] w-full ">
              <Image src={img2} layout="fill" objectFit="cover" className="" />
            </div>
            <div className="group relative h-[240px] w-full ">
              <Image src={img3} layout="fill" objectFit="cover" className="" />
            </div>
          </div>
          <div className="group relative h-[240px] w-full rounded-r-2xl md:h-[500px]">
            <Image
              src={img4}
              layout="fill"
              objectFit="cover"
              className="rounded-r-2xl"
            />
          </div>
        </div>
        <div className="mt-10 shrink-0 flex-grow-0 flex-col justify-between space-x-5 md:mt-0 md:flex md:flex-row">
          <div className="md:w-2/3">
            <div className="border-b border-gray-200 pb-5">
              <h1 className="text-xl font-semibold capitalize">
                House Hosted by George
              </h1>
              <span className="text-sm text-gray-500">
                2 guests . 1 bedroom . 1 bath . 1 bed
              </span>
            </div>
            <div className="py-4 text-gray-500">
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti praesentium velit laborum provident ullam iure modi!
                Eaque maxime quidem mollitia, enim temporibus, distinctio, omnis
                sit architecto labore animi delectus illum?
              </p>
            </div>
          </div>
          <div className="hidden flex-grow rounded-2xl border border-gray-100 p-5 shadow-lg md:block">
            <div className="flex justify-between">
              <h1>
                <span className="font-semibold">$98</span> / night
              </h1>
              <span className="flex items-center space-x-1">
                <MdOutlineStar className="text-xl" />
                <span>
                  5.0{' '}
                  <span className="text-gray-500 underline">(178) reviews</span>
                </span>
              </span>
            </div>
            <div className="mt-5">
              <div className="mt-2 flex h-fit items-center justify-between space-x-2 rounded-t-xl border border-gray-200 px-4 py-2">
                <div className="w-1/2 cursor-pointer border-r border-gray-200">
                  <h1 className="font-semibold text-gray-800">Check-In</h1>
                  <span className="text-sm text-gray-500">Add date</span>
                </div>
                <div className="w-1/2 cursor-pointer">
                  <h1 className=" font-semibold  text-gray-800">Check-Out</h1>
                  <span className="text-sm text-gray-500">Add date</span>
                </div>
              </div>
              <div className="rounded-b-xl border-x border-b border-gray-200 px-4 py-2">
                <h1>Guests</h1>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">1 Guest</span>
                  <RiArrowDropDownLine />
                </div>
              </div>
              <button className="btn mt-4 w-full">Reserve</button>
            </div>
          </div>
        </div>
      </div>
      <MobileReserveButton />
      {isCheckoutOpen && <MobileReserveContainer />}
    </div>
  )
}

export default Room
