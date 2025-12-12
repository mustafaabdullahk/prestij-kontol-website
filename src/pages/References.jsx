import { sectors, services, referenceLogos } from '../data/references';
import styles from './References.module.css';

export default function References() {
    return (
        <div className={styles.references}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Referanslar</h1>
                    <p className={styles.heroSubtitle}>
                        Güvenilir iş ortağı olarak çeşitli sektörlere hizmet veriyoruz
                    </p>
                </div>
            </section>

            {/* Partner Logos */}
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
                        <h2 className="section-title">Referanslarımız</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            Bizi tercih eden değerli iş ortaklarımız
                        </p>
                    </div>
                    <div className={styles.logosGrid}>
                        {referenceLogos.map((logo, index) => (
                            <a
                                key={logo.id}
                                href={logo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.logoItem}
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <img src={logo.image} alt={logo.name} title={logo.name} />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sectors */}
            <section className={`section ${styles.sectorsSection}`}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
                        <h2 className="section-title">Hizmet Verdiğimiz Sektörler</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            Farklı sektörlerden birçok kuruma çözümler sunuyoruz
                        </p>
                    </div>
                    <div className={styles.sectorsGrid}>
                        {sectors.map((sector, index) => (
                            <div key={sector.id} className={styles.sectorCard} style={{ animationDelay: `${index * 0.1}s` }}>
                                <span className={styles.sectorIcon}>{sector.icon}</span>
                                <h3 className={styles.sectorTitle}>{sector.title}</h3>
                                <p className={styles.sectorDesc}>{sector.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className={`section ${styles.servicesSection}`}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
                        <h2 className="section-title">Hizmet Alanlarımız</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            Kapsamlı hizmetlerimiz ile yanınızdayız
                        </p>
                    </div>
                    <div className={styles.servicesGrid}>
                        {services.map((service, index) => (
                            <div key={service.id} className={styles.serviceCard} style={{ animationDelay: `${index * 0.1}s` }}>
                                <span className={styles.serviceIcon}>{service.icon}</span>
                                <div className={styles.serviceContent}>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceDesc}>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section">
                <div className="container">
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>100+</span>
                            <span className={styles.statLabel}>Mutlu Müşteri</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>500+</span>
                            <span className={styles.statLabel}>Başarılı Kurulum</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>7</span>
                            <span className={styles.statLabel}>Farklı Sektör</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>45+</span>
                            <span className={styles.statLabel}>Yıllık Tecrübe</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Siz de Referanslarımız Arasına Katılın</h2>
                        <p>Profesyonel çözümlerimizle tanışın.</p>
                        <a href="/iletisim" className={styles.ctaButton}>
                            İletişime Geçin →
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
