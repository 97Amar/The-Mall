/**
 * Central configuration — all external media/site base URLs from .env
 */

const env = import.meta.env

export const UNSPLASH = env.VITE_UNSPLASH_BASE
export const PEXELS_VIDEO = env.VITE_PEXELS_VIDEO_BASE
export const VIMEO_PLAYER = env.VITE_VIMEO_PLAYER_BASE
export const ADDRESS_CDN = env.VITE_ADDRESS_HOTELS_CDN
export const ADDRESS_SITE = env.VITE_ADDRESS_HOTELS_SITE

export const TIMELESS_CDN = env.VITE_TIMELESS_CDN
export const TIMELESS_MEDIA = `${TIMELESS_CDN}/storage/media`
export const TIMELESS_SITE = env.VITE_TIMELESS_SITE

export const NICKU_BASE = env.VITE_NICKU_BASE

export const HELENA_MAR = env.VITE_HELENA_MAR_BASE
export const PALOMINO_LIFESTYLE = env.VITE_PALOMINO_LIFESTYLE_BASE
export const LUXE_LIVING = env.VITE_LUXE_LIVING_BASE

/** Unsplash photo path or id → optimized URL */
export const unsplashImage = (photoId: string, w = 1920) =>
    `${UNSPLASH}/${photoId}?auto=format&fit=crop&q=80&w=${w}`

/** Timeless CDN image optimizer */
export const timelessImage = (path: string, width = 1920) =>
    `${TIMELESS_CDN}/nextapi/optimize?src=${encodeURIComponent(path)}&w=${width}&q=80`

/** Nickelodeon Universe asset path */
export const nickAsset = (path: string) => `${NICKU_BASE}${path}`

/** Shopify store image */
export const shopifyImage = (storeBase: string, file: string, width = 1200) =>
    `${storeBase}/cdn/shop/files/${file}?width=${width}`

export const helenaImage = (file: string, width = 1200) => shopifyImage(HELENA_MAR, file, width)
export const palominoImage = (file: string, width = 800) => shopifyImage(PALOMINO_LIFESTYLE, file, width)
export const luxeImage = (file: string, width = 800) => shopifyImage(LUXE_LIVING, file, width)

/** Helena Mar Shopify video path (path starts with /cdn/shop/...) */
export const helenaVideo = (path: string) => `${HELENA_MAR}${path}`
