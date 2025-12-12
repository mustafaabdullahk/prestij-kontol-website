import { Link } from 'react-router-dom';
import { company, navigation } from '../../data/company';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.grid}>
                    {/* Company Info */}
                    <div className={styles.section}>
                        <div className={styles.logo}>
                            <img src="/logo.png" alt="Prestij Kontrol Sistemleri" className={styles.logoImage} />
                        </div>
                        <p className={styles.description}>
                            Personel takip sistemleri ve zaman yönetimi çözümlerinde güvenilir iş ortağınız.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Hızlı Bağlantılar</h4>
                        <ul className={styles.links}>
                            {navigation.map((item) => (
                                <li key={item.path}>
                                    <Link to={item.path} className={styles.link}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>İletişim</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <span className={styles.contactIcon}>📍</span>
                                <span>{company.contact.address}</span>
                            </li>
                            <li>
                                <span className={styles.contactIcon}>📞</span>
                                <a href={`tel:${company.contact.phone}`}>{company.contact.phone}</a>
                            </li>
                            <li>
                                <span className={styles.contactIcon}>✉️</span>
                                <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>
                            </li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Çalışma Saatleri</h4>
                        <ul className={styles.hoursList}>
                            <li>
                                <span>Hafta içi</span>
                                <span>{company.businessHours.weekdays}</span>
                            </li>
                            <li>
                                <span>Cumartesi</span>
                                <span>{company.businessHours.saturday}</span>
                            </li>
                            <li>
                                <span>Pazar</span>
                                <span>{company.businessHours.sunday}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} {company.name}. Tüm hakları saklıdır.
                    </p>
                    <div className={styles.social}>
                        <a href={company.social.facebook} aria-label="Facebook">📘</a>
                        <a href={company.social.linkedin} aria-label="LinkedIn">💼</a>
                        <a href={company.social.instagram} aria-label="Instagram">📸</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
