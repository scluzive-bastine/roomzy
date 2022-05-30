import Image from 'next/image'
import logo from '../images/logo.svg'

const Footer = () => {
  return (
    <div className="mt-10 border-t border-gray-200 pt-5">
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex items-center justify-between py-4">
          <div>
            <Image src={logo} width="100%" height="40px" />
            <div className="text-sm text-gray-600">© 2022 Roomzy, Inc</div>
          </div>
          <button className="mt-2 rounded bg-black px-4 py-2 text-white">
            Become a host
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer
