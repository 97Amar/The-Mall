import { Link } from 'react-router-dom'
import { FadeUp } from '../../components/common/animations/Motion'
import { Row, Col } from 'react-bootstrap'
import { attractions } from './EntertainmentDetailPage'
import './EntertainmentPage.scss'

export default function EntertainmentPage() {
    return (
        <div className="entertainment-page">
            {/* Header */}
            <div className="entertainment-page__header">
                <FadeUp yOffset={24} duration={0.7} once={false}>
                    <p className="entertainment-page__eyebrow">
                        The Mall · Entertainment Hub
                    </p>
                    <h1 className="entertainment-page__title">
                        World of<br />Wonder.
                    </h1>
                </FadeUp>
            </div>

            {/* Grid */}
            <div className="entertainment-page__grid">
                <Row className="g-4">
                    {attractions.map((item, i) => (
                        <Col key={item.id} xs={12} md={6} lg={4}>
                            <FadeUp
                                yOffset={30}
                                delay={i * 0.05}
                                duration={0.5}
                                className="entertainment-page__card"
                                once={false}
                            >
                                <Link
                                    to={`/entertainment/${item.id}`}
                                    className="entertainment-page__card-link"
                                >
                                    {/* Image */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="entertainment-page__card-img"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="entertainment-page__card-overlay" />

                                    {/* Category Badge */}
                                    <div className="entertainment-page__card-badge">
                                        <span className="entertainment-page__badge-text">
                                            {item.category}
                                        </span>
                                    </div>

                                    {/* Arrow */}
                                    <div className="entertainment-page__card-arrow">↗</div>
                                    {/* Title Block */}
                                    <div className="entertainment-page__card-body">
                                        <p className="entertainment-page__card-tagline">
                                            {item.tagline}
                                        </p>
                                        <h3 className="entertainment-page__card-title">
                                            {item.title}
                                        </h3>
                                        <span className="entertainment-page__card-explore">
                                            Discover Now <span className="entertainment-page__card-arrow">→</span>
                                        </span>
                                    </div>
                                </Link>
                            </FadeUp>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* Back */}
            <Link to="/" className="entertainment-page__back">
                ← Back to Home
            </Link>
        </div>
    )
}
