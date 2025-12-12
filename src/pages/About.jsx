import { company } from '../data/company';
import styles from './About.module.css';

export default function About() {
    return (
        <div className={styles.about}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Hakkımızda</h1>
                    <p className={styles.heroSubtitle}>1979'dan beri güvenilir çözümler</p>
                </div>
            </section>

            {/* History Section */}
            <section className="section">
                <div className="container">
                    <div className={styles.content}>
                        <div className={styles.mainContent}>
                            <h2 className={styles.sectionTitle}>Tarihçemiz</h2>
                            <p className={styles.paragraph}>
                                {company.about.history}
                            </p>
                            <p className={styles.paragraph}>
                                {company.about.growth}
                            </p>
                            <p className={styles.paragraph}>
                                {company.about.present}
                            </p>
                        </div>
                        <div className={styles.sideCard}>
                            <div className={styles.cardIcon}>🏢</div>
                            <h3>{company.name}</h3>
                            <p>Konya Merkezli</p>
                            <div className={styles.timeline}>
                                {company.milestones.map((milestone, index) => (
                                    <div key={index} className={styles.timelineItem}>
                                        <span className={styles.year}>{milestone.year}</span>
                                        <span className={styles.event}>{milestone.event}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className={`section ${styles.expertiseSection}`}>
                <div className="container">
                    <div className={styles.expertiseContent}>
                        <h2 className={styles.sectionTitle}>Uzmanlık Alanlarımız</h2>
                        <p className={styles.paragraph}>
                            {company.about.expertise}
                        </p>
                        <p className={styles.paragraph}>
                            Gelişen teknolojiyi yakından takip eden, sürekli kendini yenileyen ve sektöre yön veren bir anlayışla; kamu kurumlarından özel sektöre kadar geniş bir müşteri portföyüne ihtiyaca özel çözümler sunmaktayız.
                        </p>
                    </div>
                </div>
            </section>

            {/* Software & R&D */}
            <section className="section">
                <div className="container">
                    <div className={styles.softwareSection}>
                        <div className={styles.softwareIcon}>💻</div>
                        <h2 className={styles.sectionTitle}>Yazılım ve Ar-Ge Çözümlerimiz</h2>
                        <p className={styles.paragraph}>
                            {company.about.software}
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className={`section ${styles.missionSection}`}>
                <div className="container">
                    <div className={styles.missionGrid}>
                        <div className={styles.missionCard}>
                            <div className={styles.missionIcon}>🎯</div>
                            <h3>Misyonumuz</h3>
                            <p>{company.mission}</p>
                        </div>
                        <div className={styles.missionCard}>
                            <div className={styles.missionIcon}>🚀</div>
                            <h3>Vizyonumuz</h3>
                            <p>{company.vision}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
                        <h2 className="section-title">Faaliyet Alanlarımız</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            Geniş ürün ve hizmet yelpazemizle yanınızdayız
                        </p>
                    </div>
                    <div className={styles.serviceGrid}>
                        {company.serviceAreas.map((service, index) => (
                            <div key={service.id} className={styles.serviceCard} style={{ animationDelay: `${index * 0.1}s` }}>
                                <span className={styles.serviceIcon}>{service.icon}</span>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDesc}>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Thanks Section */}
            <section className={styles.thanksSection}>
                <div className="container">
                    <div className={styles.thanksCard}>
                        <p className={styles.thanksText}>
                            Tüm gücümüzü müşterilerimizin güven ve desteğinden almaktayız.
                        </p>
                        <p className={styles.thanksHighlight}>
                            Bize duyduğunuz bu güven için tüm müşterilerimize teşekkür ederiz.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
