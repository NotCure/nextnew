"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

// Use dynamic import for client-side only
const MapCenter = dynamic(
  () =>
    Promise.resolve(({ lat, lng }) => {
      const map = useMap();
      useEffect(() => {
        if (lat && lng) {
          map.setView([lat, lng], 15); // Zoom level set to 15 for a closer look
        }
      }, [lat, lng, map]);
      return null;
    }),
  { ssr: false }
);

const originalWidth = 214;
const originalHeight = 413;
const newWidth = 28;
const newHeight = (originalHeight / originalWidth) * newWidth; // Keeping aspect ratio

const originalShadowWidth = 263;
const originalShadowHeight = 257;
const newShadowWidth = newWidth;
const newShadowHeight =
  (originalShadowHeight / originalShadowWidth) * newShadowWidth; // Keeping aspect ratio

const customIcon = new Icon({
  iconUrl: "/assets/Marker.png", // Ensure this path is correct
  shadowUrl: "/assets/MarkerShadow.png", // Ensure this path is correct
  iconSize: [newWidth, newHeight], // Adjusted size keeping aspect ratio
  iconAnchor: [newWidth / 2, newHeight], // Adjust the anchor point as needed
  popupAnchor: [0, -newHeight], // Adjust the popup anchor point as needed
  shadowSize: [newShadowWidth, newShadowHeight], // Adjusted size keeping aspect ratio
  shadowAnchor: [newShadowWidth / 2, newShadowHeight], // Adjust the shadow anchor point as needed
});

const ReportMap = ({ selectedLocation }) => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await fetch("../../api/getReports"); // Corrected the API endpoint
      const data = await response.json();
      setReports(data);
    } catch (error) {
      console.error("Failed to fetch reports:", error);
    }
  };

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {selectedLocation && (
        <MapCenter
          key={`${selectedLocation.lat}-${selectedLocation.lng}`}
          lat={selectedLocation.lat}
          lng={selectedLocation.lng}
        />
      )}
      {reports.map((report) => (
        <Marker
          key={report.ReportID}
          position={[report.Latitude, report.Longitude]}
          icon={customIcon}
        >
          <Popup>
            <b>{report.Description}</b>
            <br />
            {report.Location}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ReportMap;
