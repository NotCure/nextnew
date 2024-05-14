import React, { useState } from "react";

const TypeOne = () => {
  const [useCurrentAddress, setUseCurrentAddress] = useState(false);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckboxChange = () => {
    setUseCurrentAddress((prev) => !prev);
    if (!useCurrentAddress) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchAddress(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Error fetching location", error);
        }
      );
    } else {
      setAddress(""); // Clear the address when unchecked
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
      const response = await fetch("../../api/submitReport", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Datetime: new Date().toISOString(), // Sending current datetime in ISO format
          Location: address,
          Email: email,
          Description: message,
        }),
      });
      const responseData = await response.json();
      if (response.ok) {
        console.log("Response:", responseData.message);
        alert(responseData.message);
      } else {
        throw new Error(responseData.error);
      }
    } catch (error) {
      console.error("Submission error:", error.message);
      alert("Failed to submit report: " + error.message);
    }
  };

  return (
    <section className="bg-transparent flex justify-center items-center">
      <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 w-full flex justify-center">
        <div className="w-full max-w-3xl">
          <div className="rounded-lg bg-transparent p-8 shadow-lg lg:p-12">
            <form action="#" onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 px-12 text-sm md:p-4 md:px-28"
                  placeholder="Name"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm md:p-4"
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
                  className={`block cursor-pointer rounded-lg p-3 text-white mb-4 flex justify-center items-center ${
                    useCurrentAddress ? "border-2 " : "border "
                  }`}
                >
                  <span className="text-sm text-center">
                    Use Current Address
                  </span>
                </label>
                <input
                  className={`w-full rounded-lg border-gray-200 p-3 text-sm md:p-4 ${
                    useCurrentAddress ? "text-white" : "text-gray-900"
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
                  className="w-full rounded-lg border-gray-200 p-3 text-sm md:p-4"
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
                  className="inline-block w-full rounded-lg bg-transparent px-5 py-3 font-medium text-white sm:w-auto border border-white"
                >
                  Send Report
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypeOne;
