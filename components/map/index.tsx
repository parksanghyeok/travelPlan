import { useLoadScript, GoogleMap, Marker, MarkerF } from '@react-google-maps/api';
import React, { useMemo, useState } from 'react';

const Map = () => {
  const libraries = useMemo(() => ['places'], []);
  const [center, setCenter] = useState({ lat: 34.6654352, lng: 135.4323364 });
  const mapCenter = useMemo(
    () => ({ lat: 34.6654352, lng: 135.4323364 }),
    []
  );
  const testMarker = useMemo(
    () => ({ lat: 37.5883891, lng: 126.9194435 }),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAVn02NkD7FRuBRkSHPIN9HvY2DJXUUiuM',
    libraries: libraries as any,
  });

  return isLoaded ? (
    <div className="w-full h-full">
      <GoogleMap
        options={mapOptions}
        zoom={18}
        center={center}
        mapContainerStyle={{ width: '100%', height: '100vh' }}
        onLoad={() => console.log('Map Component Loaded...')}
      >
        <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} onClick={() => setCenter({ lat: 34.6654352, lng: 135.4323364 })}/>
        <MarkerF position={testMarker} />
      </GoogleMap>
    </div>
  ) : <></>;
};

export default Map;