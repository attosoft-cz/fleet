import mapboxgl from "mapbox-gl";
import { useRef, useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaHJvbWlzIiwiYSI6ImNsc3QyMHF5cjFjYm0ya3FtYmlvM3lvaXgifQ.5ezo6yy0qdB_gunHLywH7g";

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const lineColor = "#f731cc";

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserHeading: true,
    });
    map.addControl(geolocate);

    map.on("load", () => {
      geolocate.trigger();
    });

    const getRoute = (end) => {
      const start = [map.getCenter().lng, map.getCenter().lat];
      const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const route = data.routes[0].geometry.coordinates;
          if (map.getSource("route")) {
            map.getSource("route").setData({
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates: route,
              },
            });
          } else {
            map.addLayer({
              id: "route",
              type: "line",
              source: {
                type: "geojson",
                data: {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "LineString",
                    coordinates: route,
                  },
                },
              },
              layout: {
                "line-join": "round",
                "line-cap": "round",
              },
              paint: {
                "line-color": lineColor,
                "line-width": 5,
              },
            });
          }
        });
    };

    // Add click event listener
    map.on("click", (e) => {
      const coords = [e.lngLat.lng, e.lngLat.lat];
      getRoute(coords);
    });

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "400px" }} />
  );
};

export default MapComponent;
