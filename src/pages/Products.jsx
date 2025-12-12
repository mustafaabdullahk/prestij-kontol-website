import ProductCard from '../components/UI/ProductCard';
import { products } from '../data/products';
import styles from './Products.module.css';

export default function Products() {
    return (
        <div className={styles.products}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Ürünlerimiz</h1>
                    <p className={styles.heroSubtitle}>
                        Modern teknoloji ile üretilmiş, güvenilir personel takip ve güvenlik çözümleri
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="section">
                <div className="container">
                    <div className={styles.statsBar}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>{products.length}</span>
                            <span className={styles.statLabel}>Ürün Kategorisi</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>50+</span>
                            <span className={styles.statLabel}>Farklı Model</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>100%</span>
                            <span className={styles.statLabel}>Garanti</span>
                        </div>
                    </div>

                    <div className={styles.grid}>
                        {products.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>İhtiyacınıza Uygun Çözümü Bulamadınız mı?</h2>
                        <p>Uzman ekibimiz size özel çözümler sunmak için hazır.</p>
                        <a href="/iletisim" className={styles.ctaButton}>
                            Bize Ulaşın →
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
