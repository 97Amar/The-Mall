import { FadeUp } from '../../common/animations/Motion'
import CommonButton from '../../common/CommonButton'
import { UNSPLASH } from '../../../config'
import './Lounge.scss'

export default function Lounge() {
    return (
        <section className="lounge">

            {/* Background */}
            <div className="lounge__bg">
                <img
                    src={`${UNSPLASH}/photo-1524758631624-e2822e304c36?q=80&w=1800&auto=format&fit=crop`}
                    alt="Luxury Lounge"
                    className="lounge__bg-img"
                />
                <div className="lounge__bg-overlay" />
            </div>

            {/* Content */}
            <div className="lounge__content">
                <FadeUp yOffset={50} duration={1}>
                    {/* Badge */}
                    <span className="lounge__badge">Members Only</span>

                    {/* Title */}
                    <h2 className="lounge__title">
                        The Private<br />Lounge.
                    </h2>

                    {/* Description */}
                    <p className="lounge__desc">
                        Escape into an ultra-exclusive sanctuary designed
                        for elite guests, creators, and VIP members.
                        Featuring private dining, luxury interiors,
                        curated music experiences, rare collections,
                        skyline lounges, and personalized hospitality.
                    </p>

                    {/* Buttons */}
                    <div className="lounge__actions">
                        <CommonButton title="REQUEST ACCESS" />
                        <CommonButton title="PRIVATE DINING" variant="outline" />
                    </div>
                </FadeUp>
            </div>

            {/* Bottom Fade */}
            <div className="lounge__bottom-fade" />
        </section>
    )
}