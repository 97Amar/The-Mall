import MediaImage from '../../../components/common/MediaImage'
import { FadeUp, SlideIn } from '../../../components/common/animations/Motion'
import FashionSocialButtons from './FashionSocialButtons'
import { brandStory } from '../fashionShoppingData'

export default function BrandStorySection() {
    return (
        <section className="fashion-story" aria-label="Brand story">
            <SlideIn direction="left" className="fashion-story__media">
                <MediaImage
                    src={brandStory.image}
                    fallbackSrc={brandStory.fallback}
                    alt={brandStory.title}
                    className="fashion-story__img"
                />
            </SlideIn>
            <div className="fashion-story__content">
                <FadeUp delay={0.1}>
                    <p className="fashion-story__collection">{brandStory.collectionLabel}</p>
                </FadeUp>
                <FadeUp delay={0.15}>
                    <h2 className="fashion-story__title">{brandStory.title}</h2>
                </FadeUp>
                <FadeUp delay={0.2}>
                    <h3 className="fashion-story__subtitle">{brandStory.subtitle}</h3>
                </FadeUp>
                <FadeUp delay={0.25}>
                    <p className="fashion-story__tag">{brandStory.tag}</p>
                </FadeUp>
                <FadeUp delay={0.3}>
                    <p className="fashion-story__body">{brandStory.body}</p>
                </FadeUp>
                <FadeUp delay={0.35}>
                    <FashionSocialButtons social={brandStory.social} />
                </FadeUp>
            </div>
        </section>
    )
}
