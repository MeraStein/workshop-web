"use client";

import { useState } from "react";
import styles from "../../register/register.module.css";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "שגיאה לא ידועה");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError("שגיאה בשליחת הנתונים");
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>ליצירת קשר 🐍</h1>
      <p className={styles.subtitle}>מלאו את הפרטים ונחזור אליכם בהקדם</p>

      {submitted ? (
        <div className={styles.successMessage}>
          ✅ תודה! ההרשמה התקבלה ונחזור אליכם בקרוב
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <div className={styles.errorMessage}>{error}</div>}

          <label>
            *שם:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            אימייל:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label>
            *טלפון:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className={styles.submitBtn}>
            🚀 שלח הרשמה
          </button>
        </form>
      )}
    </main>
  );
}
