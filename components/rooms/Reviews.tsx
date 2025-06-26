import Image from 'next/image'
import { ReviewsInterface } from '../../typings'
import { formatDate } from '../../utils/functions'

const Reviews = ({ reviews }: { reviews: ReviewsInterface[] }) => {
  if (reviews.length === 0) return null

  return (
    <section className="flex flex-col gap-2">
      <p className="text-lg font-bold">Reviews</p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {reviews.slice(0, 6).map((review, index) => {
          return (
            <div className="relative flex flex-col gap-2" key={index}>
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-r from-zinc-100 to-zinc-300">
                  {review.author.avatar && (
                    <Image
                      src={review.author.avatar}
                      alt={review.author.name}
                      layout="fill"
                      className="h-full w-full object-cover object-center"
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <p>{review.author.name}</p>
                  <p className="text-xs">{formatDate(review.date)}</p>
                </div>
              </div>
              <div className="relative">
                <p className="text-sm text-gray-600">{review.pros}</p>
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
