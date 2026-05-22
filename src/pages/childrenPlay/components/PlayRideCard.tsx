import MediaImage from '../../../components/common/MediaImage'
import type { PlayRide } from '../childrenPlayData'

type PlayRideCardProps = {
    ride: PlayRide
    href?: string
}

export default function PlayRideCard({ ride, href = '#plan-visit' }: PlayRideCardProps) {
    return (
        <a href={href} className="play-ride-card">
            <div className="play-ride-card__img-wrap">
                <MediaImage
                    src={ride.image}
                    fallbackSrc={ride.fallbackImage}
                    alt={ride.title}
                    className="play-ride-card__img"
                />
                <span className="play-ride-card__tag">{ride.category}</span>
            </div>
            <div className={`play-ride-card__footer play-ride-card__footer--${ride.footerTone}`}>
                <h3 className="play-ride-card__name">{ride.title}</h3>
                <p className="play-ride-card__status">{ride.status}</p>
            </div>
        </a>
    )
}
