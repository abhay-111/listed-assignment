'use client'

import { icon } from "leaflet";

const ICON = icon({
  iconUrl: "/marker.png",
  iconSize: [32, 32],
});
import React from 'react'
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap,Marker,Popup } from "react-leaflet";
export const Map = () => {
  return (
    <>
      <MapContainer
        className="h-full w-full overflow-hidden z-50 rounded-xl"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={ICON} position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
