import { useState } from 'react'
import BackgroundVideo from '../../../components/common/BackgroundVideo'
import MediaImage from '../../../components/common/MediaImage'
import { FadeUp } from '../../../components/common/animations/Motion'
import { shopInspo } from '../fashionShoppingData'

export default function ShopInspoSection() {
    const [activeHotspot, setActiveHotspot] = useState<string | null>(null)

    return (
        <section className="fashion-inspo" aria-label="Shop the inspiration">
            <FadeUp className="fashion-inspo__header">
                <h2 className="fashion-section__title">{shopInspo.title}</h2>
            </FadeUp>

            <div className="fashion-inspo__video-wrap">
                <BackgroundVideo
                    src={shopInspo.videoSrc}
                    poster={shopInspo.videoPoster}
                    className="fashion-inspo__video"
                />
                <div className="fashion-inspo__video-overlay" />
            </div>

            <div className="fashion-inspo__look">
                <MediaImage
                    src={shopInspo.lookImage}
                    fallbackSrc={shopInspo.lookFallback}
                    alt="Styled look"
                    className="fashion-inspo__look-img"
                />
                {shopInspo.hotspots.map((spot) => (
                    <button
                        key={spot.id}
                        type="button"
                        className={`fashion-inspo__hotspot${activeHotspot === spot.id ? ' fashion-inspo__hotspot--active' : ''}`}
                        style={{ left: `${spot.left}%`, top: `${spot.top}%` }}
                        onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                        aria-label={`${spot.name}, ${spot.price}`}
                    >
                        <span className="fashion-inspo__hotspot-dot" />
                        {activeHotspot === spot.id && (
                            <span className="fashion-inspo__hotspot-card">
                                <strong>{spot.name}</strong>
                                <em>{spot.price}</em>
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </section>
    )
}
