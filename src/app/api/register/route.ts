import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, email, phone } = data;

    // בדיקות בסיסיות
    if (!name || !email || !phone) {
      return NextResponse.json({ message: "נא למלא את כל השדות" }, { status: 400 });
    }

    // כאן תוכלי להוסיף לוגיקה לשליחת המייל או שמירה בבסיס נתונים

    console.log("הרשמה חדשה:", data); // להדפיס לשרת לבדיקה

    return NextResponse.json({ message: "ההרשמה התקבלה בהצלחה" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "שגיאה בשרת" }, { status: 500 });
  }
}
