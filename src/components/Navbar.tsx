import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.topNav}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo Area */}
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/dyt_logo.jpg" alt="Dyt. Merkez Logo" width={140} height={40} style={{ objectFit: 'contain' }} />
          </Link>
        </div>

        {/* Product Tabs (Centered) */}
        <div className={styles.productTabs}>
          <Link href="/" className={styles.tab}>
            Ana Sayfa
          </Link>
          <Link href="/hizmetler" className={styles.tab}>
            Paketler
            <span className={styles.newTag}>YENİ</span>
          </Link>
          <Link href="/hesaplamalar" className={styles.tab}>
            Hesaplamalar
          </Link>
          <Link href="/iletisim" className={styles.tab}>
            İletişim
          </Link>
        </div>

        {/* Utilities (Right) */}
        <div className={styles.utilities}>
          <Link href="/randevu" className={`button-primary ${styles.reserveBtn}`}>
            Randevu Al
          </Link>
        </div>
      </div>
    </nav>
  );
}
