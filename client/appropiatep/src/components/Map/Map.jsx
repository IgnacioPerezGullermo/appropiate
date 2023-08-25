import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import React, { useMemo } from 'react';

export const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
  });
  const center = useMemo(() => ({ lat: -33.0291548, lng: -71.5396279 }), []);
  return (
    <>
      {isLoaded ? (
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
        >
          <Marker position={{ lat: -33.0291548, lng: -71.5396279 }} />
        </GoogleMap>
      ) : null}
    </>
  );
};
