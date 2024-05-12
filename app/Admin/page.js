import React from "react";
import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";
import Title from "@/app/_components/title/Title";
import Table from "./Table";
import AgentTable from "./AdminTable";

const AdminMenu = () => {
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
