import React, { useContext, useEffect, useState } from "react";
import MapContext from "../../context/MapContext";

interface props {
  url: string;
  bounds: google.maps.LatLngBoundsLiteral;
}

const GroundOverlay = ({ url, bounds }: props) => {
  const map = useContext(MapContext);
  const [groundOverlay, setGroundOverlay] =
    useState<google.maps.GroundOverlay | null>(null);

  const render = (url: string) => {
    let overlay = new google.maps.GroundOverlay(url, bounds);
    overlay.setMap(map);
    setGroundOverlay(overlay);
  };

  useEffect(() => {
    groundOverlay?.setMap(null);
    render(url);
  }, [url]);

  useEffect(() => {
    if (groundOverlay) groundOverlay.setMap(null);
    render(url);
  }, []);
  return <div style={{}}>{url}</div>;
};

export default GroundOverlay;
