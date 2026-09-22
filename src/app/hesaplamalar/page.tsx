"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Calculators() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  
  const [waterWeight, setWaterWeight] = useState("");
  const [waterNeeded, setWaterNeeded] = useState<number | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w > 0 && h > 0) {
      setBmi(w / (h * h));
    }
  };

  const calculateWater = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(waterWeight);
    if (w > 0) {
      setWaterNeeded(w * 0.033);
    }
  };

  return (
    <main className={`gradient-bg ${styles.toolsSection}`}>
      <div className="container">
        <div className={styles.header}>
          <h1>Health Tools</h1>
          <p className="body-lg text-muted">Intelligent macros and calculations to kickstart your journey.</p>
        </div>

        <div className={styles.toolsGrid}>
          
          {/* BMI Tool */}
          <div className="bento-card">
            <h2 style={{ marginBottom: '16px' }}>BMI Calculator</h2>
            <p className="text-muted" style={{ marginBottom: '24px' }}>Find out your Body Mass Index quickly and securely.</p>
            
            <form onSubmit={calculateBMI}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Weight (kg)</label>
                <input 
                  type="number" 
                  className={styles.input} 
                  value={weight} 
                  onChange={(e) => setWeight(e.target.value)} 
                  placeholder="e.g. 70" 
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Height (cm)</label>
                <input 
                  type="number" 
                  className={styles.input} 
                  value={height} 
                  onChange={(e) => setHeight(e.target.value)} 
                  placeholder="e.g. 175" 
                  required 
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Calculate BMI</button>
            </form>

            {bmi !== null && (
              <div className={styles.resultBox}>
                <div className={styles.resultTitle}>Your BMI is</div>
                <div className={styles.resultValue}>{bmi.toFixed(1)}</div>
              </div>
            )}
          </div>

          {/* Water Tool */}
          <div className="bento-card">
            <h2 style={{ marginBottom: '16px' }}>Hydration Goal</h2>
            <p className="text-muted" style={{ marginBottom: '24px' }}>Calculate your daily water needs based on your weight.</p>
            
            <form onSubmit={calculateWater}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Weight (kg)</label>
                <input 
                  type="number" 
                  className={styles.input} 
                  value={waterWeight} 
                  onChange={(e) => setWaterWeight(e.target.value)} 
                  placeholder="e.g. 70" 
                  required 
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '80px' }}>Calculate Needs</button>
            </form>

            {waterNeeded !== null && (
              <div className={styles.resultBox}>
                <div className={styles.resultTitle}>Daily Water Goal</div>
                <div className={styles.resultValue}>{waterNeeded.toFixed(1)} L</div>
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
