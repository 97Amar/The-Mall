import { useLocation, Link } from 'react-router-dom';
import { SlideIn, HoverUpAnchor } from './animations/Motion';
import './Navbar.scss';

const navLinks = [
    { name: 'Entertain', href: '/entertainment', type: 'route' },
    { name: 'Kids Play', href: '/kids-play', type: 'route' },
    { name: 'Dining', href: '/restaurant', type: 'route' },
    { name: 'Fashion', href: '/fashion-shopping', type: 'route' },
    { name: 'Stay', href: '/stay', type: 'route' },
    { name: 'Events', href: '/events', type: 'route' },
];

const Navbar = () => {
    const location = useLocation();
    const isStayPage = location.pathname === '/stay';
    const isRestaurantPage = location.pathname === '/restaurant';

    return (
        <nav
            className={`navbar-main${isRestaurantPage ? ' navbar-main--restaurant' : ''}`}
        >
            <div className="navbar-main__inner">
                {/* Logo */}
                <Link to="/" className="navbar-main__logo">
                    <SlideIn
                        asSpan={true}
                        direction="left"
                        offset={20}
                        useAnimate={true}
                    >
                        The Mall
                    </SlideIn>
                </Link>

                {/* Nav Links */}
                <div className="navbar-main__links">
                    {navLinks.map((link) =>
                        link.type === 'route' ? (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`navbar-main__link${isStayPage && link.href === '/stay' ? ' navbar-main__link--active' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <HoverUpAnchor
                                key={link.name}
                                href={link.href}
                                className="navbar-main__link"
                            >
                                {link.name}
                            </HoverUpAnchor>
                        )
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;