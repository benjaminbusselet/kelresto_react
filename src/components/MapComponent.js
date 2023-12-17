import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

const restaurantIcon = new L.Icon({
  iconUrl: `${process.env.PUBLIC_URL}/images/resto.png`,
  iconSize: [50, 50],
  iconAnchor: [25, 52],
});

const MapUpdater = ({ selectedCoords }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedCoords) {
      map.flyTo(selectedCoords, map.getZoom());
    }
  }, [selectedCoords, map]);

  return null;
};

const MapComponent = ({ data, onRestaurantSelect, selectedCoords }) => {
  const defaultPosition = [43.5817273, 7.1287432999999965];

  return (
    <MapContainer center={defaultPosition} zoom={16} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((resto, index) => (
        <Marker
          key={index}
          position={[resto.latlng.lat, resto.latlng.lng]}
          icon={restaurantIcon}
          eventHandlers={{
            click: () => onRestaurantSelect(resto),
          }}
        />
      ))}
      <MapUpdater selectedCoords={selectedCoords} />
    </MapContainer>
  );
};

export default MapComponent;