import ContactForm from '../components/UI/ContactForm';
import { company } from '../data/company';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <div className={styles.contact}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>İletişim</h1>
                    <p className={styles.heroSubtitle}>
                        Sorularınız için bize ulaşın, en kısa sürede size dönüş yapalım
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {/* Contact Info */}
                        <div className={styles.infoSection}>
                            <h2 className={styles.sectionTitle}>İletişim Bilgileri</h2>

                            <div className={styles.infoCards}>
                                <div className={styles.infoCard}>
                                    <span className={styles.infoIcon}>📍</span>
                                    <div>
                                        <h3>Adres</h3>
                                        <p>{company.contact.address}</p>
                                    </div>
                                </div>

                                <div className={styles.infoCard}>
                                    <span className={styles.infoIcon}>📞</span>
                                    <div>
                                        <h3>Telefon</h3>
                                        <p>
                                            <a href={`tel:${company.contact.phone}`}>{company.contact.phone}</a>
                                        </p>
                                        <p>
                                            <a href={`tel:${company.contact.mobile}`}>{company.contact.mobile}</a>
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.infoCard}>
                                    <span className={styles.infoIcon}>✉️</span>
                                    <div>
                                        <h3>E-posta</h3>
                                        <p>
                                            <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.infoCard}>
                                    <span className={styles.infoIcon}>🕐</span>
                                    <div>
                                        <h3>Çalışma Saatleri</h3>
                                        <p>Hafta içi: {company.businessHours.weekdays}</p>
                                        <p>Cumartesi: {company.businessHours.saturday}</p>
                                        <p>Pazar: {company.businessHours.sunday}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social */}
                            <div className={styles.social}>
                                <h3>Bizi Takip Edin</h3>
                                <div className={styles.socialLinks}>
                                    <a href={company.social.facebook} aria-label="Facebook">📘</a>
                                    <a href={company.social.linkedin} aria-label="LinkedIn">💼</a>
                                    <a href={company.social.instagram} aria-label="Instagram">📸</a>
                                    <a href={company.social.twitter} aria-label="Twitter">🐦</a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={styles.formSection}>
                            <h2 className={styles.sectionTitle}>Mesaj Gönderin</h2>
                            <p className={styles.formDesc}>
                                Aşağıdaki formu doldurarak bize ulaşabilirsiniz. En kısa sürede size dönüş yapacağız.
                            </p>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className={styles.mapSection}>
                <div className="container">
                    <div className={styles.mapPlaceholder}>
                        <span className={styles.mapIcon}>🗺️</span>
                        <h3>Harita</h3>
                        <p>İstanbul, Türkiye</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
