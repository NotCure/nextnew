"use client";

import React, { useEffect, useState } from "react";

const ReportTable = ({ onSelectLocation }) => {
  const [tableItems, setTableItems] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await fetch("../../api/getReports");
      const data = await response.json();
      setTableItems(data);
    } catch (error) {
      console.error("Failed to fetch reports:", error);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-lg">
        <h3 className="text-white text-xl font-bold sm:text-2xl">
          Reports Table
        </h3>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-transparent text-white font-medium border-b">
            <tr>
              <th className="py-3 px-6">Datetime</th>
              <th className="py-3 px-6">Location</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Agent Name</th>
            </tr>
          </thead>
          <tbody className="text-white divide-y">
            {tableItems.map((item) => (
              <tr key={item.ReportID}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(item.Datetime).toLocaleString()}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap cursor-pointer text-blue-500"
                  onClick={() =>
                    onSelectLocation({
                      lat: item.Latitude,
                      lng: item.Longitude,
                    })
                  }
                >
                  {item.Location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.Email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.AgentName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportTable;
