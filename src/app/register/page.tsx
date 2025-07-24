"use client";

import { useState } from "react";
import styles from "./register.module.css"; 

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // כאן אפשר להוסיף שליחה לשרת או API
    setSubmitted(true);
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>טופס הרשמה לסדנת פייתון לילדים 🐍</h1>
      <p className={styles.subtitle}>מלאו את הפרטים ונחזור אליכם בהקדם</p>

      {submitted ? (
        <div className={styles.successMessage}>
          ✅ תודה! ההרשמה התקבלה ונחזור אליכם בקרוב
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            שם מלא:
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
              required
            />
          </label>

          <label>
            טלפון:
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
