import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { FadeUp, SlideIn } from '../../components/common/animations/Motion'
import BackgroundVideo from '../../components/common/BackgroundVideo'
import CommonButton from '../../components/common/CommonButton'
import { UNSPLASH, ADDRESS_CDN } from '../../config'
import './StayPage.scss'

export default function StayPage() {
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')

    return (
        <div className="stay-page">
            {/* ── Hero ── */}
            <section className="stay-page__hero">
                <div
                    className="stay-page__hero-bg"
                    style={{
                        backgroundImage: `url(${UNSPLASH}/photo-1631049307264-da0ec9d70304?q=80&w=1400)`,
                    }}
                >
                    <BackgroundVideo
                        src={`${ADDRESS_CDN}/wp-content/uploads/2026/04/Palace-Downtown-Brand-Shoot.mp4-2.mp4`}
                        className="stay-page__hero-video"
                    />
                    <div className="stay-page__hero-overlay-white" />
                    <div className="stay-page__hero-overlay-gradient" />
                </div>

                <div className="stay-page__hero-content">
                    <div>
                        <p className="stay-page__hero-eyebrow">
                            Address Hotels + Resorts · Emaar Properties
                        </p>
                        <h1 className="stay-page__hero-title">Palace Downtown</h1>
                        <p className="stay-page__hero-location">
                            Sheikh Mohammed Bin Rashed Boulevard, Downtown, UAE
                        </p>
                        <div className="stay-page__hero-links">
                            <a href="tel:044287888" className="stay-page__hero-link">04 428 7888</a>
                            <Link to="#" className="stay-page__hero-link">Location</Link>
                            <Link to="#" className="stay-page__hero-link">Contact Us</Link>
                        </div>
                    </div>

                    {/* Booking Bar */}
                    <div className="stay-page__booking-bar">
                        <div className="stay-page__booking-grid">
                            {/* Dates */}
                            <div className="stay-page__booking-field">
                                <p className="stay-page__field-label">Dates</p>
                                <div className="stay-page__date-row">
                                    <input
                                        type="date"
                                        value={checkIn}
                                        onChange={(e) => setCheckIn(e.target.value)}
                                        className="stay-page__date-input"
                                    />
                                    <span className="stay-page__date-sep">–</span>
                                    <input
                                        type="date"
                                        value={checkOut}
                                        onChange={(e) => setCheckOut(e.target.value)}
                                        className="stay-page__date-input"
                                    />
                                </div>
                            </div>

                            {/* Guests */}
                            <div className="stay-page__booking-field">
                                <p className="stay-page__field-label">Room and Guests</p>
                                <select className="stay-page__guest-select">
                                    <option>1 Adult, 0 Child</option>
                                    <option>2 Adults, 0 Child</option>
                                    <option>2 Adults, 1 Child</option>
                                    <option>2 Adults, 2 Children</option>
                                </select>
                            </div>

                            {/* Promo Code */}
                            <div className="stay-page__booking-field">
                                <p className="stay-page__field-label">Code</p>
                                <input
                                    type="text"
                                    placeholder="Enter Code"
                                    className="stay-page__promo-input"
                                />
                            </div>

                            {/* Button */}
                            <CommonButton title="Find Rooms" variant="primary-dark" fluid />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Featured Offer ── */}
            <section className="stay-page__offer">
                <div className="stay-page__offer-inner">
                    <Row className="g-0 align-items-center justify-content-between overflow-hidden">
                        <Col xs={12} lg={6} className="mb-5 mb-lg-0 pe-lg-5">
                            <SlideIn direction="left" offset={100} delay={0.4} duration={0.8} once={false}>
                                <h5 className="stay-page__offer-eyebrow">FEATURED OFFER</h5>
                                <h2 className="stay-page__offer-title">
                                    Early Bird Offer at Palace Downtown
                                </h2>
                                <p className="stay-page__offer-desc">
                                    Unlock early bird discounts and enjoy unforgettable stays at Palace Downtown.
                                    Reserve your stay in advance and enjoy savings from 10% up to 25%.
                                </p>
                                <CommonButton
                                    title="Book Now"
                                    variant="primary-dark"
                                    target="_blank"
                                />
                            </SlideIn>
                        </Col>

                        <Col xs={12} lg={6} className="p-0">
                            <SlideIn direction="right" offset={100} duration={0.8} once={false}>
                                <div className="stay-page__offer-img-wrap">
                                    <img
                                        src={`${ADDRESS_CDN}/wp-content/uploads/2025/11/Palace-Downtown-image.jpg`}
                                        alt="Palace Downtown Offer"
                                        className="stay-page__offer-img img-fluid"
                                    />
                                </div>
                            </SlideIn>
                        </Col>
                    </Row>
                </div>
            </section>

            {/* ── Accommodations ── */}
            <section className="stay-page__rooms">
                <div className="stay-page__rooms-header">
                    <p className="stay-page__rooms-label">LAVISH STAYS</p>
                    <h2 className="stay-page__rooms-title">Luxury Hotel Accommodations</h2>
                </div>

                <div className="stay-page__banner">
                    <img
                        src={`${ADDRESS_CDN}/wp-content/uploads/2020/10/AD_BRAND_PALACE_TERRACE_GARDEN_1965_LIFESTYLE.jpg`}
                        alt="Palace Downtown Accommodations"
                        className="stay-page__banner-img"
                    />
                    <div className="stay-page__banner-fade" />
                    <div className="stay-page__banner-content">
                        <div>
                            <p className="stay-page__banner-label">Palace Downtown</p>
                            <h3 className="stay-page__banner-title">Rooms and Suites</h3>
                        </div>
                       
                    </div>
                </div>
            </section>

            {/* ── Dining ── */}
            <section className="stay-page__dining">
                <div className="stay-page__dining-inner">
                    <Row className="g-5 align-items-center">
                        <Col md={6} className="order-2 order-md-1">
                            <Row className="g-3">
                                <Col xs={6}>
                                    <img
                                        src={`${UNSPLASH}/photo-1550966871-3ed3cdb5ed0c?q=80&w=600`}
                                        alt="Dining 1"
                                        className="stay-page__dining-img"
                                    />
                                </Col>
                                <Col xs={6}>
                                    <img
                                        src={`${UNSPLASH}/photo-1544148103-0773bf10d330?q=80&w=600`}
                                        alt="Dining 2"
                                        className="stay-page__dining-img stay-page__dining-img-offset"
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} className="order-1 order-md-2 ps-md-5">
                            <FadeUp yOffset={30} delay={0.2}>
                                <p className="stay-page__dining-eyebrow">Culinary Excellence</p>
                                <h2 className="stay-page__dining-title">Fine Dining.</h2>
                                <p className="stay-page__dining-desc">
                                    Embark on a sensory journey across our signature dining venues.
                                    From the extraordinary Thai delicacies at Thiptara overlooking the Dubai Fountain,
                                    to the authentic Argentinean grill at Asado, every meal is an unforgettable experience.
                                </p>
                                <CommonButton title="Explore Restaurants" variant="primary-dark" />
                            </FadeUp>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    )
}