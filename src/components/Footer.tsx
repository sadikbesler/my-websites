import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        
        <div className={styles.footerBrand}>
          <div className={styles.logo}>Dyt. Merkez</div>
          <p className="text-muted" style={{ marginTop: '16px', fontSize: '0.9rem' }}>
            Personalised nutrition plans that actually sound like you. <br/>
            Enjoy unlimited, science-backed guidance to reach your goals.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.linkGroup}>
            <h4>Platform</h4>
            <ul>
              <li><Link href="/hizmetler">Pricing</Link></li>
              <li><Link href="/hesaplamalar">Calculators</Link></li>
              <li><Link href="/randevu">Book Demo</Link></li>
            </ul>
          </div>
          
          <div className={styles.linkGroup}>
            <h4>Company</h4>
            <ul>
              <li><Link href="/iletisim">Contact Us</Link></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>

      </div>
      
      <div className={styles.footerBottom}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p>&copy; {new Date().getFullYear()} Dyt. Merkez. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
