import { useEffect, useState, useRef } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

interface Props {
  handleShowGuests: () => void
}

const AddGuests = ({ handleShowGuests }: Props) => {
  const [guests, setGuests] = useState(1)
  const ref = useRef<HTMLDivElement>(null)
  // add guest function
  const addGuest = () => {
    setGuests(guests + 1)
  }
  const removeGuest = () => {
    if (guests > 1) {
      setGuests(guests - 1)
    }
  }

  useEffect(() => {
    const handleClickOuteSide = (e: { target: any }) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handleShowGuests && handleShowGuests()
      }
    }
    document.addEventListener('click', handleClickOuteSide, false)
    return () => {
      document.removeEventListener('click', handleClickOuteSide, true)
    }
  }, [handleShowGuests])
  return (
    <div
      className="absolute w-full rounded-2xl bg-white p-4 shadow-lg"
      ref={ref}
    >
      <div className="flex items-center justify-between">
        <h1>Add Guests</h1>
        <div className="mt-1 flex items-center space-x-4 py-1">
          <button
            className={`flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 px-2 py-1 text-black disabled:text-gray-300`}
            onClick={removeGuest}
            disabled={guests === 1}
          >
            <FiMinus />
          </button>
          <span className="text-center text-sm text-gray-500">{guests}</span>
          <button
            className={`flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 px-2 py-1 text-black`}
            onClick={addGuest}
          >
            <FiPlus />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddGuests
