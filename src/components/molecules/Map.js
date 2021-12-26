import React, { useEffect, useState } from "react";
// library
import GoogleMapReact from "google-map-react";
// component
import Marker from "../atoms/Marker";

const Map = ({ data, getMarkerName, selectedMarker }) => {
  const [initLocation, setInitLocation] = useState({
    center: {
      lat: 1.28692,
      lng: 103.85457,
    },
    zoom: 15,
  });

  useEffect(() => {
      if(selectedMarker.length !== 0){
        setInitLocation({
            center: {
              //set the selectedMarker to be center
              lat: selectedMarker?.latitude,
              lng: selectedMarker?.longitude,
            },
            zoom: 17,
          });
      }
  }, [selectedMarker]);

  return (
    // Important! Always set the container height explicitly
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        center={initLocation.center}
        zoom={initLocation.zoom}
      >
        {data &&
          data?.map((d, key) => (
            <Marker
              key={`${d.place}-${key}`}
              onClick={() => getMarkerName(d.place)}
              isActive={selectedMarker?.place === d.place}
              title={d.place}
              lat={d.latitude}
              lng={d.longitude}
              address={selectedMarker?.details ? selectedMarker?.details[0]?.info : ""}
            />
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
