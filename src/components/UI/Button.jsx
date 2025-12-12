import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({
    children,
    variant = 'primary',
    size = 'medium',
    to,
    href,
    onClick,
    type = 'button',
    className = '',
    ...props
}) {
    const classNames = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={classNames} {...props}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={classNames} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classNames} {...props}>
            {children}
        </button>
    );
}
