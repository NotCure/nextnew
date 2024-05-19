"use client";

import React, { useEffect, useState } from "react";

const AgentTable = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("../api/agent");
      const data = await response.json();
      setAgents(data);
    };

    fetchData();
  }, []);

  const handleDemote = async (id) => {
    const response = await fetch("../api/demoteAgent", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      setAgents(agents.filter((agent) => agent.AgentID !== id));
    } else {
      console.error("Failed to demote the agent");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-lg">
        <h3 className="text-white dark:text-black text-xl font-bold sm:text-2xl">
          Agent Table
        </h3>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-transparent text-white dark:text-black font-medium border-b">
            <tr>
              <th className="py-3 px-6 text-white dark:text-black">Name</th>
              <th className="py-3 px-6 text-white dark:text-black">Rank</th>
              <th className="py-3 px-6 text-white dark:text-black">Email</th>
              <th className="py-3 px-6 text-white dark:text-black">Password</th>
              <th className="py-3 px-6 text-white dark:text-black">Action</th>
            </tr>
          </thead>
          <tbody className="text-white dark:text-black divide-y">
            {agents.map((agent) => (
              <tr key={agent.AgentID}>
                <td className="px-6 py-4 whitespace-nowrap text-white dark:text-black">
                  {agent.Name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-white dark:text-black">
                  {agent.Rank}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-white dark:text-black">
                  {agent.Email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-white dark:text-black">
                  {agent.Password}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-red-500"
                    onClick={() => handleDemote(agent.AgentID)}
                  >
                    Demote
                  </button>
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
