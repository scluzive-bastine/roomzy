import { format } from 'date-fns'

export const priceFormatter = (price) => {
  return price.toFixed().toLocaleString('en-US')
}

export const breakLines = (text) => {
  return text.split('\n').map((item, index) => {
    return (
      <p key={index}>
        {item}
        <br />
      </p>
    )
  })
}

// convert meters to kilometers
export const metersToKilometers = (meters) => {
  return (meters / 1000).toFixed(1) + ' km'
}

//format date
export const formatDate = (date) => {
  return format(new Date(date), 'MMMM dd, yyyy')
}

//save hotel data to localStorage
export const saveHotelOnLocalStorage = (data) => {
  localStorage.setItem('hotel', JSON.stringify(data))
}
