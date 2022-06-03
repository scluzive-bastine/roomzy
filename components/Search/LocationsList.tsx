import { Popover } from '@headlessui/react'
import React from 'react'
import { MdOutlineLocationOn } from 'react-icons/md'

interface Props {
  location: {
    dest_id: string
    dest_type: string
    name: string
    country: string
  }
  handleSetDestinationId: (
    dest_id: string,
    dest_type: string,
    name: string
  ) => void
}

const LocationsList = ({ location, handleSetDestinationId }: Props) => {
  return (
    <Popover.Button
      onClick={() =>
        handleSetDestinationId(
          location.dest_id,
          location.dest_type,
          location.name
        )
      }
      key={location.dest_id}
      className="mb-4 flex w-full cursor-pointer space-x-2 rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100"
    >
      <MdOutlineLocationOn className="text-2xl" />
      <div>
        <h1 className="text-left">{location.name}</h1>
        <p className="text-left text-xs text-gray-500">{location.country}</p>
      </div>
    </Popover.Button>
  )
}

export default LocationsList
