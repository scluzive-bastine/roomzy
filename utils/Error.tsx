import Link from 'next/link'
import { MdErrorOutline } from 'react-icons/md'

const Error = () => {
  return (
    <div className="mx-auto max-w-screen-md py-10">
      <div className="rounded-lg border border-red-100 p-4">
        <div className="flex justify-center">
          <MdErrorOutline className="text-3xl text-red-300" />
        </div>
        <h1 className="text-center">Something went wrong!</h1>
        <div className="mt-3 text-center">
          <Link href="/" className="">
            <button className="rounded border border-[#e0602e] px-4 py-2 text-center text-sm hover:underline">
              Go back
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error
