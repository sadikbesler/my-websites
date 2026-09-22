import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} gradient-bg`}>
        <div className="container">
          <h1 className="hero-title">
            Healthy living, <br />
            not guesswork.
          </h1>
          <p className="hero-subtitle">
            Personalised nutrition plans that actually sound like you. <br />
            Enjoy unlimited, science-backed guidance to reach your goals.
          </p>
          
          <div className={styles.heroButtons}>
            <Link href="/randevu" className="btn btn-primary">Sign up for free</Link>
            <Link href="/hizmetler" className="btn btn-outline">Book a demo</Link>
          </div>

          <div className={styles.heroImageContainer}>
            <Image 
              src="/my-websites/hero_image.jpg" 
              alt="Platform Dashboard" 
              width={900} 
              height={500} 
              className={styles.heroImage} 
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className={styles.featuresSection}>
        <div className="container">
          <h2 className="section-title">Nutrition plans have<br/>never been easier</h2>
          
          <div className={styles.bentoGrid}>
            <div className={`bento-card ${styles.featureCard}`}>
              <div className={styles.featureIcon}>🌍</div>
              <h3 className={styles.featureTitle}>Online Consultation</h3>
              <p className={styles.featureDesc}>Get personalized advice from anywhere in the world. Upload your past documents and we'll learn your style.</p>
              <div className={`${styles.featureImage} ${styles.img1}`}></div>
            </div>

            <div className={`bento-card ${styles.featureCard}`}>
              <div className={styles.featureIcon}>📍</div>
              <h3 className={styles.featureTitle}>Face to Face</h3>
              <p className={styles.featureDesc}>Visit our clinic in Nişantaşı for an in-depth body analysis and a face-to-face consultation.</p>
              <div className={`${styles.featureImage} ${styles.img2}`}></div>
            </div>

            <div className={`bento-card ${styles.featureCard}`}>
              <div className={styles.featureIcon}>⚡️</div>
              <h3 className={styles.featureTitle}>Sports Nutrition</h3>
              <p className={styles.featureDesc}>Supercharge your performance with macros crafted for your specific sport and training schedule.</p>
              <div className={`${styles.featureImage} ${styles.img3}`}></div>
            </div>

            <div className={`bento-card ${styles.featureCard}`}>
              <div className={styles.featureIcon}>👶</div>
              <h3 className={styles.featureTitle}>Mother & Child</h3>
              <p className={styles.featureDesc}>Safe and healthy diet plans ensuring the best development for your child and your recovery.</p>
              <div className={`${styles.featureImage} ${styles.img4}`}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className={styles.trustSection}>
        <div className="container">
          <h2>Trusted by<br/>top professionals</h2>
          <div className={styles.trustLogos}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--colors-text-secondary)' }}>ACME Corp</h3>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--colors-text-secondary)' }}>HealthPlus</h3>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--colors-text-secondary)' }}>NutriLife</h3>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--colors-text-secondary)' }}>FitGen</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
