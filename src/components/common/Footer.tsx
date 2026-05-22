import { Link } from 'react-router-dom'
import './Footer.scss'

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-footer__inner">
                <div className="site-footer__top">
                    <div className="site-footer__brand">
                        <h2 className="site-footer__brand-name">The Mall</h2>
                        <p className="site-footer__brand-desc">
                            Defining the future of retail and leisure on a global scale.
                            Join us in shaping the next generation of lifestyle destinations.
                        </p>
                        <div className="site-footer__socials">
                            {['LinkedIn', 'Twitter', 'Instagram', 'Vimeo'].map((social) => (
                                <Link key={social} to="#" className="site-footer__social-link">
                                    {social}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="site-footer__nav-grid">
                        <div>
                            <p className="site-footer__nav-heading">Leasing</p>
                            <ul className="site-footer__nav-list">
                                <li className="site-footer__nav-item">Retail Space</li>
                                <li className="site-footer__nav-item">Luxury Wing</li>
                                <li className="site-footer__nav-item">F&B Outlets</li>
                                <li className="site-footer__nav-item">Pop‑up Design</li>
                            </ul>
                        </div>
                        <div>
                            <p className="site-footer__nav-heading">Partnership</p>
                            <ul className="site-footer__nav-list">
                                <li className="site-footer__nav-item">Sponsorship</li>
                                <li className="site-footer__nav-item">Digital Media</li>
                                <li className="site-footer__nav-item">Activations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="site-footer__bottom">
                    <p>© 2024 Emaar Properties PJSC. All Rights Reserved.</p>
                    <div className="site-footer__bottom-links">
                        <span className="site-footer__bottom-link">Privacy Policy</span>
                        <span className="site-footer__bottom-link">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
