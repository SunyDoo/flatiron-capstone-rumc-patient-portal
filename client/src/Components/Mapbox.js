import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import markers from "../map-marker";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic25pbGF2YXJhdGgiLCJhIjoiY2w1djQzOXZsMDVieTNjb2RtMGhkY3YydyJ9.EEYlphkEKzGGA9IzH4xtEA";

export default function App({ locations }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-74.151535);
  const [lat, setLat] = useState(40.579021);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(5));
      setLat(map.current.getCenter().lat.toFixed(5));
      setZoom(map.current.getZoom().toFixed(2));
    });
    markers.markers.features.map((feature) =>
      new mapboxgl.Marker()
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup().setHTML(
            `<p>${feature.properties.title}</p><img src="${feature.properties.url}" width="200" height="121"/><br></br><p>${feature.properties.address}</p>`
          )
        )
        .addTo(map.current)
    );
  });

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
      <div>
        <ul>
          {locations.map((loc) => (
            <li key={loc.id}>{loc.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
