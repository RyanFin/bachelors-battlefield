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
        new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: 51.5074, lng: -0.1278 }, // London
          zoom: 12,
        });
      };
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div
        id="map"
        style={{
          width: "120vh",
          height: "80vh", // Responsive height (80% of the viewport height)
          maxWidth: "900px", // Maximum width for larger screens
          border: "1px solid #ccc",
        }}
      ></div>
    </div>
  );
}

export default GoogleMap;
