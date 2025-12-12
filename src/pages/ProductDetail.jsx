import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import Button from '../components/UI/Button';
import styles from './ProductDetail.module.css';

export default function ProductDetail() {
    const { productId } = useParams();
    const product = getProductById(productId);

    if (!product) {
        return (
            <div className={styles.notFound}>
                <div className="container">
                    <h1>Ürün Bulunamadı</h1>
                    <p>Aradığınız ürün mevcut değil.</p>
                    <Button to="/urunler">Ürünlere Dön</Button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.productDetail}>
            {/* Breadcrumb */}
            <div className={styles.breadcrumb}>
                <div className="container">
                    <Link to="/">Anasayfa</Link>
                    <span>/</span>
                    <Link to="/urunler">Ürünler</Link>
                    <span>/</span>
                    <span className={styles.current}>{product.title}</span>
                </div>
            </div>

            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroGrid}>
                        <div className={styles.heroImage}>
                            {product.image ? (
                                <img src={product.image} alt={product.title} />
                            ) : (
                                <div className={styles.iconPlaceholder}>
                                    <span>{product.icon}</span>
                                </div>
                            )}
                        </div>
                        <div className={styles.heroContent}>
                            <span className={styles.heroIcon}>{product.icon}</span>
                            <h1 className={styles.heroTitle}>{product.title}</h1>
                            <p className={styles.heroDescription}>{product.description}</p>
                            <ul className={styles.featureList}>
                                {product.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <span className={styles.check}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button to="/iletisim" size="large">
                                Teklif Al →
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Description */}
            {product.fullDescription && (
                <section className={`section ${styles.descriptionSection}`}>
                    <div className="container">
                        <div className={styles.descriptionContent}>
                            <h2>Detaylı Bilgi</h2>
                            <p>{product.fullDescription}</p>
                        </div>
                    </div>
                </section>
            )}

            {/* Usage Areas */}
            {product.usageAreas && (
                <section className="section">
                    <div className="container">
                        <h2 className={styles.sectionTitle}>Kullanım Alanları</h2>
                        <div className={styles.usageGrid}>
                            {product.usageAreas.map((area, idx) => (
                                <div key={idx} className={styles.usageItem}>
                                    <span className={styles.usageIcon}>📍</span>
                                    <span>{area}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Set Contents (for Bekçi Kontrol) */}
            {product.setContents && (
                <section className={`section ${styles.setSection}`}>
                    <div className="container">
                        <h2 className={styles.sectionTitle}>Set İçeriği</h2>
                        <div className={styles.setGrid}>
                            {product.setContents.map((item, idx) => (
                                <div key={idx} className={styles.setItem}>
                                    <span className={styles.setIcon}>📦</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Software Features (for PDKS) */}
            {product.softwareFeatures && (
                <section className={`section ${styles.softwareSection}`}>
                    <div className="container">
                        <h2 className={styles.sectionTitle}>Yazılım Özellikleri</h2>
                        <div className={styles.softwareGrid}>
                            {product.softwareFeatures.map((feature, idx) => (
                                <div key={idx} className={styles.softwareItem}>
                                    <span className={styles.softwareIcon}>✓</span>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Specs Image */}
            {product.specsImage && (
                <section className="section">
                    <div className="container">
                        <h2 className={styles.sectionTitle}>Teknik Özellikler</h2>
                        <div className={styles.specsImageWrapper}>
                            <img src={product.specsImage} alt={`${product.title} Teknik Özellikler`} />
                        </div>
                    </div>
                </section>
            )}

            {/* Models */}
            {product.models && product.models.length > 0 && (
                <section className={`section ${styles.modelsSection}`}>
                    <div className="container">
                        <h2 className={styles.sectionTitle}>Ürün Modelleri</h2>
                        <div className={styles.modelsGrid}>
                            {product.models.map((model, idx) => (
                                <div key={idx} className={styles.modelCard}>
                                    {model.image && (
                                        <div className={styles.modelImage}>
                                            <img src={model.image} alt={model.name} />
                                        </div>
                                    )}
                                    <div className={styles.modelContent}>
                                        <h3>{model.name}</h3>
                                        <p>{model.description}</p>
                                        <ul className={styles.modelFeatures}>
                                            {model.features.map((feature, fidx) => (
                                                <li key={fidx}>
                                                    <span className={styles.check}>✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {model.specsImage && (
                                        <div className={styles.modelSpecs}>
                                            <img src={model.specsImage} alt={`${model.name} Specs`} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Gallery */}
            {product.galleryImages && product.galleryImages.length > 0 && (
                <section className="section">
                    <div className="container">
                        <h2 className={styles.sectionTitle}>Galeri</h2>
                        <div className={styles.gallery}>
                            {product.galleryImages.map((img, idx) => (
                                <div key={idx} className={styles.galleryItem}>
                                    <img src={img} alt={`${product.title} ${idx + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaCard}>
                        <h2>Bu Ürün Hakkında Bilgi Almak İster misiniz?</h2>
                        <p>Uzman ekibimiz size yardımcı olmaktan memnuniyet duyar.</p>
                        <div className={styles.ctaButtons}>
                            <Button to="/iletisim" variant="accent" size="large">
                                İletişime Geç →
                            </Button>
                            <Button to="/urunler" variant="secondary" size="large">
                                Diğer Ürünler
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
