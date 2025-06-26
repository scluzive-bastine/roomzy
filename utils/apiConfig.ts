// API Configuration
export const API_CONFIG = {
  // Rate limiting settings
  RATE_LIMIT: {
    MAX_REQUESTS: 5, // Maximum requests per window
    WINDOW_MS: 60000, // 1 minute window
  },

  // Retry settings
  RETRY: {
    MAX_RETRIES: 3,
    BASE_DELAY: 1000, // 1 second
  },

  // Cache settings
  CACHE: {
    TIMEOUT_MS: 5 * 60 * 1000, // 5 minutes
  },

  // API endpoints
  ENDPOINTS: {
    PHOTOS: 'photos',
    DESCRIPTION: 'description',
    NEARBY_PLACES: 'nearby-places',
    TIPS: 'tips',
    REVIEWS: 'reviews',
  },

  // Default parameters
  DEFAULT_PARAMS: {
    LOCALE: 'en-gb',
    CUSTOMER_TYPE: 'solo_traveller,review_category_group_of_friends',
    LANGUAGE_FILTER: 'en-gb,de,fr',
    SORT_TYPE: 'SORT_MOST_RELEVANT',
  },
}

// Error messages
export const ERROR_MESSAGES = {
  RATE_LIMIT: 'Rate limit exceeded. Please try again in a moment.',
  INVALID_API_KEY: 'API key is invalid or expired.',
  NOT_FOUND: 'Hotel data not found.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  GENERIC: 'Failed to fetch hotel data. Please try again.',
}
