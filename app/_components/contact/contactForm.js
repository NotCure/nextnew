"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xnqerdeo"); // Replace "xnqerdeo" with your actual Formspree form ID

  if (state.succeeded) {
    return (
      <div className="bg-transparent p-8 rounded-lg flex justify-center">
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
          <div>
            <label
              htmlFor="email"
              className="block text-white dark:text-black text-sm font-medium mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-white dark:text-black text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border border-gray-300 rounded-md bg-white"
              rows="4"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full p-2 text-white dark:text-black rounded-md border dark:border-black border-white disabled:bg-gray-500"
          >
            Submit
          </button>
          <div>
            <h1 className="text-white dark:text-black">
              Thanks for contacting us! The Message is successfully sent!
            </h1>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-lg flex justify-center">
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <div>
          <label
            htmlFor="email"
            className="block text-white dark:text-black text-sm font-medium mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded-md bg-white shadow-lg"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 text-xs mt-1"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-white dark:text-black text-sm font-medium mb-2 "
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border border-gray-300 rounded-md bg-white shadow-lg"
            rows="4"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 text-xs mt-1"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full p-2 text-white dark:text-black rounded-md border dark:border-black border-white  "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
