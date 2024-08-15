"use client";

import sendMessage from "@/server/actions/sendMessage";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import { useState } from "react";

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  const [formStatus, setFormStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async () => {
    const result = await sendMessage({
      firstName: document.querySelector("#firstName")?.value,
      lastName: document.querySelector("#lastName")?.value,
      email: document.querySelector("#email")?.value,
      company: document.querySelector("#company")?.value,
      title: document.querySelector("#subject")?.value,
      message: document.querySelector("#message")?.value,
    });

    setFormStatus(result);

    const form = document.querySelector("#form");
    if (form && formStatus?.success) {
      form.reset();
    }
  };

  return (
    <>
      <hr className="w-full border-t-2 mb-12 md:mb-16 lg:mb-24 xl:mb-32" />
      <section className={`text-[#070C1B] pb-4 ${className ?? ""}`}>
        <div className="flex flex-col gap-2 lg:mb-12 xl:mb-16">
          <h3
            id="contact"
            className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl"
          >
            We'd love to hear about your project
          </h3>
          <p className="text-[#848484] text-sm md:text-base lg:text-lg xl:text-xl xl:w-3/4">
            Please provide details about your project and specific needs. Our
            team will review your information and get back to you with a
            personalized quote as soon as possible.
          </p>
        </div>
        <form id="form" action={handleSubmit} className="mt-8 flex">
          <div className="flex flex-col gap-8 w-full max-w-[1200px]">
            <div className="grid xl:grid-cols-2 items-center">
              <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
                <FormInput
                  label="First Name"
                  type="text"
                  placeholder="Jean"
                  required={true}
                  id="firstName"
                />
                <FormInput
                  label="Last Name"
                  type="text"
                  placeholder="Dupont"
                  required={true}
                  id="lastName"
                />
                <FormInput
                  label="Email"
                  type="email"
                  placeholder="dupont@post.lu"
                  required={true}
                  id="email"
                />
                <FormInput
                  label="Company"
                  type="text"
                  placeholder="Dupont S.A."
                  required={false}
                  id="company"
                />
              </div>
              <div className="hidden xl:flex justify-end">
                <img
                  className="w-3/4"
                  src="contact-form-illustration.svg"
                  alt="Two people talking through text messages"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-semibold">
                  Title<span className="superscript text-red-500">*</span>
                </label>
                <input
                  className="py-1 px-4 w-full rounded-md bg-gray-100 h-[40px] md:h-[45px] xl:h-[50px]"
                  type="text"
                  autoComplete="off"
                  id="subject"
                  placeholder="Subject"
                  minLength={15}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-semibold">
                  Message<span className="superscript text-red-500">*</span>
                </label>
                <textarea
                  className="py-1 px-4 rounded-md w-full bg-gray-100"
                  rows={6}
                  id="message"
                  placeholder="Describe your project..."
                  minLength={50}
                  required
                ></textarea>
              </div>
              <div className="flex gap-8 mt-4 items-center">
                <SubmitButton />
                {formStatus && formStatus.success && (
                  <div className="text-green-800 font-semibold md:text-lg">
                    {formStatus.message}
                  </div>
                )}
                {formStatus && !formStatus.success && (
                  <div className="text-red-800 font-semibold md:text-lg">
                    {formStatus.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
