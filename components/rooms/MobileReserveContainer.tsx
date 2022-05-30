import { Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useProviderContext } from '../../context/context'

const MobileReserveContainer = () => {
  const { isCheckoutOpen, toggleCheckout } = useProviderContext()
  return (
    <Transition appear show={isCheckoutOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={toggleCheckout}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Where to?
                </Dialog.Title>
                <div className="mt-5">
                  <div className="mt-2 flex h-fit items-center justify-between space-x-2 rounded-t-xl border border-gray-200 px-4 py-2">
                    <div className="w-1/2 cursor-pointer border-r border-gray-200">
                      <h1 className="font-semibold text-gray-800">Check-In</h1>
                      <span className="text-sm text-gray-500">Add date</span>
                    </div>
                    <div className="w-1/2 cursor-pointer">
                      <h1 className=" font-semibold  text-gray-800">
                        Check-Out
                      </h1>
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
                  <button className="btn mt-4 w-full" onClick={toggleCheckout}>
                    Reserve
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default MobileReserveContainer
