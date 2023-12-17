import React, { useState } from 'react';
import ListComponent from './components/ListComponent';
import MapComponent from './components/MapComponent';
import restoData from './data/listresto.json';
import './App.css';

const App = () => {
  const [selectedResto, setSelectedResto] = useState(null);
  const [selectedRestoCoords, setSelectedRestoCoords] = useState(null);

  const onRestaurantSelect = (restaurant) => {
    if (selectedResto === restaurant.name) {
      setSelectedResto(null);
      setSelectedRestoCoords(null);
    } else {
      setSelectedResto(restaurant.name);
      setSelectedRestoCoords([restaurant.latlng.lat, restaurant.latlng.lng]);
    }
  };

  return (
    <div>
      <header>KelResto</header>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '30%' }}>
          <ListComponent
            data={restoData.results}
            onRestaurantSelect={onRestaurantSelect}
            selectedResto={selectedResto}
          />
        </div>
        <div style={{ width: '70%' }}>
          <MapComponent
            data={restoData.results}
            onRestaurantSelect={onRestaurantSelect}
            selectedCoords={selectedRestoCoords}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
