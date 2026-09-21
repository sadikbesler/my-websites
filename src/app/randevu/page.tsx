import styles from "./page.module.css";

export const metadata = {
  title: "Randevu Al | Diyetisyen Merkez",
  description: "Online veya yüz yüze diyet danışmanlığı için hemen randevunuzu oluşturun.",
};

export default function Randevu() {
  return (
    <div className="container section">
      <div className={styles.randevuGrid}>
        {/* Sol Taraf: Bilgi */}
        <div>
          <h1 className="display-xl" style={{ marginBottom: "16px" }}>Randevunuzu Planlayın</h1>
          <p className="body-md text-muted" style={{ marginBottom: "32px" }}>
            Uygun bir tarih seçin ve bilgilerinizi doldurun. Ekibimiz randevu onayı için en kısa sürede sizinle iletişime geçecektir.
          </p>
          
          <div className={styles.infoBox}>
            <h3 className="title-md">Çalışma Saatlerimiz</h3>
            <ul className="body-sm text-muted" style={{ marginTop: "12px", listStyle: "none" }}>
              <li style={{ marginBottom: "8px" }}>Pazartesi - Cuma: 09:00 - 18:00</li>
              <li style={{ marginBottom: "8px" }}>Cumartesi: 10:00 - 15:00</li>
              <li>Pazar: Kapalı</li>
            </ul>
          </div>
        </div>

        {/* Sağ Taraf: Randevu Formu (reservation-card) */}
        <div>
          <div className="reservation-card">
            <h2 className="display-md" style={{ marginBottom: "24px" }}>Randevu Formu</h2>
            <form>
              <div className="form-group">
                <label>Ad Soyad</label>
                <input type="text" className="text-input" placeholder="Adınız Soyadınız" required />
              </div>
              <div className="form-group">
                <label>Telefon Numarası</label>
                <input type="tel" className="text-input" placeholder="05XX XXX XX XX" required />
              </div>
              <div className="form-group">
                <label>Görüşme Tipi</label>
                <select className="text-input" required>
                  <option value="">Seçiniz</option>
                  <option value="online">Online Görüşme</option>
                  <option value="yuzyuze">Yüz Yüze (Nişantaşı)</option>
                </select>
              </div>
              <div className="form-group">
                <label>İstenen Tarih</label>
                <input type="date" className="text-input" required />
              </div>
              <div className="form-group">
                <label>Notunuz (İsteğe bağlı)</label>
                <textarea className="text-input" style={{ height: "100px", resize: "none" }} placeholder="Eklemek istedikleriniz..."></textarea>
              </div>
              <button type="button" className="button-primary" style={{ width: "100%", marginTop: "16px" }}>
                Randevu Talebi Gönder
              </button>
            </form>
            <p className="caption" style={{ color: "var(--colors-muted)", textAlign: "center", marginTop: "16px" }}>
              Gönderdikten sonra ekibimiz sizi arayarak tarihi netleştirecektir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
