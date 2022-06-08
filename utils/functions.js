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
