import { useEffect } from "react";
import { london } from "../assets/locations";

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
          zoom: 9,
        });

        // Define the coordinates for your polygon
        // This example creates a rough rectangle around central London

        const highlightedArea = new window.google.maps.Polygon({
          paths: london,
          strokeColor: "#d2b48c",
          strokeOpacity: 0.8,
          strokeWeight: 3,
          fillColor: "#d2b48c",
          fillOpacity: 0.2,
        });

        // Add the polygon to the map
        highlightedArea.setMap(map);

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

      {/* Legend */}
      <div className="bg-black text-white p-4 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-center text-xl font-bold mb-4">Legend</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <LegendItem color="bg-[#d2b48c]" text="Casual Flirt (Easy)" />
          <LegendItem color="bg-[#c08552]" text="Social Charmer (Normal)" />
          <LegendItem color="bg-[#964b00]" text="Heartbreaker (Hard)" />
          <LegendItem
            color="bg-[#4b3621]"
            text="Emotional Survivor (Survivor Mode)"
          />
          <LegendItem
            color="bg-[#000000] text-white"
            text="Lonely Warrior (Grounded)"
          />
        </div>
      </div>
    </div>
  );
}

// LegendItem component
function LegendItem({ color, text }) {
  return (
    <div className="flex items-center space-x-2">
      <span className={`w-6 h-6 ${color} rounded-full`} />
      <span>{text}</span>
    </div>
  );
}

export default GoogleMap;
