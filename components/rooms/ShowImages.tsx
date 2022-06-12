import { Dialog, Transition } from '@headlessui/react'
import { Fragment, Key } from 'react'
import { IoMdClose } from 'react-icons/io'
import Masonry from 'react-masonry-css'

interface ShowImagesProps {
  isOpen: boolean
  closeModal: () => void
  data:
    | [
        {
          url_max: string
        }
      ]
    | any
}

const ShowImages = ({ isOpen, closeModal, data }: ShowImagesProps) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-screen-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="mb-10 flex items-center justify-between text-lg font-medium leading-6 text-gray-900"
                >
                  <span>Property Overview</span>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    <IoMdClose />
                  </button>
                </Dialog.Title>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="flex space-x-4"
                >
                  {data.map(
                    (img: { url_max: string | undefined }, index: Key) => (
                      <img
                        src={img.url_max}
                        loading="lazy"
                        key={index}
                        className="mb-4 w-full rounded-lg"
                      />
                    )
                  )}
                </Masonry>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ShowImages
