"use server";

import nodemailer from "nodemailer"

const sendMessage = async (formData: any) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
    });

    const mail = {
        from: process.env.SMTP_USER,
        to: process.env.ASSOCATION_EMAIL,
        replyTo: formData.email,
        subject: `[JR42] - New Contact Form Submission`,
        html: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            color: #0044cc;
        }
        p {
            line-height: 1.5;
        }
        .label {
            font-weight: bold;
        }
        .value {
            margin-bottom: 15px;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #888;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>New Contact Form Submission</h2>
        <p class="label">First Name:</p>
        <p class="value">${formData.firstName}</p>

        <p class="label">Last Name:</p>
        <p class="value">${formData.lastName}</p>

        <p class="label">Email:</p>
        <p class="value"><a href="mailto: ${formData.email}">${formData.email}</a></p>

        <p class="label">Company:</p>
        <p class="value">${formData.company ? formData.company : "N/A"}</p>

        <p class="label">Subject:</p>
        <p class="value">${formData.title}</p>

        <p class="label">Message:</p>
        <p class="value">${formData.message}</p>
    </div>
</body>
</html>

        `
    };
  
    try {
        await transporter.sendMail(mail);
        return { success: true, message: "Email sent successfully." };
    } catch (error) {
        return { success: false, message: "Failed to send email." };
    }
};

export default sendMessage;