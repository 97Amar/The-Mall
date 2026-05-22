import type { VideoHTMLAttributes } from 'react'

export interface BackgroundVideoProps
    extends Omit<VideoHTMLAttributes<HTMLVideoElement>, 'src' | 'children'> {
    src: string
    type?: string
}

export default function BackgroundVideo({
    src,
    type = 'video/mp4',
    className,
    autoPlay = true,
    muted = true,
    loop = true,
    playsInline = true,
    poster,
    ...rest
}: BackgroundVideoProps) {
    return (
        <video
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            playsInline={playsInline}
            poster={poster}
            className={className}
            {...rest}
        >
            <source src={src} type={type} />
        </video>
    )
}
