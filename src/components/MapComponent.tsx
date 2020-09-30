import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const { innerWidth: width, innerHeight: height } = window;

const containerStyle = {
  width: width,
  height: height
};


const center = {
  lat: 41.80931,
  lng: 24.090655
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDKGNcNwkNJJBopC_7-8CJj8QqjFpaDj78"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={19}
      >
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)