import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import ProductCard from '../components/UI/ProductCard';
import { company } from '../data/company';
import { featuredProducts } from '../data/products';
import { sectors } from '../data/references';
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.home}>
            {/* Hero Section - Enhanced */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContainer}`}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroBadge}>
                            <span>🏆</span> 1979'dan Beri Güvenilir Çözüm Ortağınız
                        </div>
                        <h1 className={styles.heroTitle}>
                            <span className={styles.heroHighlight}>Personel PDKS</span> ve
                            <span className={styles.heroHighlight}> Access Kontrol Sistemleri</span>
                        </h1>
                        <p className={styles.heroDescription}>
                            <strong>Konya merkezli firmamız, 45 yılı aşkın tecrübesiyle Türkiye genelinde</strong>
                            <strong> biyometrik sistemler</strong>,
                            turnike geçiş sistemleri,
                            <strong> PDKS yazılımları</strong> ve
                            kule saatleri alanlarında hizmet vermektedir.
                        </p>

                        {/* Key Features */}
                        <div className={styles.heroFeatures}>
                            <div className={styles.heroFeature}>
                                <span className={styles.featureIcon}>👤</span>
                                <div>
                                    <strong>Biyometrik Sistemler</strong>
                                    <p>Yüz ve parmak izi tanıma</p>
                                </div>
                            </div>
                            <div className={styles.heroFeature}>
                                <span className={styles.featureIcon}>🚪</span>
                                <div>
                                    <strong>Geçiş Kontrolü</strong>
                                    <p>Turnike ve bariyer sistemleri</p>
                                </div>
                            </div>
                            <div className={styles.heroFeature}>
                                <span className={styles.featureIcon}>💻</span>
                                <div>
                                    <strong>Yazılım Çözümleri</strong>
                                    <p>PDKS ve Access kontrol</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.heroButtons}>
                            <Button to="/urunler" size="large">
                                Ürünlerimizi İnceleyin
                            </Button>
                            <Button to="/iletisim" variant="secondary" size="large">
                                Ücretsiz Teklif Alın
                            </Button>
                        </div>
                    </div>

                    {/* Hero Right Side - Stats & Info */}
                    <div className={styles.heroVisual}>
                        <div className={styles.heroCard}>
                            <div className={styles.heroCardHeader}>
                                <span className={styles.heroIcon}>
                                    <img src="/favicon.ico" alt="Prestij" />
                                </span>
                                <h3>Prestij Kontrol Sistemleri</h3>
                            </div>
                            <p className={styles.heroCardDesc}>
                                Teknolojiyi şehir yaşamı ve kurumsal ihtiyaçlarla buluşturan yenilikçi çözümler
                            </p>
                            <div className={styles.heroStats}>
                                <div className={styles.stat}>
                                    <span className={styles.statNumber}>45+</span>
                                    <span className={styles.statLabel}>Yıllık Tecrübe</span>
                                </div>
                                <div className={styles.stat}>
                                    <span className={styles.statNumber}>10+</span>
                                    <span className={styles.statLabel}>Ürün Kategorisi</span>
                                </div>
                                <div className={styles.stat}>
                                    <span className={styles.statNumber}>7</span>
                                    <span className={styles.statLabel}>Sektör</span>
                                </div>
                            </div>
                            <div className={styles.heroCardFooter}>
                                <Link to="/kurumsal" className={styles.heroCardLink}>
                                    Hakkımızda →
                                </Link>
                            </div>
                        </div>

                        {/* Quick Contact Card */}
                        <div className={styles.contactCard}>
                            <div className={styles.contactIcon}>📞</div>
                            <div className={styles.contactInfo}>
                                <span>Hemen Arayın</span>
                                <strong>{company.contact.phone}</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.heroGlow}></div>
            </section>

            {/* Partners Section */}
            <section className={styles.partners}>
                <div className="container">
                    <p className={styles.partnersTitle}>Temsil Ettiğimiz Firmalar</p>
                    <div className={styles.partnersGrid}>
                        {company.partners.map((partner) => (
                            <a
                                key={partner.id}
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.partnerItem}
                            >
                                <img src={partner.logo} alt={partner.name} />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className={`section ${styles.services}`}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
                        <h2 className="section-title">Hizmet Alanlarımız</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            Geniş kapsamlı çözümlerimizle ihtiyaçlarınıza yanıt veriyoruz
                        </p>
                    </div>
                    <div className={styles.servicesGrid}>
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

            {/* Featured Products */}
            <section className={`section ${styles.products}`}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
                        <h2 className="section-title">Öne Çıkan Ürünlerimiz</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            Modern teknoloji ile üretilmiş güvenilir çözümler
                        </p>
                    </div>
                    <div className="grid grid-4">
                        {featuredProducts.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: 'var(--spacing-2xl)' }}>
                        <Button to="/urunler" variant="secondary" size="large">
                            Tüm Ürünleri Gör →
                        </Button>
                    </div>
                </div>
            </section>

            {/* Sectors */}
            <section className={`section ${styles.sectors}`}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
                        <h2 className="section-title">Hizmet Verdiğimiz Sektörler</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            Farklı sektörlerde güvenilir iş ortağınız
                        </p>
                    </div>
                    <div className={styles.sectorGrid}>
                        {sectors.slice(0, 6).map((sector, index) => (
                            <div key={sector.id} className={styles.sectorItem} style={{ animationDelay: `${index * 0.1}s` }}>
                                <span className={styles.sectorIcon}>{sector.icon}</span>
                                <span className={styles.sectorTitle}>{sector.title}</span>
                            </div>
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: 'var(--spacing-2xl)' }}>
                        <Button to="/referanslar" variant="ghost" size="large">
                            Tüm Referansları Gör →
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>Projenizin Potansiyelini Keşfedin</h2>
                        <p className={styles.ctaDescription}>
                            Size özel, hedefe yönelik çözümlerimizle tanışmak ve detayları görüşmek için bizimle iletişime geçin.
                        </p>
                        <Button to="/iletisim" variant="accent" size="large">
                            Bize Ulaşın →
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
