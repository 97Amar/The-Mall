import { useState } from 'react'

type MediaImageProps = {
    src: string
    fallbackSrc: string
    alt: string
    className?: string
    loading?: 'lazy' | 'eager'
}

export default function MediaImage({
    src,
    fallbackSrc,
    alt,
    className,
    loading = 'lazy',
}: MediaImageProps) {
    const [currentSrc, setCurrentSrc] = useState(src)

    return (
        <img
            src={currentSrc}
            alt={alt}
            className={className}
            loading={loading}
            decoding="async"
            onError={() => {
                if (currentSrc !== fallbackSrc) {
                    setCurrentSrc(fallbackSrc)
                }
            }}
        />
    )
}
