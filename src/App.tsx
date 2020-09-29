import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapComponent from './components/MapComponent'

function App() {
  return (
    <div className="App">
      <MapComponent isMarkerShown />
    </div>
  );
}

export default App;
