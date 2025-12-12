import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

export default function ProductCard({ product, index }) {
    return (
        <Link to={`/urunler/${product.id}`} className={styles.cardLink}>
            <article
                className={styles.card}
                style={{ animationDelay: `${index * 0.1}s` }}
            >
                {product.image && (
                    <div className={styles.imageWrapper}>
                        <img
                            src={product.image}
                            alt={product.title}
                            className={styles.image}
                            loading="lazy"
                        />
                    </div>
                )}
                {!product.image && (
                    <div className={styles.iconWrapper}>
                        <span className={styles.icon}>{product.icon}</span>
                    </div>
                )}
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>
                <ul className={styles.features}>
                    {product.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx}>
                            <span className={styles.checkmark}>✓</span>
                            {feature}
                        </li>
                    ))}
                </ul>
                <span className={styles.viewMore}>Detayları Gör →</span>
            </article>
        </Link>
    );
}
