import styles from "./page.module.css";

export const metadata = {
  title: "İletişim | Diyetisyen Merkez",
  description: "Bize ulaşın. Adres, telefon numarası ve iletişim formu.",
};

export default function Iletisim() {
  return (
    <div className="container section">
      <h1 className="display-xl" style={{ marginBottom: "16px", textAlign: "center" }}>Bize Ulaşın</h1>
      <p className="body-md text-muted" style={{ marginBottom: "48px", maxWidth: "600px", margin: "0 auto 48px auto", textAlign: "center" }}>
        Her türlü soru, görüş veya paketlerimiz hakkında detaylı bilgi almak için aşağıdaki formu kullanabilir veya iletişim bilgilerimizden bize ulaşabilirsiniz.
      </p>

      <div className={styles.contactGrid}>
        {/* İletişim Bilgileri */}
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <h3 className="title-md">Adres</h3>
            <p className="body-sm text-muted" style={{ marginTop: "4px" }}>Valikonağı Caddesi, No: 123, Nişantaşı<br />Şişli, İstanbul</p>
          </div>
          <div className={styles.infoItem}>
            <h3 className="title-md">Telefon</h3>
            <p className="body-sm text-muted" style={{ marginTop: "4px" }}>+90 555 123 45 67</p>
          </div>
          <div className={styles.infoItem}>
            <h3 className="title-md">E-Posta</h3>
            <p className="body-sm text-muted" style={{ marginTop: "4px" }}>iletisim@dytmerkez.com</p>
          </div>
          <div className={styles.mapPlaceholder}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.6105051069796!2d28.989020415377595!3d41.0556272258079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7684610e74b%3A0xc3c546e38fb2dfcf!2sValikona%C4%9F%C4%B1%20Cd.%2C%20%C5%9Ei%C5%9Fli%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1680197779374!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: 'var(--rounded-md)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        {/* İletişim Formu */}
        <div className="reservation-card">
          <h2 className="display-md" style={{ marginBottom: "24px" }}>Bize Mesaj Gönderin</h2>
          <form>
            <div className="form-group">
              <label>Ad Soyad</label>
              <input type="text" className="text-input" placeholder="Adınız Soyadınız" required />
            </div>
            <div className="form-group">
              <label>E-Posta Adresi</label>
              <input type="email" className="text-input" placeholder="ornek@email.com" required />
            </div>
            <div className="form-group">
              <label>Konu</label>
              <input type="text" className="text-input" placeholder="Örn: Online Diyet Hakkında" required />
            </div>
            <div className="form-group">
              <label>Mesajınız</label>
              <textarea className="text-input" style={{ height: "120px", resize: "vertical" }} placeholder="Mesajınızı buraya yazabilirsiniz..." required></textarea>
            </div>
            <button type="button" className="button-primary" style={{ width: "100%", marginTop: "16px" }}>
              Mesajı Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
