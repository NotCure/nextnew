import React from "react";
import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";
import Title from "@/app/_components/title/Title";
import ContactForm from "@/app/_components/contact/contactForm";
export default function ContactPage() {
  return (
    <>
      <Header />
      <Navbar />
      <Title title="Contact" />
      <ContactForm />
    </>
  );
}
