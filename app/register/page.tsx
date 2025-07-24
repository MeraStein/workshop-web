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

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "שגיאה בשליחת הטופס");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message);
    }
    
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>ליצירת קשר🐍</h1>
      <p className={styles.subtitle}>מלאו את הפרטים ונחזור אליכם בהקדם</p>

      {submitted ? (
        <div className={styles.successMessage}>
          ✅ תודה! ההרשמה התקבלה ונחזור אליכם בקרוב
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            <span/>*
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
            />
          </label>

          <label>
            <span/>*
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
