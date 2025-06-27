import { useState } from 'react'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { ImageInterface } from '../../typings'
import ShowImages from './ShowImages'

const ImagesGrid = ({ images }: { images: ImageInterface[] }) => {
  const [showImages, setShowImages] = useState(false)

  const handleShowImages = () => {
    setShowImages(!showImages)
  }
  return (
    <div className="relative grid-cols-1 gap-3 md:grid md:grid-cols-2">
      {images.slice(0, 1).map((image, index) => (
        <div
          className="group relative h-[240px] w-full rounded-l-2xl md:h-[500px]"
          key={index}
        >
          <img
            loading="lazy"
            alt="Image"
            src={image.url_max}
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      ))}
      <div className="hidden grid-cols-1 gap-3 md:grid md:grid-cols-2">
        <div className="flex flex-col space-y-3">
          {images.slice(1, 3).map((image, index) => (
            <div
              className="group relative h-[244px] w-full rounded-2xl"
              key={index}
            >
              <img
                loading="lazy"
                alt="Image"
                src={image.url_max}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-3">
          {images.slice(3, 5).map((image, index) => (
            <div
              className="group relative h-[244px] w-full rounded-br-2xl"
              key={index}
            >
              <img
                loading="lazy"
                alt="Image"
                src={image.url_max}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleShowImages}
        className="absolute bottom-5 right-5 flex items-center space-x-2 rounded-lg bg-white px-4 py-2 text-sm text-black transition duration-150 ease-in-out hover:shadow-lg"
      >
        <HiOutlinePhotograph className="text-lg" />{' '}
        <span>
          Show all photos <span className="text-xs">+{images.length}</span>{' '}
        </span>
      </button>
      <ShowImages
        isOpen={showImages}
        closeModal={handleShowImages}
        data={images}
      />
    </div>
  )
}

export default ImagesGrid
