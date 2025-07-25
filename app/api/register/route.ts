import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function POST(req: Request) {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    const body = await req.json();

    const { name, email, phone } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: 'חסר שדה חובה' },
        { status: 400 }
      );
    }

    await sql`
      INSERT INTO users (name, email, phone_number)
      VALUES (${name}, ${email || null}, ${phone})
    `;

    return NextResponse.json({ success: true, message: 'נשמר בהצלחה' });
  } catch (err: unknown) {
    console.error('DB ERROR:', err);
    return NextResponse.json(
      { success: false, message: 'שגיאה בשליחת הנתונים' },
      { status: 500 }
    );
  }
}
