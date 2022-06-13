import React from 'react'
import Banner from '../Banner'
import Feed from './Feed'
import { Hotels } from '../../typings'

const SearchFeed = ({ feeds }: Hotels) => {
  const feedList = () => {
    if (feeds.length > 10) {
      return (
        <div className="my-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {feeds.slice(0, 4).map((hotel) => (
            <Feed key={hotel.hotel_id} hotel={hotel} />
          ))}
          <Banner />
          {feeds.slice(4, feeds.length).map((hotel) => (
            <Feed key={hotel.hotel_id} hotel={hotel} />
          ))}
        </div>
      )
    } else {
      return (
        <div className="my-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
          {feeds.map((hotel) => (
            <Feed key={hotel.hotel_id} hotel={hotel} />
          ))}
          <Banner />
        </div>
      )
    }
  }
  return feedList()
}

export default SearchFeed
