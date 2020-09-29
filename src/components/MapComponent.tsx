import React from 'react';
import { GoogleMap, Marker } from "react-google-maps"

const MapComponent = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
}
export default MapComponent;