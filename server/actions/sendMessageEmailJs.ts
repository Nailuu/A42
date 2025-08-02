"use server";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  title: string;
  message: string;
}

interface EmailJSResponse {
  success: boolean;
  message: string;
}

const sendEmailJS = async (formData: FormData): Promise<EmailJSResponse> => {
  try {
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials are missing");
      return { success: false, message: "Email service configuration error." };
    }

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          firstname: formData.firstName,
          lastname: formData.lastName,
          email: formData.email,
          company: formData.company || "N/A",
          title: formData.title,
          message: formData.message,
        },
      }),
    });

    if (response.ok) {
      console.log("Email sent successfully via EmailJS");
      return { success: true, message: "Email sent successfully." };
    } else {
      const errorText = await response.text();
      console.error("EmailJS API error:", errorText);
      return { success: false, message: "Failed to send email. " + errorText };
    }
  } catch (error) {
    console.error("Server error sending email:", error);
    return { success: false, message: "Failed to send email due to server error." + error  };
  }
};

export default sendEmailJS;