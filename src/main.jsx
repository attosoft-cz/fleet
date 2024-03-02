import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { GeolocationProvider } from "./GeoLocator/GeolocationProvider.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ikp1j2ryu7j1k8to.eu.auth0.com"
      clientId="R5l6lYMvmN2PUuht2v7KkJII1ldjl5gb"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <GeolocationProvider>
        <App />
      </GeolocationProvider>
    </Auth0Provider>
  </React.StrictMode>,
);
