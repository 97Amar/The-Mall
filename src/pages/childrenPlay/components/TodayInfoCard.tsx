import type { TodaySliderCard } from '../childrenPlayData'
import MediaImage from '../../../components/common/MediaImage'

type Props = {
    card: Extract<TodaySliderCard, { type: 'info' }>
}

export default function TodayInfoCard({ card }: Props) {
    return (
        <a href={card.href} className="today-slider__slider-card">
            <MediaImage
                src={card.icon}
                fallbackSrc={card.iconFallback}
                alt=""
                className="today-slider__card-icon"
            />
            <p>
                <strong>{card.title}</strong>
            </p>
            {card.detail}
            <div className="today-slider__slider-card-cta">{card.cta}</div>
        </a>
    )
}
