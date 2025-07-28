"use server";
import nodemailer from "nodemailer";

const sendEmail = async (name: string, email: string, message: string) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASS
        }
    })

    const mailOptions = {
    from: process.env.NODEMAILER_EMAIL, // or your own email
    to: process.env.NODEMAILER_EMAIL,
    subject: `New message from ${name}`,
    text: message,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong><br/>${message}</p>`,
  };

    try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to send email." };
  } 

}

export default sendEmail;