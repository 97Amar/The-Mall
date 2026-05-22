import { Link } from 'react-router-dom'
import { nickAssets } from '../childrenPlayData'

export default function PlanVisitCta() {
    return (
        <section
            className="kids-play__cta-section"
            style={{ backgroundImage: `url(${nickAssets.todayPattern})` }}
        >
            <Link to="/entertainment/kidzania" className="kids-play__cta-btn">
                Start Planning Your Visit
            </Link>
        </section>
    )
}
