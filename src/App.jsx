/* eslint-disable no-unused-vars */
// import "./App.css";
// import TailFlex, { TailFlexCol } from "./flex/TailwindFlex";
// import SignInForm from "./SingInForm/SignIn";
// import { useEffect, useRef, useState } from "react";
// import mapboxgl from "mapbox-gl";
// import { useGeolocation } from "./GeoLocator/GeolocationProvider";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiaHJvbWlzIiwiYSI6ImNsc3QyMHF5cjFjYm0ya3FtYmlvM3lvaXgifQ.5ezo6yy0qdB_gunHLywH7g";

// const App = () => {
//   const { geolocation, updateGeolocation } = useGeolocation();
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng, setLng] = useState(-70.9);
//   const [lat, setLat] = useState(42.35);
//   const [zoom, setZoom] = useState(9);

//   useEffect(() => {
//     if (map.current) return;
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/streets-v12",
//       center: [geolocation.lat, geolocation.lon],
//       zoom: zoom,
//     });
//   });

//   return (
//     <div className="h- w-full">
//       hello there
//       <div>
//         tady bude mapa
//         <div ref={mapContainer} className="map-container" />
//       </div>
//       {/* <TailFlex></TailFlex> */}
//       {/* <TailFlexCol>dwa dwa dwa</TailFlexCol> */}
//       {/* <SignInForm /> */}
//     </div>
//   );
// };

// export default App;

import "./App.css";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import {
  GeolocationProvider,
  useGeolocation,
} from "./GeoLocator/GeolocationProvider";
import FlexJustifyContent from "./flex/FlexJustifyContent";
import MapComponent from "./Mapbox/Map";
import LoginButton from "./SingInForm/login";
import LogoutButton from "./SingInForm/logout";
import Profile from "./SingInForm/Profile";
import FixedExample from "./position/fixedPos";
import FixedPositionTillEndOfSectionScroll from "./position/fixedPositionTillEndOfSectionScroll";

const App = () => {
  // const [location, SetLocation] = useGeolocation()
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <FixedExample />
      <FixedPositionTillEndOfSectionScroll />
      {/* <LoginButton /> */}
      {/* <Profile /> */}
      {/* <LogoutButton /> */}
      {/* <MapComponent></MapComponent> */}
      {/* <FlexJustifyContent></FlexJustifyContent>
      <div className="text-center">hello there</div>
      <div className="relative h-full">
        <div
          className="absolute bottom-0 left-0 right-0 top-0"
          ref={mapContainer}
        />
        <div ref={mapContainer} className="map-container" />
      </div>
      {/* You can uncomment these lines to include the components if needed */}
      {/* <TailFlex /> */}
      {/* <TailFlexCol>dwa dwa dwa</TailFlexCol> */}
      {/* <SignInForm /> */}
    </div>
  );
};

export default App;
