import MediaImage from '../../../components/common/MediaImage'
import CommonButton from '../../../components/common/CommonButton'
import { FadeUp } from '../../../components/common/animations/Motion'
import { fashionHero } from '../fashionShoppingData'

export default function FashionHero() {
    const scrollToNewSeason = () => {
        document.getElementById('new-season')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <section className="fashion-hero" aria-label="Fashion hero">
            <MediaImage
                src={fashionHero.image}
                fallbackSrc={fashionHero.fallback}
                alt={fashionHero.title}
                className="fashion-hero__bg"
                loading="eager"
            />
            <div className="fashion-hero__overlay" />
            <div className="fashion-hero__content">
                <FadeUp delay={0.1}>
                    <p className="fashion-hero__eyebrow">{fashionHero.eyebrow}</p>
                </FadeUp>
                <FadeUp delay={0.2}>
                    <h1 className="fashion-hero__title">{fashionHero.title}</h1>
                </FadeUp>
                <FadeUp delay={0.3}>
                    <p className="fashion-hero__subtitle">{fashionHero.subtitle}</p>
                </FadeUp>
                <FadeUp delay={0.4}>
                    <CommonButton
                        title={fashionHero.ctaLabel}
                        variant="outline-light"
                        onClick={scrollToNewSeason}
                    />
                </FadeUp>
            </div>
        </section>
    )
}
