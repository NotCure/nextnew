import React, { useState } from "react";

const TypeOne = () => {
  const [useCurrentAddress, setUseCurrentAddress] = useState(false);
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleCheckboxChange = () => {
    setUseCurrentAddress((prev) => !prev);
    if (!useCurrentAddress) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          fetchAddress(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Error fetching location", error);
        }
      );
    } else {
      setAddress("");
      setLatitude("");
      setLongitude("");
    }
  };

  const fetchAddress = (lat, lon) => {
    const apiKey = "ccc00906832949edac05d667655e36b3"; // Replace with your actual API key
    const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.features && data.features.length > 0) {
          setAddress(data.features[0].properties.formatted);
        } else {
          setAddress("Address not found");
        }
      })
      .catch((error) => {
        console.error("Failed to fetch address", error);
        setAddress("Failed to fetch address");
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/submitReport", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          name,
          email,
          address,
          latitude,
          longitude,
        }),
      });
      const responseData = await response.json();
      if (response.ok) {
        setStatusMessage("Report submitted successfully!");
      } else {
        throw new Error(responseData.error || "An unknown error occurred");
      }
    } catch (error) {
      console.error("Submission error:", error.message);
      setStatusMessage(`Failed to submit report: ${error.message}`);
    }
  };

  return (
    <section className="bg-transparent flex justify-center items-center">
      <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 w-full flex justify-center">
        <div className="w-full max-w-3xl">
          <div className="rounded-lg bg-transparent p-8 lg:p-12">
            <form action="#" onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  className="w-full rounded-lg dark:text-black dark:border-black p-3 mr-12 text-sm md:p-4 md:mr-40 bg-white shadow-lg"
                  placeholder="Name"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="w-full rounded-lg dark:text-black dark:border-black p-3 text-sm md:p-4 bg-white shadow-lg"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="sr-only"
                  id="Option1"
                  type="checkbox"
                  tabIndex="-1"
                  name="option"
                  checked={useCurrentAddress}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="Option1"
                  className={`block cursor-pointer rounded-lg p-3 text-white dark:text-black mb-4 flex justify-center items-center ${
                    useCurrentAddress ? "border-2 " : "border "
                  }`}
                >
                  <span className="text-sm text-center">
                    Use Current Address
                  </span>
                </label>
                <input
                  className={`w-full rounded-lg dark:border-black p-3 text-sm md:p-4 bg-white shadow-lg ${
                    useCurrentAddress ? " dark:text-black" : "text-gray-900"
                  }`}
                  placeholder="Address"
                  type="text"
                  id="address1"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  disabled={useCurrentAddress}
                />
              </div>
              <div>
                <textarea
                  className="w-full rounded-lg dark:text-black border-black p-3 text-sm md:p-4 bg-white shadow-lg"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-transparent px-5 py-3 font-medium text-white dark:text-black sm:w-auto border dark:border-black border-white"
                >
                  Send Report
                </button>
              </div>
              {statusMessage && (
                <div className="mt-4 text-blue-500">{statusMessage}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypeOne;
