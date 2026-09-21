import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className="display-xl">Gelecekteki sağlığınız için ilham alın.</h1>
            <p className="body-md text-muted" style={{ marginTop: "16px", marginBottom: "32px", maxWidth: "480px" }}>
              Kişiye özel beslenme programları ve bilimsel yaklaşımlarla hedeflerinize ulaşın. Aç kalmadan, sağlıklı ve kalıcı kilo yönetimi.
            </p>
            <div className={styles.heroSearch}>
              <Link href="/randevu" className={styles.searchBarPill}>
                <div className={styles.searchSegment}>
                  <span className="caption">Nerede</span>
                  <span className="body-sm text-muted">Online veya Yüz Yüze</span>
                </div>
                <div className={styles.searchSegment}>
                  <span className="caption">Ne Zaman</span>
                  <span className="body-sm text-muted">Size Uygun Tarih</span>
                </div>
                <div className={styles.searchOrb}>
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: "block", fill: "none", height: "16px", width: "16px", stroke: "currentColor", strokeWidth: "4", overflow: "visible"}}>
                    <g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            {/* Using a solid soft color block instead of placeholder images to stay premium without real photos */}
            <div className={styles.heroPhotoPlaceholder}>
              <div className={styles.guestFavoriteBadge}>Misafir Favorisi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories / Highlights Section */}
      <section className={`section container`}>
        <h2 className="display-lg" style={{ marginBottom: "32px" }}>Öne Çıkan Hizmetler</h2>
        <div className={styles.grid}>
          {/* Card 1 */}
          <Link href="/hizmetler" className="property-card">
            <div className={styles.cardPhoto1}></div>
            <div>
              <h3 className="title-md">Online Diyet Danışmanlığı</h3>
              <p className="body-sm text-muted">Dünyanın her yerinden</p>
              <p className="body-sm text-muted" style={{ marginTop: "4px" }}>Aylık Paket</p>
            </div>
          </Link>
          {/* Card 2 */}
          <Link href="/hizmetler" className="property-card">
            <div className={styles.cardPhoto2}></div>
            <div>
              <h3 className="title-md">Yüz Yüze Görüşme</h3>
              <p className="body-sm text-muted">Nişantaşı, İstanbul</p>
              <p className="body-sm text-muted" style={{ marginTop: "4px" }}>Tek Seans</p>
            </div>
          </Link>
          {/* Card 3 */}
          <Link href="/hizmetler" className="property-card">
            <div className={styles.cardPhoto3}></div>
            <div>
              <h3 className="title-md">Sporcu Beslenmesi</h3>
              <p className="body-sm text-muted">Performans odaklı</p>
              <p className="body-sm text-muted" style={{ marginTop: "4px" }}>Aylık Paket</p>
            </div>
          </Link>
          {/* Card 4 */}
          <Link href="/hizmetler" className="property-card">
            <div className={styles.cardPhoto4}></div>
            <div>
              <h3 className="title-md">Anne ve Çocuk Beslenmesi</h3>
              <p className="body-sm text-muted">Gebelik ve sonrası</p>
              <p className="body-sm text-muted" style={{ marginTop: "4px" }}>Haftalık Kontrol</p>
            </div>
          </Link>
        </div>
      </section>

      {/* SEO Section / Trust Indicators */}
      <section className={`section ${styles.seoSection}`}>
        <div className="container">
          <div className={styles.seoGrid}>
            <div>
              <h4 className="display-sm">Neden Biz?</h4>
              <p className="body-md text-muted" style={{ marginTop: "12px" }}>
                Kalıplaşmış diyet listeleri yerine yaşam tarzınıza uygun, sürdürülebilir beslenme alışkanlıkları kazanmanızı hedefliyoruz. Amacımız sadece kilo vermek veya almak değil, sağlıklı bir yaşam kalitesine ulaşmanızdır.
              </p>
            </div>
            <div className={styles.ratingCard}>
              <div className="display-xl" style={{ fontSize: "64px", lineHeight: 1.1 }}>4.95</div>
              <div className="title-md" style={{ marginTop: "8px" }}>Danışan Memnuniyeti</div>
              <div className="body-sm text-muted" style={{ marginTop: "4px" }}>200+ başarılı sonuç</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
