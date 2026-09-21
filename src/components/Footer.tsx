import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerLight}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          {/* Column 1 */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Hizmetler</h4>
            <Link href="/hizmetler" className={styles.footerLink}>Online Diyet</Link>
            <Link href="/hizmetler" className={styles.footerLink}>Yüz Yüze Görüşme</Link>
            <Link href="/hizmetler" className={styles.footerLink}>Sporcu Beslenmesi</Link>
            <Link href="/hizmetler" className={styles.footerLink}>Kurumsal Danışmanlık</Link>
          </div>

          {/* Column 2 */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Araçlar</h4>
            <Link href="/hesaplamalar" className={styles.footerLink}>VKI Hesaplama</Link>
            <Link href="/hesaplamalar" className={styles.footerLink}>Kalori İhtiyacı</Link>
            <Link href="/hesaplamalar" className={styles.footerLink}>Su İhtiyacı</Link>
          </div>

          {/* Column 3 */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>İletişim</h4>
            <span className={styles.footerLink}>Nişantaşı, İstanbul</span>
            <Link href="mailto:iletisim@dytmerkez.com" className={styles.footerLink}>iletisim@dytmerkez.com</Link>
            <Link href="/iletisim" className={styles.footerLink}>Bize Ulaşın</Link>
          </div>
        </div>
      </div>

      <div className={styles.legalBand}>
        <div className={`container ${styles.legalContainer}`}>
          <div className={styles.legalLeft}>
            <span>© 2026 Dyt. Merkez. Tüm hakları saklıdır.</span>
          </div>
          <div className={styles.legalRight}>
            <span className={styles.socialIcon}>Instagram</span>
            <span className={styles.socialIcon}>Facebook</span>
            <span className={styles.socialIcon}>Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
