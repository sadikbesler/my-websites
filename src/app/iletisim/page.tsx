"use client";

import styles from "./page.module.css";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <main className={`gradient-bg ${styles.contactSection}`}>
      <div className="container">
        <div className={styles.header}>
          <h1>Get in touch</h1>
          <p className="body-lg text-muted">We're here to help you achieve your health goals.</p>
        </div>

        <div className={styles.contactGrid}>
          
          {/* Contact Info (Dark Card) */}
          <div className={styles.infoCard}>
            <div>
              <h2 className={styles.infoTitle}>Contact Information</h2>
              <div className={styles.infoItem}>
                <div className={styles.infoLabel}>Email</div>
                <div className={styles.infoValue}>hello@dytmerkez.com</div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoLabel}>Phone</div>
                <div className={styles.infoValue}>+90 (555) 123 45 67</div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoLabel}>Address</div>
                <div className={styles.infoValue}>Valikonağı Cd. Nişantaşı, İstanbul</div>
              </div>
            </div>

            <div className={styles.mapPlaceholder}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.6105051069796!2d28.989020415377595!3d41.0556272258079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7684610e74b%3A0xc3c546e38fb2dfcf!2sValikona%C4%9F%C4%B1%20Cd.%2C%20%C5%9Ei%C5%9Fli%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1680197779374!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          {/* Contact Form (White Card) */}
          <div className="bento-card">
            <h2 style={{ marginBottom: '24px' }}>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Name</label>
                <input type="text" className={styles.input} required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email</label>
                <input type="email" className={styles.input} required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Message</label>
                <textarea className={styles.input} required rows={5}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.1rem' }}>Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
