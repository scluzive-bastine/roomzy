import Link from 'next/link'
import { HiOutlineUser } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'
import { RiMenu5Line } from 'react-icons/ri'
import logo from '../images/logo.svg'
import Image from 'next/image'
import { useState } from 'react'
import NavDropdown from './mobile/NavDropdown'
import { useRouter } from 'next/router'
import { useProviderContext } from '../context/context'
import SearchForm from '../components/SearchForm'

const Header = () => {
  // toogle dropdown
  const [show, setShow] = useState(false)
  const toggleShow = () => setShow(!show)

  const router = useRouter()

  const { toggleSearch, isSearchOpen } = useProviderContext()

  return (
    <>
      <div className="sticky top-0 z-10 mx-auto max-w-screen-2xl bg-white px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <div className="cursor-pointer" onClick={() => router.push('/')}>
              <Image src={logo} width="100%" height="40px" />
            </div>
            <div className="border-l border-gray-300 pl-5">
              <ul className="hidden items-center space-x-5 md:flex">
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
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="rounded px-4 py-2 text-lg outline-none transition duration-150 ease-in-out hover:bg-gray-200 "
              onClick={toggleSearch}
            >
              <FiSearch />
            </button>
            <button className="hidden items-center space-x-2 rounded bg-[#fa6932] px-4 py-2 text-sm text-white transition duration-150 ease-in-out hover:bg-[#db5c2a] md:flex">
              <HiOutlineUser />
              <span>Sign in</span>
            </button>
            <button
              className="flex rounded bg-gray-200 px-4 py-2 text-lg outline-none transition duration-150 ease-in-out hover:bg-gray-300 md:hidden"
              onClick={toggleShow}
            >
              <RiMenu5Line />
            </button>
          </div>
        </div>
        {show && <NavDropdown toggleShow={toggleShow} />}
      </div>
    </>
  )
}

export default Header
