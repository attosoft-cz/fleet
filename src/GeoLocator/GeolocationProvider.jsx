import { createContext, useState, useContext, useEffect } from "react";

const GeolocationContext = createContext(null);

export const useGeolocation = () => {
  return useContext(GeolocationContext);
};

// eslint-disable-next-line react/prop-types
export const GeolocationProvider = ({ children }) => {
  const [geolocation, setGeolocation] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeolocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          alert("Nope! apple is messing with you");
          console.error("Error getting geolocation: ", error);

          switch (error.code) {
            case error.PERMISSION_DENIED:
              alert("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              alert("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              alert("An unknown error occurred.");
              break;
          }
        },
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  // Function to update geolocation
  const updateGeolocation = (newGeolocation) => {
    setGeolocation(newGeolocation);
  };

  return (
    <GeolocationContext.Provider value={{ geolocation, updateGeolocation }}>
      {children}
    </GeolocationContext.Provider>
  );
};
