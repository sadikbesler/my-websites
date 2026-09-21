import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Paketler & Hizmetler | Diyetisyen Merkez",
  description: "İhtiyacınıza en uygun diyet paketini seçin: Online diyet, yüz yüze görüşme, sporcu beslenmesi ve kurumsal danışmanlık seçenekleri.",
};

export default function Hizmetler() {
  return (
    <div className="container section">
      <h1 className="display-xl" style={{ marginBottom: "16px" }}>Sizin İçin En Uygun Planı Seçin</h1>
      <p className="body-md text-muted" style={{ marginBottom: "48px", maxWidth: "600px" }}>
        Her bireyin metabolizması, yaşam tarzı ve hedefleri farklıdır. Bu nedenle size en uygun paketi seçerek, sağlıklı bir hayata ilk adımı atabilirsiniz.
      </p>

      <div className={styles.servicesGrid}>
        {/* Package 1 */}
        <div className={`property-card ${styles.packageCard}`}>
          <div className={styles.cardPhoto1}>
            <div className={styles.guestFavoriteBadge}>En Çok Tercih Edilen</div>
          </div>
          <div className={styles.cardContent}>
            <h2 className="title-md">1 Aylık Online Diyet</h2>
            <p className="body-sm text-muted" style={{ marginTop: "4px" }}>Dünyanın her yerinden, size özel haftalık listeler ve WhatsApp takibi.</p>
            <div className={styles.priceRow}>
              <span className="body-sm text-muted">Aylık</span>
              <span className="title-md">₺1.500</span>
            </div>
            <Link href="/randevu" className={`button-primary ${styles.fullBtn}`}>Hemen Başla</Link>
          </div>
        </div>

        {/* Package 2 */}
        <div className={`property-card ${styles.packageCard}`}>
          <div className={styles.cardPhoto2}></div>
          <div className={styles.cardContent}>
            <h2 className="title-md">Yüz Yüze Görüşme</h2>
            <p className="body-sm text-muted" style={{ marginTop: "4px" }}>Nişantaşı kliniğimizde detaylı vücut analizi ve yüz yüze değerlendirme.</p>
            <div className={styles.priceRow}>
              <span className="body-sm text-muted">Seans Başı</span>
              <span className="title-md">₺800</span>
            </div>
            <Link href="/randevu" className={`button-primary ${styles.fullBtn}`}>Randevu Al</Link>
          </div>
        </div>

        {/* Package 3 */}
        <div className={`property-card ${styles.packageCard}`}>
          <div className={styles.cardPhoto3}></div>
          <div className={styles.cardContent}>
            <h2 className="title-md">Sporcu Beslenmesi</h2>
            <p className="body-sm text-muted" style={{ marginTop: "4px" }}>Antrenman performansını artırmaya yönelik makro odaklı özel planlama.</p>
            <div className={styles.priceRow}>
              <span className="body-sm text-muted">Aylık</span>
              <span className="title-md">₺2.000</span>
            </div>
            <Link href="/randevu" className={`button-secondary ${styles.fullBtn}`}>İletişime Geç</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
