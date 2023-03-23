import React, { useContext, useEffect } from "react";
import MapContext from "../../context/MapContext";

interface props {
  path: { lat: number; lng: number }[];
}

const Polygon = ({ path }: props) => {
  const map = useContext(MapContext);

  useEffect(() => {
    if (map) {
      const drawnPath = new google.maps.Polyline({
        path: path,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      drawnPath.setMap(map);
    }
  }, []);
  return <></>;
};

export default Polygon;
