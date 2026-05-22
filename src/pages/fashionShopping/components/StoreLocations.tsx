import MediaImage from '../../../components/common/MediaImage'
import { FadeUp } from '../../../components/common/animations/Motion'
import { storeLocations } from '../fashionShoppingData'

export default function StoreLocations() {
    return (
        <section className="fashion-section fashion-locations" aria-label="Store locations">
            <FadeUp className="fashion-section__header">
                <h2 className="fashion-section__title">Where to find us?</h2>
            </FadeUp>
            <div className="fashion-locations__grid">
                {storeLocations.map((store, index) => (
                    <FadeUp key={store.id} delay={index * 0.08} className="fashion-locations__item">
                        <div className="fashion-locations__card">
                            <MediaImage
                                src={store.image}
                                fallbackSrc={store.fallback}
                                alt={store.name}
                                className="fashion-locations__img"
                            />
                            <h3 className="fashion-locations__name">{store.name}</h3>
                        </div>
                    </FadeUp>
                ))}
            </div>
        </section>
    )
}
