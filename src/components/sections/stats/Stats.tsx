import { Row, Col } from 'react-bootstrap'
import { ScaleUp } from '../../common/animations/Motion'
import './Stats.scss'

const stats = [
    { label: 'Year Established', value: '2008' },
    { label: 'Total Stores', value: '1,200+' },
    { label: 'Annual Visitors', value: '80M+' },
    { label: 'Total Area (sq ft)', value: '12M' },
]

export default function Stats() {
    return (
        <section className="py-5 bg-white border-top border-bottom border-dark border-opacity-10">
            <div className="container">
                <Row className="g-4 py-5">
                    {stats.map((stat, i) => (
                        <Col key={i} xs={6} md={3}>
                            <div className="text-center">
                                <ScaleUp delay={i * 0.1} className="fs-2 fw-bold mb-2">
                                    {stat.value}
                                </ScaleUp>
                                <div className="text-muted small text-uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    )
}
