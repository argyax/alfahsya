//import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//import MarkerClusterGroup from "react-leaflet-cluster";
//import { Icon, divIcon, point } from "leaflet";
//import { GrLocation } from "react-icons/gr";
//import { location } from "../assets";

export default function Map() {

  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4 font-sans text-gray-800 bg-gray-100">
      <MapContainer 
        center={[-0.5016, 117.1265]} 
        zoom={13} 
        scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-0.5016, 117.1265]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
