"use client";

import { divider } from "@nextui-org/react";

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  const handleSubmit = async (event: any): Promise<void> => {
    event.preventDefault();

    const data = {
      firstName: String(event.target.firstName.value),
      lastName: String(event.target.lastName.value),
      email: String(event.target.email.value),
      company: String(event.target.company.value),
      subject: String(event.target.subject.value),
      message: String(event.target.message.value),
    };

    console.log(data);
  };

  return (
    <>
      <hr className="w-full border-t-2 mb-12"/>
      <section className={`text-[#070C1B] pb-4 ${className ?? ""}`}>
        <div className="flex flex-col gap-2">
          <h3 id="contact" className="font-bold text-lg">
            We'd love to hear about your project
          </h3>
          <p className="text-[#848484] text-sm">
            Please provide details about your project and specific needs. Our
            team will review your information and get back to you with a
            personalized quote as soon as possible.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex justify-between items-center">
              <label htmlFor="firstName" className="font-semibold">
                First Name<span className="superscript text-red-500">*</span>
              </label>
              <input
                className="py-1 px-4 rounded-md bg-gray-100 border"
                type="text"
                autoComplete="off"
                id="firstName"
                placeholder="Jean"
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="lastName" className="font-semibold">
                Last Name<span className="superscript text-red-500">*</span>
              </label>
              <input
                className="py-1 px-4 rounded-md bg-gray-100 border"
                type="text"
                autoComplete="off"
                id="lastName"
                placeholder="Dupont"
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="email" className="font-semibold">
                Email<span className="superscript text-red-500">*</span>
              </label>
              <input
                className="py-1 px-4 rounded-md bg-gray-100 border"
                type="email"
                autoComplete="off"
                id="email"
                placeholder="dupont@post.lu"
                required
              />
            </div>
            <div className="flex justify-between  items-center mb-6">
              <label htmlFor="company" className="font-semibold">
                Company
              </label>
              <input
                className="py-1 px-4 rounded-md bg-gray-100 border"
                type="text"
                autoComplete="off"
                id="company"
                placeholder="Dupont S.A."
              />
            </div>
            <input
              className="py-1 px-4 rounded-md bg-gray-100 border"
              type="text"
              autoComplete="off"
              id="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="py-1 px-4 rounded-md bg-gray-100 border"
              rows={6}
              id="message"
              placeholder="Describe your project..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex justify-center cursor-pointer bg-[#070C1B] text-white text-[11px] md:text-[12px] lg:text-base xl:text-lg 2xl:text-xl py-2 md:py-2.5 lg:py-3 2xl:py-4 px-4 md:px-5 lg:px-8 rounded-md 2xl:rounded-lg w-40 md:w-48 lg:w-56 xl:w-64 2xl:w-72"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
