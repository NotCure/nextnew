"use client";

import React, { useEffect, useState } from "react";

const UserAppointmentsTable = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("../api/getAppointment");
      const data = await response.json();
      setAppointments(data);
    };

    fetchData();
  }, []);

  const handleCancel = async (id) => {
    const response = await fetch("../api/deleteUserAppointment", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      setAppointments(
        appointments.filter((appointment) => appointment.AfspraakID !== id)
      );
    } else {
      console.error("Failed to cancel the appointment");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 p-10">
      <div className="max-w-lg">
        <h3 className="text-white dark:text-black text-xl font-bold sm:text-2xl">
          My Appointments
        </h3>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-transparent text-white dark:text-black font-medium border-b">
            <tr>
              <th className="py-3 px-6 text-white dark:text-black">
                Appointment
              </th>
              <th className="py-3 px-6 text-white dark:text-black">
                Date & Time
              </th>
              <th className="py-3 px-6 text-white dark:text-black">Name</th>
              <th className="py-3 px-6 text-white dark:text-black">Surname</th>
              <th className="py-3 px-6 text-white dark:text-black">Action</th>
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
                  {appointment.BurgerName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-white dark:text-black">
                  {appointment.BurgerVoornaam}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-white dark:text-black">
                  <button
                    className="text-red-500"
                    onClick={() => handleCancel(appointment.AfspraakID)}
                  >
                    Cancel
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

export default UserAppointmentsTable;
