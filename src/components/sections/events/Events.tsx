import { FadeUp, LetterSpacingFadeIn } from '../../common/animations/Motion'
import BackgroundVideo from '../../common/BackgroundVideo'
import CommonButton from '../../common/CommonButton'
import fountainImg from '../../../assets/images/fountain.png'
import { PEXELS_VIDEO } from '../../../config'
import './Events.scss'

export default function Events() {
    return (
        <section id="events" className="events-section">

            {/* Background Layer */}
            <div className="events-section__bg">
                {/* Fallback Image */}
                <img
                    src={fountainImg}
                    alt="Luxury Events"
                    className="events-section__bg-img"
                />

                <BackgroundVideo
                    src={`${PEXELS_VIDEO}/20436209/20436209-uhd_1440_2560_60fps.mp4`}
                    className="events-section__bg-video"
                />

                {/* Cinematic Overlay */}
                <div className="events-section__cinematic-overlay" />

                {/* Vignette */}
                <div className="events-section__vignette" />
            </div>

            {/* Content */}
            <div className="events-section__content">
                <FadeUp yOffset={60} duration={1} className="events-section__wrapper">
                    {/* Label */}
                    <LetterSpacingFadeIn className="events-section__label">
                        Downtown Night Experiences
                    </LetterSpacingFadeIn>

                    {/* Title */}
                    <FadeUp
                        yOffset={40}
                        delay={0.2}
                        className="events-section__title"
                    >
                        Music.<br />
                        Light.<br />
                        Emotion.
                    </FadeUp>

                    {/* Description */}
                    <FadeUp
                        yOffset={20}
                        delay={0.4}
                        className="events-section__description"
                    >
                        Step into a world of immersive nightlife,
                        synchronized fountain spectacles,
                        international concerts, fashion launches,
                        luxury showcases, and unforgettable city energy —
                        all curated inside the most iconic destination
                        in Downtown Dubai.
                    </FadeUp>

                    {/* Buttons */}
                    <FadeUp
                        yOffset={20}
                        delay={0.6}
                        className="events-section__actions"
                    >
                        <CommonButton title="EXPLORE EVENTS" />
                        <CommonButton title="VIP ACCESS" variant="outline" />
                    </FadeUp>
                </FadeUp>
            </div>

            {/* Bottom Fade */}
            <div className="events-section__bottom-fade" />
        </section>
    )
}