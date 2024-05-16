"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";
import Title from "@/app/_components/title/Title";
import Table from "./Table";
import AgentTable from "./AdminTable";

const AdminMenu = () => {
  const router = useRouter();

  useEffect(() => {
    const userJson = localStorage.getItem("user");
    const user = userJson ? JSON.parse(userJson) : null;

    if (!user || !user.isAdmin) {
      router.push("/Non");
    }
  }, [router]);

  return (
    <>
      <Header />
      <Navbar />
      <Title title="Admin" />
      <Table />
      <div className="pt-20">
        <AgentTable />
      </div>
    </>
  );
};

export default AdminMenu;
