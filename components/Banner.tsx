import Image from 'next/image'

const Banner = () => {
  const IMG_URL =
    'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-gray-300 md:col-span-full">
      <Image
        src={IMG_URL}
        layout="fill"
        objectFit="cover"
        className="rounded-2xl"
      />
      <div className="absolute h-full w-full bg-gradient-to-r from-black"></div>
      <div className="absolute flex h-full max-w-xl items-center">
        <div className="px-4 md:px-10">
          <h1 className="mb-3 text-lg text-white md:text-2xl">
            Thoughtfully designed homes <br /> Exceptional locations.{' '}
            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-orange">
              <span className="relative text-sm uppercase italic">
                Verified Quality
              </span>
            </span>
          </h1>
          <p className="font-light text-gray-200">
            Every location is verified through in person quality inspection to
            ensure quality and design. Just look out for the{' '}
            <span className="rounded bg-orange px-2 py-1 text-sm font-semibold">
              Pro
            </span>{' '}
            badge
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner
