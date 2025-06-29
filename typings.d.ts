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
  map: any
  currencycode: string
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
  longitude: number
  latitude: number
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
  composite_price_breakdown?: {
    gross_amount: {
      value: number
      currency: string
      amount_unrounded: string
      amount_rounded: string
    }
  } | null
  review_score_word?: string | null
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

export interface ReviewsInterface {
  user_new_badges: string[]
  countrycode: string
  average_score: number
  travel_purpose: string
  pros_translated: string
  review_hash: string
  tags: string[]
  review_id: number
  reviewng: number
  stayed_room_info: {
    room_name: string
    room_id: number
    num_nights: number
    checkin: string
    checkout: string
    photo: {
      photo_id: number
      ratio: number
      url_original: string
      url_640x200: string
      url_max300: string
      url_square60: string
    }
  }
  cons: string
  reviewer_photos: string[]
  title: string
  hotelier_response: string
  helpful_vote_count: number
  languagecode: string
  date: string
  is_incentivised: number
  pros: string
  is_moderated: number
  hotelier_response_date: number
  is_trivial: number
  title_translated: string
  hotelier_name: string
  author: {
    type_string: string
    name: string
    helpful_vote_count: number
    avatar: string
    city: string
    nr_reviews: number
    type: string
    age_group: string
    countrycode: string
    user_id: number
  }
  hotel_id: number
  anonymous: string
  cons_translated: string
}

export interface ImageInterface {
  url_max: string
}
