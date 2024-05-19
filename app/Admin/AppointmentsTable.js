"use client";

import React, { useEffect, useState } from "react";

const AppointmentsTable = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("../api/getAppointment");
      const data = await response.json();
      setAppointments(data);
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-lg">
        <h3 className="text-white dark:text-black text-xl font-bold sm:text-2xl">
          Appointments Table
        </h3>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-transparent text-white dark:text-black font-medium border-b">
            <tr>
              <th className="py-3 px-6 text-white dark:text-black">
                Appointment ID
              </th>
              <th className="py-3 px-6 text-white dark:text-black">
                Date & Time
              </th>
              <th className="py-3 px-6 text-white dark:text-black">Message</th>
              <th className="py-3 px-6 text-white dark:text-black">
                Burger Name
              </th>
              <th className="py-3 px-6 text-white dark:text-black">
                Burger Surname
              </th>
              <th className="py-3 px-6 text-white dark:text-black">
                Agent Name
              </th>
              <th className="py-3 px-6 text-white dark:text-black">
                Agent Surname
              </th>
            </tr>
          </thead>
          <tbody className="text-white divide-y">
            {appointments.map((appointment) => (
              <tr key={appointment.AfspraakID}>
                <td className="px-6 py-4 whitespace-nowrap text-white dark:text-black">
                  {appointment.AfspraakID}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-white dark:text-black">
                  {new Date(appointment.DateTime).toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-white dark:text-black">
                  {appointment.Message}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-white dark:text-black">
                  {appointment.BurgerName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-white dark:text-black">
                  {appointment.BurgerVoornaam}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-white dark:text-black">
                  {appointment.AgentName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-white dark:text-black">
                  {appointment.AgentSurname}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentsTable;
