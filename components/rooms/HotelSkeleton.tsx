const HotelSkeleton = () => {
  return (
    <div className="mx-auto mt-5 max-w-screen-xl md:mt-10">
      <div className="px-4">
        <div className="animate-pulse">
          {/* Hotel Title */}
          <div className="mb-4 h-8 w-3/4 rounded bg-gray-200"></div>

          {/* Rating and Share */}
          <div className="mb-8 flex items-center justify-between">
            <div className="h-4 w-1/3 rounded bg-gray-200"></div>
            <div className="h-4 w-16 rounded bg-gray-200"></div>
          </div>

          {/* Image Gallery */}
          <div className="mb-6 hidden gap-3 md:grid md:grid-cols-2">
            <div className="h-[500px] rounded-2xl bg-gray-200"></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-[244px] rounded-2xl bg-gray-200"></div>
              <div className="h-[244px] rounded-2xl bg-gray-200"></div>
              <div className="h-[244px] rounded-2xl bg-gray-200"></div>
              <div className="h-[244px] rounded-2xl bg-gray-200"></div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="mb-6 h-64 rounded-2xl bg-gray-200 md:hidden"></div>

          {/* Content Layout */}
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="md:w-2/3">
              {/* Address */}
              <div className="mb-6 border-b border-gray-200 pb-5">
                <div className="mb-4 h-4 w-1/2 rounded bg-gray-200"></div>
                <div className="h-4 w-3/4 rounded bg-gray-200"></div>
              </div>

              {/* Description */}
              <div className="mb-6 border-b border-gray-200 py-6">
                <div className="space-y-3">
                  <div className="h-4 rounded bg-gray-200"></div>
                  <div className="h-4 w-5/6 rounded bg-gray-200"></div>
                  <div className="h-4 w-4/6 rounded bg-gray-200"></div>
                  <div className="h-4 w-3/4 rounded bg-gray-200"></div>
                </div>
              </div>

              {/* Nearby Places */}
              <div className="py-6">
                <div className="mb-4 h-6 w-32 rounded bg-gray-200"></div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2"
                    >
                      <div className="h-4 w-1/3 rounded bg-gray-200"></div>
                      <div className="h-4 w-16 rounded bg-gray-200"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Card */}
            <div className="hidden h-[300px] w-1/3 rounded-2xl bg-gray-200 md:block"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelSkeleton
