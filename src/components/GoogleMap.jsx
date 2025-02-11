import { useEffect } from "react";
import { london } from "../assets/locations";
import { difficulties } from "../assets/difficulties";

function GoogleMap() {
  useEffect(() => {
    // Dynamically load the Google Maps API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${
      import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    }&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      window.initMap = () => {
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: 51.5074, lng: -0.1278 }, // London
          zoom: 8,
        });

        // Define the coordinates for your polygon
        // This example creates a rough rectangle around central London
        const highlightedArea = new window.google.maps.Polygon({
          paths: london,
          strokeColor: difficulties.grounded,
          strokeOpacity: 0.8,
          strokeWeight: 3,
          fillColor: difficulties.grounded,
          fillOpacity: 0.2,
        });

        // Add the polygon to the map
        highlightedArea.setMap(map);
      };
    };
    document.head.appendChild(script);

    // Cleanup
    return () => {
      const scriptElement = document.querySelector(
        `script[src^="https://maps.googleapis.com/maps/api/js"]`
      );
      if (scriptElement) {
        document.head.removeChild(scriptElement);
      }
      // Remove the global callback
      delete window.initMap;
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Google Map */}
      <div
        id="map"
        className="w-full max-w-[900px] h-[80vh] border border-gray-300 mb-6"
      ></div>
    </div>
  );
}

export default GoogleMap;
