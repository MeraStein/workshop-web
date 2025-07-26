"use client";
import {TITLE, SUBTITLE, PARAGRAPHS} from "./global" 
import Image from "next/image";
import { useRouter } from "next/navigation"; 
import styles from "./page.module.css";
import Paragraphs from "./components/paragraphs/Paragraphs";
import Register from "./components/register/Register";

export default function Home() {

  const router = useRouter();

  const handleRegisterClick = () => {
    router.push("/register");
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>👨‍💻 {TITLE} 💬</h1>
        <p>{SUBTITLE}</p>
      </header>

      <div className={styles.hero}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdh8ypYm1_agPI1Dy9837Ggm60HbcZPGmTA&s"
          alt="ילדים לומדים קוד"
        />
        <img 
          src="https://img.freepik.com/premium-vector/illustration-student-activity_1368420-4108.jpg?semt=ais_hybrid&w=740"
          alt="ילדים לומדים קוד"
        />
        <img
          src="https://img.lovepik.com/png/20231112/code-clipart-cartoon-illustration-of-a-kid-working-at-the_568649_wh860.png"
          alt="ילדים לומדים קוד"
        />
      </div>

      <div>
        <Paragraphs/>
      </div>

      <section className={styles.section}>
        <h2>🎯 מה מחכה לנו בסדנה?</h2>
        <ul>
          <li>✅לימוד עקרונות התכנות בשפת פייתון בדרך כיפית וברורה</li>
          <li>✅ רכישת ידע באנגלית "על הדרך"</li>
          <li>✅ פרויקטים איכותיים – משחקים ותוכנות</li>
          <li>✅ פיתוח חשיבה לוגית ויצירתית</li>
          <li>✅ אווירה נעימה ברוח יהודית וחסידית</li>
        </ul>
      </section>

       <div className={styles.cta}>
          {/* <button onClick={handleRegisterClick}>📩 רוצה שנחזור אליכם?</button> */}
          {/* <h3>📩 רוצה שנחזור אליכם?</h3> */}
          <Register/>
        </div>

      <footer className={styles.footer}>
       מספר המקומות מוגבל!
      </footer>
    </div>
  );
}
