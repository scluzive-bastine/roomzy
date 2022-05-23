import Image from 'next/image'
import bg from '../../images/bh.png'

const Host = () => {
  const user1 =
    'https://images.unsplash.com/photo-1500336624523-d727130c3328?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287'
  const user2 =
    'https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670'
  const user3 =
    'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288'
  const user4 =
    'https://images.unsplash.com/photo-1591938508460-ccd3b076ddd7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326'
  const user5 =
    'https://images.unsplash.com/photo-1511551203524-9a24350a5771?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670'
  const user6 =
    'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800'
  const user7 =
    'https://images.unsplash.com/photo-1525348371953-ac094a7e70be?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287'
  const user8 =
    'https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1323'

  return (
    <div className="relative my-20 w-full rounded-xl bg-[#FBE3D9] p-4 transition duration-150 ease-in-out md:p-10 xl:bg-transparent">
      <Image
        src={bg}
        layout="fill"
        objectFit="contain"
        className="hidden xl:block"
      />
      <div className="relative z-10 order-first flex justify-center pb-5 text-center md:mb-0 md:hidden xl:-order-none">
        <div>
          <h1 className="text-xl font-semibold">Become a Host</h1>
          <p className="font-light text-gray-500">
            Earn extra income and unlock new opportunities by sharing your space
          </p>
          <button className="mt-2 rounded bg-[#fa6932] px-4 py-2 text-white">
            Learn more
          </button>
        </div>
      </div>
      <div className="relative flex touch-pan-x snap-x snap-mandatory snap-center place-items-center gap-5 overflow-x-scroll scroll-smooth scrollbar-hide md:flex-col xl:grid xl:grid-cols-3 xl:space-x-5">
        <div className="relative flex xl:flex-col xl:space-y-20">
          <div className="relative flex space-x-4">
            <div className="relative h-[300px] w-[250px] rounded-xl">
              <Image
                src={user1}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <div className="absolute bottom-0 w-full p-3">
                <div className="w-full rounded-md bg-white px-3 py-2">
                  <h1 className="font-semibold">Mari</h1>
                  <span className="text-sm text-gray-500">21</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-14 right-0 hidden xl:block">
              <div className="relative h-[100px] w-[80px] rounded-md">
                <Image
                  src={user2}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="relative flex space-x-4">
            <div className="relative -mt-5 hidden h-[100px] w-[80px] rounded-md xl:block">
              <Image
                src={user3}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="relative">
              <div className="relative h-[300px] w-[250px] rounded-xl">
                <Image
                  src={user4}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
                <div className="absolute bottom-0 w-full p-3">
                  <div className="w-full rounded-md bg-white px-3 py-2">
                    <h1 className="font-semibold">Jay</h1>
                    <span className="text-sm text-gray-500">24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-first hidden text-center md:block xl:-order-none">
          <h1 className="text-4xl font-semibold">Become a Host</h1>
          <p className="font-light text-gray-500">
            Earn extra income and unlock new opportunities by sharing your space
          </p>
          <button className="mt-2 rounded bg-[#fa6932] px-4 py-2 text-white">
            Learn more
          </button>
        </div>
        <div className="relative flex space-x-4 xl:flex-col xl:space-y-20">
          <div className="relative flex justify-between xl:space-x-4">
            <div className="relative">
              <div className="absolute -bottom-14">
                <div className="relative hidden h-[100px] w-[80px] rounded-md xl:block">
                  <Image
                    src={user5}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="relative h-[300px] w-[250px] rounded-xl">
              <Image
                src={user6}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <div className="absolute bottom-0 w-full p-3">
                <div className="w-full rounded-md bg-white px-3 py-2">
                  <h1 className="font-semibold">Lucy</h1>
                  <span className="text-sm text-gray-500">22</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex space-x-4">
            <div className="relative">
              <div className="relative h-[300px] w-[250px] rounded-xl">
                <Image
                  src={user8}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
                <div className="absolute bottom-0 w-full p-3">
                  <div className="w-full rounded-md bg-white px-3 py-2">
                    <h1 className="font-semibold">Ann</h1>
                    <span className="text-sm text-gray-500">25</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative -mt-5 hidden h-[100px] w-[80px] rounded-md xl:block">
              <Image
                src={user7}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Host
