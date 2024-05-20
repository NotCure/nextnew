import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = ({ onSubmit }) => {
  const [message, setMessage] = useState("");
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleDateChange = (date) => {
    if (date && date < new Date()) {
      setError("The appointment date must be in the future.");
    } else {
      setError("");
    }
    setAppointmentDate(date);
  };

  const handleTimeChange = (time) => {
    if (
      appointmentDate &&
      time &&
      new Date(appointmentDate).setHours(time.getHours(), time.getMinutes()) <
        new Date()
    ) {
      setError("The appointment time must be in the future.");
    } else {
      setError("");
    }
    setAppointmentTime(time);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!appointmentDate || appointmentDate < new Date()) {
      setError("The appointment date must be in the future.");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      setError("User not found in local storage.");
      return;
    }

    const appointmentDateTime = new Date(appointmentDate);
    if (appointmentTime) {
      appointmentDateTime.setHours(
        appointmentTime.getHours(),
        appointmentTime.getMinutes()
      );
    }

    try {
      const response = await fetch("/api/submitAppointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          appointmentDateTime,
          userId: user.BurgerID || user.AgentID,
        }),
      });

      if (response.ok) {
        setSuccessMessage("Appointment created successfully!");
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      setError("An error occurred while creating the appointment.");
    }
  };

  return (
    <section className="bg-transparent flex justify-center items-center">
      <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 w-full flex justify-center">
        <div className="w-full max-w-3xl">
          <div className="rounded-lg bg-transparent p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-4">
                <div className="w-full">
                  <DatePicker
                    selected={appointmentDate}
                    onChange={handleDateChange}
                    placeholderText="Select a date"
                    customInput={
                      <input
                        type="text"
                        className="w-full shadow-lg rounded-lg dark:text-black bg-white border-gray-200 p-3 text-sm md:p-4 md:pr-48 "
                      />
                    }
                    className="w-full"
                  />
                </div>

                <div className="w-full">
                  <DatePicker
                    selected={appointmentTime}
                    onChange={handleTimeChange}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    placeholderText="Select a time"
                    customInput={
                      <input
                        type="text"
                        className="w-full shadow-lg rounded-lg dark:text-black border-gray-200 p-3 text-sm md:p-4 md:pr-48 bg-white"
                      />
                    }
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <textarea
                  className="w-full shadow-lg rounded-lg dark:text-black bg-white border-gray-200 p-3 text-sm md:p-4"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              {successMessage && (
                <div className="text-blue-500 text-sm">{successMessage}</div>
              )}

              <div className="mt-4">
                <button
                  type="submit"
                  className="dark:border-black  dark:text-black inline-block w-full rounded-lg bg-transparent px-5 py-3 font-medium text-white sm:w-auto border border-white"
                >
                  Make Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
