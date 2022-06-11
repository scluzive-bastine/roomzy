import React, { useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { Map, Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Hotels, HotelsInterface } from '../typings'
import { Popover } from '@headlessui/react'
import Image from 'next/image'
import getSymbolFromCurrency from 'currency-symbol-map'
import { priceFormatter } from '../utils/functions'

interface MapCenter {
  latitude: number
  longitude: number
}

const MapContainer = ({ feeds }: Hotels) => {
  const [show, setShow] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState({
    longitude: 0,
  })

  const handleClick = () => setShow(!show)

  const cordinates = feeds.map((data) => ({
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

  return (
    <div
      className={`absolute ${
        show ? 'right-0' : '-right-[35%]'
      } top-28 h-[700px] w-[800px] rounded-2xl transition duration-150`}
    >
      <button
        className="absolute top-1/2 left-0 z-10 -ml-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl text-black shadow-lg"
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
        {feeds?.map((d: HotelsInterface) => (
          <div key={d.hotel_id}>
            <Marker longitude={d.longitude} latitude={d.latitude}>
              <button
                className="w-auto rounded-2xl bg-white px-3 py-1 text-sm font-semibold transition duration-150 ease-in-out hover:scale-110"
                onClick={() => setSelectedLocation(d)}
              >
                {getSymbolFromCurrency(d.currencycode)}
                {priceFormatter(d.min_total_price)}
              </button>
            </Marker>
            {selectedLocation.longitude === d.longitude ? (
              <Popup
                onClose={() => setSelectedLocation({ longitude: 0 })}
                closeOnClick={true}
                closeButton={false}
                latitude={d.latitude}
                longitude={d.longitude}
                className="relative z-10 w-[300px] bg-transparent"
              >
                <div className="">
                  <div className="relative h-[150px] w-full overflow-hidden">
                    <Image
                      src={d.max_photo_url}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-sm"
                    />
                  </div>
                  <div className="mt-2">
                    <h1 className="text-sm font-semibold">{d.hotel_name}</h1>
                    <p className="mt-1 text-sm font-semibold">
                      {getSymbolFromCurrency(d.currencycode)}
                      {priceFormatter(d.min_total_price)} {''}
                      <span className="font-normal text-gray-500">
                        night
                      </span>{' '}
                    </p>
                  </div>
                </div>
              </Popup>
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
