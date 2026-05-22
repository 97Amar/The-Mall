import BackgroundVideo from '../../../../components/common/BackgroundVideo'
import type { RestaurantFeature } from '../../restaurantData/restaurantData'
import './RestaurantFeatureCard.scss'

type RestaurantFeatureCardProps = {
    feature: RestaurantFeature
}

function FeatureIcon({ type }: { type: RestaurantFeature['icon'] }) {
    if (type === 'parking') {
        return <span className="restaurant-feature__icon-letter">P</span>
    }
    return (
        <svg
            className="restaurant-feature__icon-svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden
        >
            <path d="M8 11V8a4 4 0 118 0v3" />
            <rect x="6" y="11" width="12" height="10" rx="1" />
        </svg>
    )
}

export default function RestaurantFeatureCard({ feature }: RestaurantFeatureCardProps) {
    return (
        <article className="restaurant-feature">
            <div className="restaurant-feature__media">
                <BackgroundVideo
                    src={feature.video}
                    className="restaurant-feature__video"
                    poster={feature.poster}
                />
            </div>
            <div className="restaurant-feature__body">
                <div className="restaurant-feature__icon-ring">
                    <FeatureIcon type={feature.icon} />
                </div>
                <h3 className="restaurant-feature__title">{feature.title}</h3>
                <p className="restaurant-feature__description">{feature.description}</p>
                {feature.href && (
                    <div className="restaurant-feature__actions">
                        <a
                            href={feature.href}
                            className="restaurant-feature__btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {feature.linkLabel}
                        </a>
                    </div>
                )}
            </div>
        </article>
    )
}
