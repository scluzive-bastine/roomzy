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
              currency={hotel.currency_code}
              price={hotel.min_total_price}
              distance={hotel.distances}
            />
          ))}
          <Banner />
          {feeds.slice(4, feeds.length).map((hotel) => (
            <Feed
              key={hotel.hotel_id}
              image={hotel.max_photo_url}
              name={hotel.hotel_name}
              currency={hotel.currency_code}
              distance={hotel.distances}
              price={hotel.min_total_price}
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
              currency={hotel.currency_code}
              distance={hotel.distances}
              price={hotel.min_total_price}
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
