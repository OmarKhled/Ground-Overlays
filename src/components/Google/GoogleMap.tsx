import React, { useEffect, useRef, useState } from "react";
import MapContext from "../../context/MapContext";

interface props {
  zoom: number;
  center: { lat: number; lng: number };
  mapTypeId?: "roadmap" | "satellite" | "hybrid" | "terrain";
  children?: React.ReactNode;
}

const GoogleMap = ({
  zoom = 10,
  center = { lat: 0, lng: 0 },
  mapTypeId = "satellite",
  children,
}: props) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = new google.maps.Map(mapRef.current, {
        zoom,
        center,
        mapTypeId,
        disableDefaultUI: true,
      });
      if (map) setMap(map);
    }
  }, []);
  return (
    <div ref={mapRef} id="map">
      <MapContext.Provider value={map}>
        {mapRef.current === null ? <></> : children}
      </MapContext.Provider>
    </div>
  );
};

export default GoogleMap;
