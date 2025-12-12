import { useState } from 'react';
import Button from './Button';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, 1000);
    };

    if (isSubmitted) {
        return (
            <div className={styles.success}>
                <span className={styles.successIcon}>✓</span>
                <h3>Mesajınız Gönderildi!</h3>
                <p>En kısa sürede size dönüş yapacağız.</p>
                <Button variant="secondary" onClick={() => setIsSubmitted(false)}>
                    Yeni Mesaj Gönder
                </Button>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Ad Soyad *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                        required
                        placeholder="Adınız ve soyadınız"
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>E-posta *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                        required
                        placeholder="ornek@email.com"
                    />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor="phone" className={styles.label}>Telefon</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="0532 123 45 67"
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="subject" className={styles.label}>Konu *</label>
                    <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    >
                        <option value="">Konu seçiniz</option>
                        <option value="urun">Ürün Bilgisi</option>
                        <option value="teklif">Fiyat Teklifi</option>
                        <option value="destek">Teknik Destek</option>
                        <option value="diger">Diğer</option>
                    </select>
                </div>
            </div>

            <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Mesajınız *</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    required
                    rows="5"
                    placeholder="Mesajınızı buraya yazınız..."
                />
            </div>

            <Button type="submit" size="large" disabled={isSubmitting}>
                {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
            </Button>
        </form>
    );
}
