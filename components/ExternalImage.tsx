import Image from 'next/image'
import { useState } from 'react'

// List of known domains that work with Next.js Image
const ALLOWED_DOMAINS = [
  'images.unsplash.com',
  'cf.bstatic.com',
  'lh3.googleusercontent.com',
]

// Check if a URL is from an allowed domain
export const isAllowedDomain = (url: string): boolean => {
  try {
    const hostname = new URL(url).hostname
    return ALLOWED_DOMAINS.some((domain) => hostname.includes(domain))
  } catch {
    return false
  }
}

interface ExternalImageProps {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  className?: string
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive'
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  [key: string]: any
}

// Fallback image component for external images
export const ExternalImage = ({
  src,
  alt,
  width,
  height,
  className,
  layout = 'fill',
  objectFit = 'cover',
  ...props
}: ExternalImageProps) => {
  const [error, setError] = useState(false)

  if (error || !isAllowedDomain(src)) {
    // Use regular img tag for external images
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onError={() => setError(true)}
        style={{ objectFit }}
        {...props}
      />
    )
  }

  // Use Next.js Image for allowed domains
  return (
    <Image
      src={src}
      alt={alt}
      width={width || 500}
      height={height || 300}
      className={className}
      layout={layout}
      objectFit={objectFit}
      onError={() => setError(true)}
      {...props}
    />
  )
}

// Add domain to allowed list
export const addAllowedDomain = (domain: string) => {
  if (!ALLOWED_DOMAINS.includes(domain)) {
    ALLOWED_DOMAINS.push(domain)
  }
}
