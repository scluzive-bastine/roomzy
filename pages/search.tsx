import { FiSearch } from 'react-icons/fi'

const search = () => {
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
    </div>
  )
}

export default search
