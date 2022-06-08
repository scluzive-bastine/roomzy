export interface SearchParams {
  locale: string
  name?: string | string[] | undefined
  checkout_date?: string
  checkin_date?: string
  adults_number?: string | string[] | undefined
  dest_id?: string
  units?: string
  dest_type?: string
  order_by?: string
  filter_by_currency?: string
  room_number?: string
}

export interface HotelsInterface {
  currencycode?: string
  preferred_plus?: number
  id?: number
  block_ids?: []
  ufi?: number
  wishlist_count?: number
  is_genius_deal?: number
  checkin?: {}
  checkout?: {}
  badges?: [] | null
  type?: string
  longitude?: number
  latitude?: number
  district_id?: number | null
  city?: string
  distances: [
    {
      icon_set: string | null
      icon_name: string
      text: string
    }
  ]
  hotel_id: number
  accommodation_type_name?: string | null
  city_name_en?: string | null
  composite_price_breakdown?: {} | null
  country_trans?: string | null
  review_score?: number | null
  children_not_allowed?: number | null
  main_photo_url?: string | null
  review_nr?: number | null
  currency_code: string
  hotel_name: string
  address_trans?: string | null
  address: string
  min_total_price: number | null
  unit_configuration_label: string | null
  price_breakdown?: {} | null
  main_photo_id?: number | null
  url?: string | null
  countrycode: string | null
  accommodation_type?: string | null
  max_photo_url: string
  max_1440_photo_url: string | null
}

export interface Hotels {
  feeds: HotelsInterface[]
}

export interface Hotel {
  hotel: HotelsInterface
}
