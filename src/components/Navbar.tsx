import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.topNav}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo Area */}
        <div className={styles.logo}>
          <Link href="/">
            Dyt. Merkez
          </Link>
        </div>

        {/* Product Tabs (Centered) */}
        <div className={styles.productTabs}>
          <Link href="/" className={styles.tab}>
            Platform
          </Link>
          <Link href="/hizmetler" className={styles.tab}>
            Plans
            <span className={styles.newTag}>NEW</span>
          </Link>
          <Link href="/hesaplamalar" className={styles.tab}>
            Tools
          </Link>
          <Link href="/iletisim" className={styles.tab}>
            Contact
          </Link>
        </div>

        {/* Action Buttons */}
        <div className={styles.userActions}>
          <Link href="/iletisim" className={styles.navLink}>
            Log in
          </Link>
          <Link href="/randevu" className="btn btn-primary">
            Book a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
