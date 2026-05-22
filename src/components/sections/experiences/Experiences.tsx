import { Row, Col } from 'react-bootstrap'
import { FadeUp } from '../../common/animations/Motion'
import { UNSPLASH } from '../../../config'
import './Experiences.scss'

const u = (path: string) => `${UNSPLASH}/${path}`

const experiences = [
    {
        title: 'High-End Boutiques',
        category: 'Fashion',
        desc: 'Explore collections from the world’s most prestigious fashion houses.',
        bg: u('photo-1523381210434-271e8be1f52b?q=80&w=1800&auto=format&fit=crop'),
        size: 'large'
    },
    {
        title: 'Fine Dining Oasis',
        category: 'Culinary',
        desc: 'Michelin-starred chefs and immersive culinary environments.',
        bg: u('photo-1414235077428-338989a2e8c0?q=80&w=1800&auto=format&fit=crop'),
        size: 'small'
    },
    {
        title: 'World Stage Events',
        category: 'Entertainment',
        desc: 'Global performances and immersive cultural exhibits.',
        bg: u('photo-1501386761578-eac5c94b800a?q=80&w=1800&auto=format&fit=crop'),
        size: 'small'
    },
    {
        title: 'Unmatched Hospitality',
        category: 'Lifestyle',
        desc: 'Exclusive lounges and concierge services tailored to perfection.',
        bg: u('photo-1512453979798-5ea266f8880c?q=80&w=2200&auto=format&fit=crop'),
        size: 'wide'
    }
]

export default function Experiences() {
    return (
        <section id="experiences" className="experiences">

            {/* Header */}
            <div className="experiences__header">
                <Row className="align-items-end g-4">
                    <Col lg={7}>
                        <FadeUp yOffset={20}>
                            <p className="experiences__label">
                                Curated Luxury Experiences
                            </p>
                        </FadeUp>
                        <FadeUp delay={0.1} yOffset={40}>
                            <h2 className="experiences__heading">
                                A Universe<br />Of Luxury.
                            </h2>
                        </FadeUp>
                    </Col>
                    <Col lg={5}>
                        <FadeUp delay={0.2} yOffset={30}>
                            <p className="experiences__desc">
                                Discover world-class fashion, immersive nightlife,
                                fine dining, entertainment destinations,
                                and premium lifestyle experiences designed
                                for a new generation of luxury.
                            </p>
                        </FadeUp>
                    </Col>
                </Row>
            </div>

            {/* Grid */}
            <div className="experiences__grid">
                <Row className="g-4">
                    {experiences.map((exp, i) => (
                        <Col
                            key={i}
                            xs={12}
                            md={exp.size === 'wide' ? 12 : 6}
                        >
                            <FadeUp delay={i * 0.1} yOffset={60} duration={0.8} className={`experiences__card ${exp.size === 'wide' ? 'experiences__card--wide' : ''}`}>
                                <div className="experiences__img-wrap">
                                    <div className="experiences__parallax">
                                        <img
                                            src={exp.bg}
                                            alt={exp.title}
                                            className="experiences__img"
                                        />
                                        <div className="experiences__card-overlay" />
                                    </div>
                                </div>

                                <div className="experiences__card-body">
                                    <span className="experiences__card-badge">
                                        Premium Destination
                                    </span>
                                    <h3 className={`experiences__card-title experiences__card-title--${exp.size === 'wide' ? 'wide' : 'normal'}`}>
                                        {exp.title}
                                    </h3>
                                    <p className="experiences__card-desc">
                                        {exp.desc}
                                    </p>
                                </div>
                            </FadeUp>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    )
}