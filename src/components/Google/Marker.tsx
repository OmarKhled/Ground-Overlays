import React, { useContext, useEffect } from "react";
import MapContext from "../../context/MapContext";

interface props {
  // path: { lat: number; lng: number }[];
}

const Marker = () => {
  const map = useContext(MapContext);

  useEffect(() => {
    if (map) {
      const marker = new google.maps.Marker({
        position: { lat: 22.38360728605472, lng: 28.87820479655186 },
        map: map,
        title: "Demo Marker",
      });
      marker.setMap(map);
      google.maps.event.addListener(marker, "click", () =>
        alert(marker.getTitle())
      );
    }
  }, []);
  return <></>;
};

export default Marker;
