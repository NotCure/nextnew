"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const originalWidth = 214;
const originalHeight = 413;
const newWidth = 28;
const newHeight = (originalHeight / originalWidth) * newWidth;

const originalShadowWidth = 263;
const originalShadowHeight = 257;
const newShadowWidth = newWidth;
const newShadowHeight =
  (originalShadowHeight / originalShadowWidth) * newShadowWidth;

const customIcon = new Icon({
  iconUrl: "/assests/Marker.png",
  shadowUrl: "/assests/MarkerShadow.png",
  iconSize: [newWidth, newHeight],
  iconAnchor: [newWidth / 2, newHeight],
  popupAnchor: [0, -newHeight],
  shadowSize: [newShadowWidth, newShadowHeight],
  shadowAnchor: [newShadowWidth / 4, newShadowHeight],
});

const MapCenter = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    if (lat && lng) {
      map.setView([lat, lng], 15);
    }
  }, [lat, lng, map]);
  return null;
};

const ReportMap = ({ selectedLocation }) => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await fetch("../../api/getReports");
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
