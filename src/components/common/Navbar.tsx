import { useEffect, useState } from 'react';
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

const MOBILE_MENU_ID = 'navbar-mobile-menu';

function isNavLinkActive(pathname: string, href: string) {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
}

const Navbar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const isRestaurantPage = location.pathname === '/restaurant';

    const closeMenu = () => setMenuOpen(false);
    const toggleMenu = () => setMenuOpen((open) => !open);

    useEffect(() => {
        closeMenu();
    }, [location.pathname]);

    useEffect(() => {
        if (!menuOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeMenu();
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [menuOpen]);

    return (
        <nav
            className={`navbar-main${isRestaurantPage ? ' navbar-main--restaurant' : ''}${menuOpen ? ' navbar-main--menu-open' : ''}`}
            aria-label="Main navigation"
        >
            <div className="navbar-main__inner">
                <Link to="/" className="navbar-main__logo" onClick={closeMenu}>
                    <SlideIn asSpan={true} direction="left" offset={20} useAnimate={true}>
                        The Mall
                    </SlideIn>
                </Link>

                <button
                    type="button"
                    className="navbar-main__toggle"
                    aria-expanded={menuOpen}
                    aria-controls={MOBILE_MENU_ID}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    onClick={toggleMenu}
                >
                    <span className="navbar-main__toggle-line" />
                    <span className="navbar-main__toggle-line" />
                    <span className="navbar-main__toggle-line" />
                </button>

                <div id={MOBILE_MENU_ID} className="navbar-main__links">
                    {navLinks.map((link) => {
                        const active = isNavLinkActive(location.pathname, link.href);
                        const linkClass = `navbar-main__link${active ? ' navbar-main__link--active' : ''}`;

                        return link.type === 'route' ? (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={linkClass}
                                onClick={closeMenu}
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <HoverUpAnchor
                                key={link.name}
                                href={link.href}
                                className={linkClass}
                                onClick={closeMenu}
                            >
                                {link.name}
                            </HoverUpAnchor>
                        );
                    })}
                </div>
            </div>

            <button
                type="button"
                className="navbar-main__backdrop"
                aria-label="Close menu"
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
            />
        </nav>
    );
};

export default Navbar;
