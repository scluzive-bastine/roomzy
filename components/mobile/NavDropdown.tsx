import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineUser } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import logo from '../../images/logo.svg'

interface ToggleMenuProps {
  toggleShow: () => void
}

const NavDropdown = ({ toggleShow }: ToggleMenuProps) => {
  return (
    <div className="absolute top-0 left-0 z-50 block h-auto  w-full bg-white py-4 md:hidden">
      <div className="relative">
        <div className="flex justify-between px-4">
          <Image
            alt="Logo"
            src={logo}
            width="100%"
            height="40px"
            className="h-full w-full object-cover"
          />
          <button
            className="flex items-center justify-center rounded bg-gray-200 px-4 py-2 text-lg outline-none transition duration-150 ease-in-out hover:bg-gray-300 md:hidden"
            onClick={toggleShow}
          >
            <IoMdClose />
          </button>
        </div>

        <ul className="space-y-5 px-4 pt-10">
          <li className="nav-item">
            <Link href="/">Place to stay</Link>
          </li>
          <li className="nav-item">
            <Link href="/">Experiences</Link>
          </li>
          <li className="nav-item">
            <Link href="/">Nearby</Link>
          </li>
        </ul>
        <div className="mt-10 flex w-full justify-center rounded-b-2xl border-t border-gray-200 py-4 shadow-xl">
          <button className="flex items-center space-x-2 rounded bg-[#fa6932] px-4 py-2 text-sm text-white transition duration-150 ease-in-out hover:bg-[#db5c2a]">
            <HiOutlineUser />
            <span>Sign in</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavDropdown
