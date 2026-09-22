import Link from "next/link";
import styles from "./page.module.css";

export default function Services() {
  return (
    <main className="gradient-bg" style={{ minHeight: '100vh' }}>
      <section className={styles.pricingSection}>
        <div className="container">
          <div className={styles.pricingHeader}>
            <h1>Flexible pricing</h1>
            <p className="body-lg text-muted">Transparent plans tailored for your nutrition journey.</p>
          </div>

          <div className={styles.pricingGrid}>
            
            {/* Basic Plan */}
            <div className={styles.pricingCard}>
              <h3 className={styles.planName}>Online Starter</h3>
              <div className={styles.planPrice}>₺1,500<span style={{fontSize: '1rem', color: 'var(--colors-text-secondary)', fontWeight: 400}}>/mo</span></div>
              <p className={styles.planDesc}>For those who want standard monthly tracking.</p>
              
              <ul className={styles.featuresList}>
                <li><span className={styles.checkIcon}>✓</span> Initial Assessment</li>
                <li><span className={styles.checkIcon}>✓</span> 2 Online Meetings / mo</li>
                <li><span className={styles.checkIcon}>✓</span> WhatsApp Support</li>
                <li><span className={styles.checkIcon}>✓</span> Standard Diet Plan</li>
              </ul>
              
              <Link href="/randevu" className={`btn btn-outline ${styles.btnFull}`}>Start for Free</Link>
            </div>

            {/* Pro Plan */}
            <div className={`${styles.pricingCard} ${styles.popular}`}>
              <div className={styles.popularBadge}>MOST POPULAR</div>
              <h3 className={styles.planName}>Face-to-Face Pro</h3>
              <div className={styles.planPrice}>₺3,000<span style={{fontSize: '1rem', color: 'var(--colors-text-secondary)', fontWeight: 400}}>/mo</span></div>
              <p className={styles.planDesc}>For dedicated results with clinical body analysis.</p>
              
              <ul className={styles.featuresList}>
                <li><span className={styles.checkIcon}>✓</span> Full Body Composition</li>
                <li><span className={styles.checkIcon}>✓</span> 4 Clinic Visits / mo</li>
                <li><span className={styles.checkIcon}>✓</span> Unlimited WhatsApp</li>
                <li><span className={styles.checkIcon}>✓</span> Dynamic Adjustments</li>
              </ul>
              
              <Link href="/randevu" className={`btn btn-primary ${styles.btnFull}`}>Book a Demo</Link>
            </div>

            {/* Enterprise / Special */}
            <div className={styles.pricingCard}>
              <h3 className={styles.planName}>Sports & Athlete</h3>
              <div className={styles.planPrice}>Custom</div>
              <p className={styles.planDesc}>For professional athletes and intense training blocks.</p>
              
              <ul className={styles.featuresList}>
                <li><span className={styles.checkIcon}>✓</span> Pre/Post Workout Macros</li>
                <li><span className={styles.checkIcon}>✓</span> Supplement Protocol</li>
                <li><span className={styles.checkIcon}>✓</span> Priority Support</li>
                <li><span className={styles.checkIcon}>✓</span> Event Day Planning</li>
              </ul>
              
              <Link href="/iletisim" className={`btn btn-outline ${styles.btnFull}`}>Contact Us</Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
