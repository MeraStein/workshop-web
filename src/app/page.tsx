"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; 
import styles from "./page.module.css";

export default function Home() {

  const router = useRouter();

  const handleRegisterClick = () => {
    router.push("/register");
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>👨‍💻 לומדים פיתוח תוכנה, מגלים את האנגלית! 💬</h1>
        <p>סדנת תכנות אמיתית לילדים – וגם שיפור אנגלית על הדרך</p>
      </header>

      <div className={styles.hero}>
        {/* אפשר לשים כאן תמונה או איור */}
        <img 
          src="https://img.freepik.com/premium-vector/illustration-student-activity_1368420-4108.jpg?semt=ais_hybrid&w=740"
          alt="ילדים לומדים קוד"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdh8ypYm1_agPI1Dy9837Ggm60HbcZPGmTA&s"
          alt="ילדים לומדים קוד"
        />
        <img
          src="https://img.lovepik.com/png/20231112/code-clipart-cartoon-illustration-of-a-kid-working-at-the_568649_wh860.png"
          alt="ילדים לומדים קוד"
        />
      </div>

      <section className={styles.section}>
        <h2>מה מחכה לילדים בסדנה?</h2>
        <ul>
          <li>✅ יסודות תכנות ב‑Python בדרך כיפית וברורה</li>
          <li>✅ לימוד אנגלית ברמה מותאמת לילד</li>
          <li>✅ פרויקטים איכותיים – משחקים ותוכנות</li>
          <li>✅ פיתוח חשיבה לוגית ויצירתית</li>
        </ul>

        <h2>למי זה מתאים?</h2>
        <p>
          ילדים בגילאי <strong>8-13</strong>, ללא צורך בניסיון קודם בתכנות או
          באנגלית
        </p>
      </section>

       <div className={styles.cta}>
          <button onClick={handleRegisterClick}>📩 אני רוצה להירשם!</button>
        </div>

      <footer className={styles.footer}>
        📅 ימי ___ | 📍 מיקום: ___ | מספר המקומות מוגבל!
      </footer>
    </div>
  );
}
