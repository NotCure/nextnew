"use client";

import React, { useEffect, useState } from "react";

const AgentTable = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("../api/agent");
      const data = await response.json();
      console.log(data);
      setAgents(data);
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-lg">
        <h3 className="text-white text-xl font-bold sm:text-2xl">
          Agent Table
        </h3>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-transparent text-white font-medium border-b">
            <tr>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Rank</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Password</th>
            </tr>
          </thead>
          <tbody className="text-white divide-y">
            {agents.map((agent, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{agent.Name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{agent.Rank}</td>
                <td className="px-6 py-4 whitespace-nowrap">{agent.Email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {agent.Password}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentTable;
