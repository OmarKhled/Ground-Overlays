import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import polygonData from "./data/polygonData";
import GoogleMap from "./components/Google/GoogleMap";
import Polygon from "./components/Google/Polygon";
import GroundOverlay from "./components/Google/GroundOverlay";
import Marker from "./components/Google/Marker";

const App = () => {
  return (
    <>
      <Map />
    </>
  );
};

type overlay = "waterleaf" | "soilmoisture";

const ToggleOverlay = ({
  overlayType,
  setOverlayType,
}: {
  overlayType: overlay;
  setOverlayType: Dispatch<SetStateAction<overlay>>;
}) => {
  return (
    <div className="toggle">
      <input
        type="radio"
        value="waterleaf"
        id="waterleaf"
        checked={overlayType === "waterleaf"}
        onClick={() => setOverlayType("waterleaf")}
      />{" "}
      <label htmlFor="waterleaf">Water Leaf</label>
      <input
        type="radio"
        value="soilmoisture"
        id="soilmoisture"
        name="overlaytype"
        checked={overlayType === "soilmoisture"}
        onClick={() => setOverlayType("soilmoisture")}
      />{" "}
      <label htmlFor="soilmoisture">Soil Moisture</label>
    </div>
  );
};

const Map = () => {
  const [overlayType, setOverlayType] = useState<overlay>("waterleaf");

  return (
    <>
      <ToggleOverlay {...{ overlayType, setOverlayType }} />
      <GoogleMap
        zoom={15}
        center={{ lat: 22.38360728605472, lng: 28.86720479655186 }}
      >
        <Polygon
          path={polygonData.map((item) => ({ lat: item[0], lng: item[1] }))}
        />
        <GroundOverlay
          url={
            overlayType === "waterleaf"
              ? "https://i.ibb.co/v4ZTS5v/DM6k-XXn-Zs-Dv7-Uq-Qyy-Yh0-Fr8sw.png"
              : "https://i.ibb.co/BtmNZSZ/Cpz6i-Yvfw7-PGfy-Zf-Zf-Miq5-Gbg-UY.png"
          }
          bounds={{
            east: 28.871184692988564,
            west: 28.86323748684021,
            north: 22.383697608064246,
            south: 22.376139360067032,
          }}
        />
        <Marker />
      </GoogleMap>
    </>
  );
};

export default App;
