import { nickAssets } from '../childrenPlayData'

export default function PlayHero() {
    return (
        <section className="hero-full-width hero-full-width--tall" aria-label="Kids play zone entrance">
            <div
                className="hero-full-width__bg"
                style={{ backgroundImage: `url(${nickAssets.heroBg})` }}
            />
            <div className="hero-full-width__bg-gradient" />
        </section>
    )
}
