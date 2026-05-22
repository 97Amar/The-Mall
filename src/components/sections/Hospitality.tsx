import CommonButton from '../common/CommonButton'

export default function Hospitality() {
    return (
        <section className="py-5 bg-white d-flex align-items-center justify-content-center border-bottom border-dark border-opacity-10">
            <div className="text-center px-4 max-w-4xl-custom py-5">
                <span className="d-inline-block px-3 py-1 border border-dark border-opacity-10 rounded-pill text-xxs text-uppercase tracking-super-wide mb-5 text-secondary opacity-75 fw-bold">Unmatched Hospitality</span>
                <h2 className="fs-huge fw-black text-uppercase tracking-tight-custom mb-4 serif-italic text-dark px-2">A New Epoch of<br />Gracious Living.</h2>
                <p className="fs-5 text-secondary opacity-50 lh-lg fw-light mb-5 px-3">
                    Experience peerless service and uncompromising standards at the epicenter of the world's most dynamic city. Where every detail is anticipated, and every expectation is exceeded.
                </p>
                <CommonButton title="DISCOVER MORE" variant="primary-dark" className="mt-2" />
            </div>
        </section>
    )
}
