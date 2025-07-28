"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required.";
        break;
      case "email":
        if (!value.trim()) error = "Email is required.";
        else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value))
          error = "Enter a valid email.";
        break;
      case "message":
        if (!value.trim()) error = "Message is required.";
        break;
    }

    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email) &&
      formData.message.trim()
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Object.entries(formData).forEach(([key, value]) =>
      validateField(key, value)
    );

    if (!isFormValid()) return;

    axios
      .post("http://localhost:3000/api/", {
        data: formData,
      })
      .then((res) => {
        if (res.status === 200) {
          setSubmitted(true);
        }
      });
  };

  return (
    <section id="contact" className="bg-black text-white py-10 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 hidden lg:block">
          <Image
            src="/images/contact-section.png"
            width={800}
            height={600}
            alt="Contact illustration"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
            priority
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-center">
            Contact Me
          </h2>

          {submitted ? (
            <p className="text-green-500 text-lg text-center">
              Thank you! Your message has been sent.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 border ${
                    formErrors.name ? "border-red-500" : "border-gray-600"
                  } bg-black rounded-lg focus:outline-none focus:ring-2 ${
                    formErrors.name
                      ? "focus:ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border ${
                    formErrors.email ? "border-red-500" : "border-gray-600"
                  } bg-black rounded-lg focus:outline-none focus:ring-2 ${
                    formErrors.email
                      ? "focus:ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.email}
                  </p>
                )}
              </div>
                
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 border ${
                    formErrors.message ? "border-red-500" : "border-gray-600"
                  } bg-black rounded-lg focus:outline-none focus:ring-2 ${
                    formErrors.message
                      ? "focus:ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 px-6 rounded-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
