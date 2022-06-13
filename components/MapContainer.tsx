import React, { useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { Map, Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Hotels, HotelsInterface } from '../typings'
import getSymbolFromCurrency from 'currency-symbol-map'
import { priceFormatter } from '../utils/functions'
import MapPopUp from './MapPopUp'

interface MapCenter {
  latitude: number
  longitude: number
}

interface Props {
  feeds: HotelsInterface[]
  showMap: boolean
}

const MapContainer = ({ feeds, showMap }: Props) => {
  const [show, setShow] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState({
    longitude: 0,
  })

  const handleClick = () => setShow(!show)

  const cordinates = feeds.map((data: { longitude: any; latitude: any }) => ({
    longitude: data.longitude,
    latitude: data.latitude,
  }))

  const center = getCenter(cordinates) as MapCenter
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })

  console.log(showMap)

  const mapClasses = () => {
    if (showMap) {
      return 'w-full h-[700px] z-20 top-0 md:top-24 left-0 right-0 2xl:hidden'
    }
    return `${
      show ? 'right-0' : '-right-[700px]'
    } top-28 hidden h-[700px] w-[800px] rounded-2xl transition duration-150 2xl:block`
  }

  return (
    <div className={`absolute ${mapClasses()}`}>
      <button
        className="absolute top-1/2 left-0 z-10 -ml-5 hidden h-11 w-11 items-center justify-center rounded-full bg-white text-2xl text-black shadow-lg 2xl:flex"
        onClick={handleClick}
      >
        {show ? <MdChevronRight /> : <MdChevronLeft />}
      </button>

      <Map
        mapStyle="mapbox://styles/sabastine/cl1m8vw3l00bp16rzpbmb84fz"
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        style={{ borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }}
        onMove={(e) => setViewport({ ...viewport, ...e })}
      >
        {feeds?.map((hotel: HotelsInterface) => (
          <div key={hotel.hotel_id}>
            <Marker longitude={hotel.longitude} latitude={hotel.latitude}>
              <button
                className="w-auto rounded-2xl bg-white px-3 py-1 text-sm font-semibold transition duration-150 ease-in-out hover:scale-110"
                onClick={() => setSelectedLocation(hotel)}
              >
                {getSymbolFromCurrency(hotel.currencycode)}
                {priceFormatter(hotel.min_total_price)}
              </button>
            </Marker>
            {selectedLocation.longitude === hotel.longitude ? (
              <MapPopUp
                hotel={hotel}
                setSelectedLocation={setSelectedLocation}
              />
            ) : (
              false
            )}
          </div>
        ))}
      </Map>
    </div>
  )
}

export default MapContainer
