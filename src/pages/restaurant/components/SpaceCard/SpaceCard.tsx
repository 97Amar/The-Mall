import MediaImage from '../../../../components/common/MediaImage'
import type { RestaurantSpace } from '../../restaurantData/restaurantData'
import './SpaceCard.scss'

type SpaceCardProps = {
    space: RestaurantSpace
    reverse?: boolean
}

export default function SpaceCard({ space, reverse }: SpaceCardProps) {
    return (
        <article
            className={`restaurant-space-card${reverse ? ' restaurant-space-card--reverse' : ''}`}
        >
            <div className="restaurant-space-card__text">
                <p className="restaurant-space-card__count">{space.count}</p>
                <p className="restaurant-space-card__description">{space.description}</p>
            </div>
            <div className="restaurant-space-card__media">
                <MediaImage
                    src={space.image}
                    fallbackSrc={space.fallback}
                    alt={space.description}
                    className="restaurant-space-card__img"
                />
                <div className="restaurant-space-card__shade" />
                <a
                    href={space.href}
                    className="restaurant-space-card__link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="restaurant-space-card__link-text">{space.linkLabel}</span>
                </a>
            </div>
        </article>
    )
}
