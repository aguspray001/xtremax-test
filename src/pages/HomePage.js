import React, { useState } from "react";
import InfoBox from "src/components/molecules/InfoBox";
import Map from "src/components/molecules/Map";
import dataJson from "src/constant/data.json";

function HomePage() {
  const [markerData, setMarkerData] = useState([]);
  const [onCloseInfo, setOnCloseInfo] = useState(false);

  // *FUNCTION: TO GET MARKER DATA AND PASSIING TO LOCAL STATE
  const getMarkerName = React.useCallback((name) => {
    let markerInfo = dataJson.filter((data) => {
      return data.place === name;
    });
    setOnCloseInfo(false);
    setMarkerData(markerInfo);
  },[markerData])

  return (
    <div>
      <Map data={dataJson} getMarkerName={getMarkerName} selectedMarker={markerData[0] || []}/>
      <InfoBox
        onShow={onCloseInfo}
        onClose={() => setOnCloseInfo(true)}
        data={markerData[0] || []}
      />
    </div>
  );
}

export default HomePage;
