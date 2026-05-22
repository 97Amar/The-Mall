import type { TodaySliderCard } from '../childrenPlayData'

type Props = {
    card: Extract<TodaySliderCard, { type: 'appearance' }>
}

export default function TodayAppearanceCard({ card }: Props) {
    return (
        <a
            href={card.href}
            className="today-slider__slider-card today-slider__slider-card--appearance"
            style={{ backgroundImage: `url(${card.image})` }}
        >
            <div className="today-slider__bg-gradient" />
            <p>
                <strong>{card.title}</strong>
            </p>
        </a>
    )
}
