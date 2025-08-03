"use client";

import sendEmailJS from "@/server/actions/sendMessageEmailJs";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import { useState, useRef } from "react";

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    title: '',
    message: '',
  });

  const [formSubmit, setFormSubmit] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.title.trim() || formData.title.length < 5) {
      newErrors.title = 'Title is required and must be at least 5 characters';
    }

    if (!formData.message.trim() || formData.message.length < 25) {
      newErrors.message = 'Message is required and must be at least 25 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const result = await sendEmailJS(formData);
        
        if (result.success) {
          setFormSubmit(true);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            title: '',
            message: '',
          });
        } else {
          alert(result.message || "Failed to send message. Please try again later.");
        }
      } catch (error) {
        console.error("Failed to send email: ", error);
        alert("Failed to send message. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (formSubmit) {
    return (
      <section className={`text-[#070C1B] pb-4 mb-8 lg:mb-12 xl:mb-16 flex flex-col items-center justify-center ${className ?? ""}`}>
        <div className="max-w-md mx-auto my-16 p-6 bg-white rounded-lg shadow-xl">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h2>
            <p className="text-gray-600 mb-6">Your message has been sent successfully.</p>
            <p className="text-gray-600 mb-6">We'll get back to you as soon as possible.</p>
            <button 
              onClick={() => setFormSubmit(false)}
              className="bg-[#070C1B] hover:bg-[#061743] text-white px-6 py-2 rounded-md transition-all duration-300"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <hr
        id="contact"
        className="w-full border-t-2 mb-12 md:mb-16 lg:mb-24 xl:mb-32 2xl:mb-24"
      />
      <section
        className={`text-[#070C1B] pb-4 mb-8 lg:mb-12 xl:mb-16 flex flex-col items-center justify-center${
          className ?? ""
        }`}
      >
        <div className="flex flex-col gap-2 lg:mb-12 xl:mb-16 items-center text-center">
          <h3 className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">
            We'd love to hear about your project
          </h3>
          <p className="text-[#848484] text-sm md:text-base lg:text-lg xl:text-xl xl:w-3/4">
            Please provide details about your project and specific needs. Our
            team will review your information and get back to you with a
            personalized quote as soon as possible.
          </p>
        </div>
        <div className="flex gap-2 mt-8 md:mt-4 lg:mt-0">
          <img src="mail.svg" className="fill-[#061743]" />
          <a
            className="text-[#061743] underline"
            href="mailto:contact@a42.lu"
          >
            contact@a42.lu
          </a>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 flex">
          <div className="flex flex-col gap-8 w-full max-w-[1200px]">
            <div className="grid xl:grid-cols-2 items-center">
              <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
                <div>
                  <FormInput
                    label="First Name"
                    type="text"
                    placeholder="Jean"
                    required={true}
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <FormInput
                    label="Last Name"
                    type="text"
                    placeholder="Dupont"
                    required={true}
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>}
                </div>

                <div>
                  <FormInput
                    label="Email"
                    type="email"
                    placeholder="dupont@post.lu"
                    required={true}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <FormInput
                    label="Company"
                    type="text"
                    placeholder="Dupont S.A."
                    required={false}
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="hidden xl:flex justify-end">
                <img
                  className="w-3/4 transition-all delay-200 duration-200 hover:scale-[1.1] hover:skew-y-1"
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
                  id="title"
                  name="title"
                  placeholder="title"
                  value={formData.title}
                  onChange={handleChange}
                  minLength={5}
                  required
                />
                {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-semibold">
                  Message<span className="superscript text-red-500">*</span>
                </label>
                <textarea
                  className="py-1 px-4 rounded-md w-full bg-gray-100"
                  rows={6}
                  id="message"
                  name="message"
                  placeholder="Describe your project..."
                  value={formData.message}
                  onChange={handleChange}
                  minLength={15}
                  required
                ></textarea>
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>
              <div className="flex flex-col mt-4 items-center">
                <SubmitButton isSubmitting={isSubmitting}/>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
