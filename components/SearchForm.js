import { Fragment, useState } from 'react'
import { Transition, Dialog, Popover } from '@headlessui/react'
import { useProviderContext } from '../context/context'
import { DateRangePicker } from 'react-date-range'
import { format } from 'date-fns'
import { FiMinus, FiPlus, FiSearch } from 'react-icons/fi'

import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file

const SearchForm = () => {
  const { isSearchOpen, toggleSearch } = useProviderContext()

  const [location, setLocation] = useState('')
  const [checkin, setCheckin] = useState(new Date())
  const [checkout, setCheckout] = useState(new Date())
  const [guests, setGuests] = useState(1)

  const handleSelect = (ranges) => {
    setCheckin(ranges.selection.startDate)
    setCheckout(ranges.selection.endDate)
  }

  const selectionRange = {
    startDate: checkin,
    endDate: checkout,
    key: 'selection',
  }

  const formattedCheckInDate = format(new Date(checkin), 'MMMM dd')
  const formattedCheckOutDate = format(new Date(checkout), ' MMMM dd')

  // add guest function
  const addGuest = () => {
    setGuests(guests + 1)
  }
  const removeGuest = () => {
    if (guests > 1) {
      setGuests(guests - 1)
    }
  }

  return (
    <Transition appear show={isSearchOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={toggleSearch}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 top-1/3 overflow-y-auto">
          <div className="flex justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mx-auto w-full max-w-screen-xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Where to?
                </Dialog.Title>
                <div className="mx-auto mt-5 max-w-screen-xl">
                  <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                    <div className="flex w-full flex-col  md:w-3/5">
                      <label
                        htmlFor="location"
                        className="text-left font-semibold"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        placeholder="Where are you going to?"
                        className="mt-1 rounded-lg border border-gray-200 p-3 text-sm outline-none"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                    <div className="flex w-full flex-col border-gray-200 md:w-2/3 md:border-l md:pl-4">
                      <Popover>
                        <Popover.Button className="w-full cursor-pointer rounded-2xl px-4 py-2 outline-none focus:bg-gray-100/60">
                          <div className="flex">
                            <div className="flex w-1/2 flex-col">
                              <label
                                htmlFor="checkin"
                                className="text-left font-semibold"
                              >
                                Check in
                              </label>
                              <span className="mt-1 py-3 text-left text-sm text-gray-500 ">
                                {checkin ? formattedCheckInDate : 'Check-In'}
                              </span>
                            </div>
                            <div className="flex w-1/2 flex-col border-gray-200 pl-4 md:border-l">
                              <label
                                htmlFor="checkout"
                                className="text-left font-semibold"
                              >
                                Check out
                              </label>
                              <span className="mt-1 py-3 text-left text-sm text-gray-500 ">
                                {checkout ? formattedCheckOutDate : 'Check-Out'}
                              </span>
                            </div>
                          </div>
                        </Popover.Button>

                        <Popover.Panel className="absolute left-0 top-48 z-10 w-full overflow-x-scroll rounded-2xl bg-white p-5 shadow-2xl">
                          <DateRangePicker
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            months={2}
                            direction="horizontal"
                            rangeColors={['#FD5B61']}
                            onChange={handleSelect}
                          />
                        </Popover.Panel>
                      </Popover>
                    </div>
                    <div className="flex w-full flex-col border-gray-200 md:w-1/2 md:border-l md:pl-4">
                      <label
                        htmlFor="location"
                        className="text-left font-semibold"
                      >
                        Guests
                      </label>
                      <div className="mt-1 flex items-center space-x-4 py-1">
                        <button
                          className={`flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 px-2 py-1 text-black disabled:text-gray-300`}
                          onClick={removeGuest}
                          disabled={guests === 1}
                        >
                          <FiMinus />
                        </button>
                        <span className="text-center text-sm text-gray-500">
                          {guests}
                        </span>
                        <button
                          className={`flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 px-2 py-1 text-black`}
                          onClick={addGuest}
                        >
                          <FiPlus />
                        </button>
                      </div>
                    </div>
                    <div className="flex w-full justify-start md:w-auto">
                      <button className="btn flex items-center space-x-2">
                        <FiSearch />
                        <span>Search</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default SearchForm
