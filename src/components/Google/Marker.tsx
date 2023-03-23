import { Dialog } from "@reach/dialog";
import React, { useContext, useEffect, useState } from "react";
import MapContext from "../../context/MapContext";
import "@reach/dialog/styles.css";

const Marker = () => {
  const map = useContext(MapContext);
  const [dialog, setDialog] = useState(false);
  const [marker, setMarker] = useState<null | google.maps.Marker>(null);

  useEffect(() => {
    if (map) {
      const marker = new google.maps.Marker({
        position: { lat: 22.38360728605472, lng: 28.87820479655186 },
        map: map,
        title: "Demo Marker",
      });
      marker.setMap(map);
      setMarker(marker);
      google.maps.event.addListener(marker, "click", () => {
        // alert(marker.getTitle());
        setDialog(true);
      });
    }
  }, []);
  return (
    <>
      <Dialog isOpen={dialog} onDismiss={() => setDialog(false)}>
        <p>Marker: {marker?.getTitle()}</p>
      </Dialog>
    </>
  );
};

export default Marker;
