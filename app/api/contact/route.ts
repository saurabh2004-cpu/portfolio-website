import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Email format validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'saurabhbodakhe2004@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact: ${subject || 'No Subject'}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f6f9fc; font-family: 'Segoe UI', Arial, sans-serif;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f6f9fc; padding: 40px 0;">
            <tr>
              <td align="center">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); border: 1px solid #e1e8ed;">
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #0e7490; padding: 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.5px;">New Portfolio Submission</h1>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="padding-bottom: 25px;">
                            <p style="margin: 0; color: #64748b; font-size: 14px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px; margin-bottom: 5px;">From</p>
                            <p style="margin: 0; color: #1e293b; font-size: 18px; font-weight: 600;">${name}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-bottom: 25px;">
                            <p style="margin: 0; color: #64748b; font-size: 14px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px; margin-bottom: 5px;">Email Address</p>
                            <a href="mailto:${email}" style="margin: 0; color: #0e7490; font-size: 16px; text-decoration: none; font-weight: 500;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-bottom: 25px;">
                            <p style="margin: 0; color: #64748b; font-size: 14px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px; margin-bottom: 5px;">Subject</p>
                            <p style="margin: 0; color: #1e293b; font-size: 16px;">${subject || 'No Subject'}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p style="margin: 0; color: #64748b; font-size: 14px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px; margin-bottom: 10px;">Message</p>
                            <div style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; padding: 20px;">
                              <p style="margin: 0; color: #334155; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                      <p style="margin: 0; color: #94a3b8; font-size: 12px;">This email was sent from your portfolio contact form.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
