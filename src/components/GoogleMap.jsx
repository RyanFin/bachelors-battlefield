import { useEffect } from "react";

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

        // M25 orbital motorway coordinates (approximate)
        const london = [
          { lat: 51.7019, lng: -0.3367 }, // Junction 23 (South Mimms)
          { lat: 51.7142, lng: -0.2628 }, // Junction 24
          { lat: 51.7086, lng: -0.1831 }, // Junction 25
          { lat: 51.6847, lng: -0.1125 }, // Junction 26
          { lat: 51.6631, lng: -0.0381 }, // Junction 27
          { lat: 51.6394, lng: 0.0264 }, // Junction 28
          { lat: 51.5911, lng: 0.1525 }, // Junction 29
          { lat: 51.5567, lng: 0.2542 }, // Junction 30
          { lat: 51.5158, lng: 0.2831 }, // Junction 31
          { lat: 51.4661, lng: 0.2744 }, // Junction 2
          { lat: 51.4169, lng: 0.2219 }, // Junction 3
          { lat: 51.3567, lng: 0.1392 }, // Junction 4
          { lat: 51.3289, lng: 0.0506 }, // Junction 5
          { lat: 51.3108, lng: -0.0811 }, // Junction 6
          { lat: 51.2994, lng: -0.1614 }, // Junction 7
          { lat: 51.2956, lng: -0.2547 }, // Junction 8
          { lat: 51.3153, lng: -0.3447 }, // Junction 9
          { lat: 51.3356, lng: -0.4356 }, // Junction 10
          { lat: 51.3681, lng: -0.5033 }, // Junction 11
          { lat: 51.4047, lng: -0.5514 }, // Junction 12
          { lat: 51.4453, lng: -0.5553 }, // Junction 13
          { lat: 51.4839, lng: -0.5508 }, // Junction 14
          { lat: 51.5097, lng: -0.5158 }, // Junction 15
          { lat: 51.56, lng: -0.5083 }, // Junction 16
          { lat: 51.6039, lng: -0.4872 }, // Junction 17
          { lat: 51.6342, lng: -0.4647 }, // Junction 18
          { lat: 51.6639, lng: -0.4189 }, // Junction 19
          { lat: 51.6847, lng: -0.3842 }, // Junction 21
          { lat: 51.7019, lng: -0.3367 }, // Back to Junction 23 to close the loop
        ];

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
