import { createContext } from "react";

const MapContext = createContext<null | google.maps.Map>(null);

export default MapContext