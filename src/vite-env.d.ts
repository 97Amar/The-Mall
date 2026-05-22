/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_UNSPLASH_BASE: string
    readonly VITE_PEXELS_VIDEO_BASE: string
    readonly VITE_VIMEO_PLAYER_BASE: string
    readonly VITE_ADDRESS_HOTELS_CDN: string
    readonly VITE_ADDRESS_HOTELS_SITE: string
    readonly VITE_TIMELESS_CDN: string
    readonly VITE_TIMELESS_SITE: string
    readonly VITE_NICKU_BASE: string
    readonly VITE_HELENA_MAR_BASE: string
    readonly VITE_PALOMINO_LIFESTYLE_BASE: string
    readonly VITE_LUXE_LIVING_BASE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
