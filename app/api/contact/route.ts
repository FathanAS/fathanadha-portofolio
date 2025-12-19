import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // 1. Validasi Input
    if (!name || !email || !message) {
      return NextResponse.json({ message: "Data tidak lengkap" }, { status: 400 });
    }

    // 2. Konfigurasi Transporter (Lebih Stabil)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true untuk port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // 3. Verifikasi Koneksi (Untuk Debugging)
    try {
      await transporter.verify();
      console.log("SMTP Connection successful");
    } catch (err) {
      console.error("SMTP Verify Error:", err);
      return NextResponse.json({ message: "Gagal terkoneksi ke server email" }, { status: 500 });
    }

const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: "suratmanfathan@gmail.com",
      replyTo: email,
      subject: `🚀 [PORTFOLIO] New Message from ${name}`, // Tambah emoji biar menarik di inbox
      text: `New Message from ${name} (${email}):\n\n${message}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
        <style>
          .body-bg { background-color: #1B3C53; }
          .container-card { background-color: #FFFFFF; border-top: 4px solid #F5A623; }
          .accent-text { color: #F5A623; }
          .primary-text { color: #1B3C53; }
          .secondary-text { color: #555555; }
          .label-mono { font-family: 'Courier New', monospace; text-transform: uppercase; letter-spacing: 2px; font-size: 11px; font-weight: bold; }
        </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #1B3C53;">
          <div class="body-bg" style="padding: 40px 20px; font-family: 'Helvetica', Arial, sans-serif; line-height: 1.6;">
            
            <div class="container-card" style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.2);">
              
              <div style="background-color: #1B3C53; padding: 30px; text-align: center;">
                <p class="label-mono accent-text" style="margin: 0; color: #F5A623;">// INCOMING_TRANSMISSION</p>
                <h1 style="color: #FFFFFF; margin: 10px 0 0 0; font-size: 24px; letter-spacing: 1px;">
                  PORTFOLIO CONTACT
                </h1>
              </div>

              <div style="padding: 40px;">
                
                <div style="margin-bottom: 35px;">
                  <p class="label-mono primary-text" style="margin-bottom: 8px; color: #1B3C53;">> SENDER_IDENTITY</p>
                  <h2 class="primary-text" style="margin: 0; font-size: 22px; color: #1B3C53;">
                    ${name}
                  </h2>
                  <a href="mailto:${email}" style="color: #F5A623; text-decoration: none; font-weight: bold; font-size: 14px;">
                    ${email} &rarr;
                  </a>
                </div>

                <div style="background-color: #F8F9FA; border-left: 4px solid #F5A623; padding: 25px; border-radius: 4px;">
                  <p class="label-mono primary-text" style="margin-bottom: 15px; color: #1B3C53;">> MESSAGE_PAYLOAD</p>
                  <p class="secondary-text" style="margin: 0; font-size: 16px; color: #333333; white-space: pre-wrap;">${message}</p>
                </div>

              </div>

              <div style="background-color: #F0F2F5; padding: 20px; text-align: center; border-top: 1px solid #E5E7EB;">
                <p class="label-mono secondary-text" style="margin: 0; font-size: 10px; color: #777777;">
                  SYSTEM TIMESTAMP: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
                </p>
                <p class="label-mono secondary-text" style="margin: 5px 0 0 0; font-size: 10px; color: #777777;">
                  © ${new Date().getFullYear()} Suratman Fathan Portfolio
                </p>
              </div>

            </div>
            </div>
        </body>
        </html>
      `,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });

  } catch (error: any) {
    console.error("Main API Error:", error.message);
    return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
  }
}