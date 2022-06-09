import { DateRangePicker } from 'react-date-range'
import { useEffect, useRef } from 'react'

const CheckInOutDate = ({
  handleShowDate,
  isOpen,
  checkin,
  checkout,
  selectDate,
}) => {
  const ref = useRef(null)

  const selectionRange = {
    startDate: new Date(checkin),
    endDate: new Date(checkout),
    key: 'selection',
  }

  useEffect(() => {
    const handleClickOuteSide = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handleShowDate && handleShowDate()
      }
    }
    document.addEventListener('click', handleClickOuteSide, false)
    return () => {
      document.removeEventListener('click', handleClickOuteSide, true)
    }
  }, [handleShowDate])

  if (!isOpen) return null
  return (
    <div
      className="absolute top-14 right-0 z-20 rounded-2xl bg-white p-4 shadow-lg"
      ref={ref}
    >
      <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        months={2}
        direction="horizontal"
        rangeColors={['#FD5B61']}
        onChange={selectDate}
      />
      <div className="flex justify-end">
        <button
          className="rounded bg-black px-5 py-2 text-sm text-white"
          onClick={handleShowDate}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default CheckInOutDate
