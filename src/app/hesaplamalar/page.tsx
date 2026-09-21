"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Hesaplamalar() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState<number | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // cm to m
    if (w > 0 && h > 0) {
      setBmiResult(Number((w / (h * h)).toFixed(2)));
    }
  };

  const [waterWeight, setWaterWeight] = useState("");
  const [waterResult, setWaterResult] = useState<number | null>(null);

  const calculateWater = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(waterWeight);
    if (w > 0) {
      setWaterResult(Number((w * 0.035).toFixed(2))); // 35ml per kg
    }
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return "Zayıf";
    if (bmi < 24.9) return "Normal Kilolu";
    if (bmi < 29.9) return "Fazla Kilolu";
    return "Obezite";
  };

  return (
    <div className="container section">
      <h1 className="display-xl" style={{ marginBottom: "16px" }}>Sağlık Hesaplamaları</h1>
      <p className="body-md text-muted" style={{ marginBottom: "48px", maxWidth: "600px" }}>
        Vücut kitle indeksinizi (VKI) ve günlük su ihtiyacınızı kolayca hesaplayın. Bu değerler size sağlıklı yaşam yolculuğunuzda rehberlik edecektir.
      </p>

      <div className={styles.calcGrid}>
        {/* VKI Hesaplama */}
        <div className={`reservation-card ${styles.calcCard}`}>
          <h2 className="display-md" style={{ marginBottom: "24px" }}>VKI Hesaplama</h2>
          <form onSubmit={calculateBMI}>
            <div className="form-group">
              <label>Kilo (kg)</label>
              <input
                type="number"
                className="text-input"
                placeholder="Örn: 70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Boy (cm)</label>
              <input
                type="number"
                className="text-input"
                placeholder="Örn: 175"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="button-primary" style={{ width: "100%", marginTop: "8px" }}>
              Hesapla
            </button>
          </form>

          {bmiResult && (
            <div className={styles.resultBox}>
              <div className="body-sm text-muted">Vücut Kitle İndeksiniz</div>
              <div className="display-lg" style={{ margin: "4px 0" }}>{bmiResult}</div>
              <div className="title-md" style={{ color: "var(--colors-primary)" }}>
                Durum: {getBMICategory(bmiResult)}
              </div>
            </div>
          )}
        </div>

        {/* Su İhtiyacı Hesaplama */}
        <div className={`reservation-card ${styles.calcCard}`}>
          <h2 className="display-md" style={{ marginBottom: "24px" }}>Su İhtiyacı</h2>
          <form onSubmit={calculateWater}>
            <div className="form-group">
              <label>Kilo (kg)</label>
              <input
                type="number"
                className="text-input"
                placeholder="Örn: 70"
                value={waterWeight}
                onChange={(e) => setWaterWeight(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="button-primary" style={{ width: "100%", marginTop: "8px" }}>
              Hesapla
            </button>
          </form>

          {waterResult && (
            <div className={styles.resultBox}>
              <div className="body-sm text-muted">Günlük Su İhtiyacınız</div>
              <div className="display-lg" style={{ margin: "4px 0" }}>{waterResult} Litre</div>
              <div className="body-sm text-muted">
                *Ortalama 35ml/kg üzerinden hesaplanmıştır. Egzersiz durumunda artırılmalıdır.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
