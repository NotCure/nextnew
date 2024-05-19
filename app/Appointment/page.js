"use client";

import React, { useEffect } from "react";
import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";
import Title from "@/app/_components/title/Title";
import UserAppointmentsTable from "./UserAppointmentsTable";

const MyAppointment = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Title title="My Appointment" />
      <div className="pt-20">
        <UserAppointmentsTable />
      </div>
    </>
  );
};

export default MyAppointment;
