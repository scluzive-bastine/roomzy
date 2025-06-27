import { useState } from 'react'
import { ReviewsInterface } from '../../typings'
import { formatDate } from '../../utils/functions'

const Reviews = ({ reviews }: { reviews: ReviewsInterface[] }) => {
  if (reviews.length === 0) return null

  return (
    <section className="flex flex-col gap-4">
      <p className="text-lg font-semibold">Reviews</p>
      <div className="flex grid-cols-1 gap-5 space-x-4 divide-x divide-zinc-200 overflow-x-auto scrollbar-hide md:grid md:grid-cols-2 md:space-x-0 md:divide-x-0">
        {reviews.slice(0, 6).map((review, index) => {
          return (
            <div
              className="relative flex w-4/5 shrink-0 flex-col gap-2 pl-4 first:pl-0 md:w-full md:pl-0"
              key={index}
            >
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-r from-zinc-100 to-zinc-300">
                  {review.author.avatar && (
                    <img
                      src={review.author.avatar}
                      alt={review.author.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <p>{review.author.name}</p>
                  <p className="text-xs">{formatDate(review.date)}</p>
                </div>
              </div>
              <div className="relative flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <div className="relative h-6 w-6 overflow-hidden rounded-full bg-gradient-to-r from-zinc-100 to-zinc-300">
                    <img
                      src={review.stayed_room_info.photo.url_original}
                      alt={review.stayed_room_info.room_name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <p className="text-xs font-medium">
                    {review?.stayed_room_info?.room_name}
                  </p>
                </div>
                <ReadMoreText text={review.pros} />
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex h-10 w-fit items-center justify-center rounded border border-zinc-200 bg-zinc-100 px-3">
        <p className="text-sm font-semibold text-gray-600">
          {reviews.length - 6} more reviews
        </p>
      </div>
    </section>
  )
}

export default Reviews

const ReadMoreText = ({ text }: { text: string }) => {
  const [showDialog, setShowDialog] = useState(false)

  // Check if text is longer than 3 lines (approximately 150 characters)
  const isLongText = text.length > 150
  const displayText = isLongText ? text.slice(0, 150) + '...' : text

  return (
    <>
      <div className="text-sm text-gray-600">
        <div className={`${isLongText ? 'line-clamp-3' : ''}`}>
          {displayText}
        </div>
        {isLongText && (
          <button
            onClick={() => setShowDialog(true)}
            className="mt-1 text-sm font-medium text-black underline "
          >
            Read more
          </button>
        )}
      </div>

      {showDialog && (
        <ReadMoreDialog
          text={text}
          isOpen={showDialog}
          onClose={() => setShowDialog(false)}
        />
      )}
    </>
  )
}

const ReadMoreDialog = ({
  text,
  isOpen,
  onClose,
}: {
  text: string
  isOpen: boolean
  onClose: () => void
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="max-h-[80vh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Full Review</h3>
          <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="text-sm leading-relaxed text-gray-600">{text}</div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
