"use client";

import styles from "./page.module.css";

export default function Appointment() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your demo request has been received. We will contact you shortly!");
  };

  return (
    <main className={`gradient-bg ${styles.randevuSection}`}>
      <div className="container">
        <div className={styles.header}>
          <h1>Book a demo</h1>
          <p className="body-lg text-muted">Take the first step towards seamless nutrition management.</p>
        </div>

        <div className={`bento-card ${styles.formContainer}`}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Full Name</label>
              <input type="text" className={styles.input} required placeholder="Jane Doe" />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Email Address</label>
              <input type="email" className={styles.input} required placeholder="jane@company.com" />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Service Plan</label>
              <select className={styles.input} required>
                <option value="">Select a plan</option>
                <option value="online">Online Starter</option>
                <option value="clinic">Face-to-Face Pro</option>
                <option value="sports">Sports & Athlete</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Preferred Date</label>
              <input type="date" className={styles.input} required />
            </div>

            <button type="submit" className={`btn btn-primary ${styles.btnFull}`}>Request Demo</button>
          </form>
        </div>
      </div>
    </main>
  );
}
