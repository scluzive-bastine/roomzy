import React from 'react'
import Banner from '../Banner'
import Feed from './Feed'
import { HotelsInterface } from '../../typings'

interface Props {
  feeds: HotelsInterface[]
}
const SearchFeed = ({ feeds }: Props) => {
  const feedList = () => {
    if (feeds.length > 10) {
      return (
        <div className="my-10 grid grid-cols-1 gap-4 md:grid-cols-4 ">
          {feeds.slice(0, 4).map((hotel) => (
            <Feed
              key={hotel.hotel_id}
              image={hotel.max_photo_url}
              name={hotel.hotel_name}
            />
          ))}
          <Banner />
          {feeds.slice(4, feeds.length).map((hotel) => (
            <Feed
              key={hotel.hotel_id}
              image={hotel.max_photo_url}
              name={hotel.hotel_name}
            />
          ))}
        </div>
      )
    } else {
      return (
        <div className="my-10 grid grid-cols-1 gap-4 md:grid-cols-4 ">
          {feeds.map((hotel) => (
            <Feed
              key={hotel.hotel_id}
              image={hotel.max_photo_url}
              name={hotel.hotel_name}
            />
          ))}
          <Banner />
        </div>
      )
    }
  }
  return feedList()
}

export default SearchFeed
