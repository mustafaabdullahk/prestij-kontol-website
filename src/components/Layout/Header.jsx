import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../../data/company';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
        if (typeof document === 'undefined') {
            return;
        }

        document.body.style.overflow = isMenuOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header className={styles.header}>
                <div className={`container ${styles.container}`}>
                    <Link to="/" className={styles.logo} onClick={closeMenu}>
                        <img src="/logo.png" alt="Prestij Kontrol Sistemleri" className={styles.logoImage} />
                    </Link>

                    <nav
                        id="primary-navigation"
                        aria-label="Ana navigasyon"
                        className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
                    >
                        <ul className={styles.navList}>
                            {navigation.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
                                        onClick={closeMenu}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button
                        className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        type="button"
                        aria-expanded={isMenuOpen}
                        aria-controls="primary-navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            <div
                className={`${styles.backdrop} ${isMenuOpen ? styles.backdropVisible : ''}`}
                onClick={closeMenu}
                aria-hidden={!isMenuOpen}
            />
        </>
    );
}
