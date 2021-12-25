import React, { useState } from "react";
import InfoBox from "src/components/molecules/InfoBox";
import Map from "src/components/molecules/Map";
import dataJson from "src/constant/data.json";

function HomePage() {
  const [markerData, setMarkerData] = useState([]);
  const [onCloseInfo, setOnCloseInfo] = useState(false);

  const getMarketName = (name) => {
    let markerInfo = dataJson.filter((data) => {
      return data.place === name;
    });
    setOnCloseInfo(false);
    setMarkerData(markerInfo);
  };

  return (
    <div>
      <Map data={dataJson} getMarkerName={getMarketName} selectedMarker={markerData[0] || []}/>
      <InfoBox
        onShow={onCloseInfo}
        onClose={() => setOnCloseInfo(true)}
        data={markerData[0] || []}
      />
    </div>
  );
}

export default HomePage;
