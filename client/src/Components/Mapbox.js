import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import markers from "../map-marker";
import Locations from "./Locations";
mapboxgl.accessToken =
  "pk.eyJ1Ijoic25pbGF2YXJhdGgiLCJhIjoiY2w1djQzOXZsMDVieTNjb2RtMGhkY3YydyJ9.EEYlphkEKzGGA9IzH4xtEA";

export default function Mapbox({ locations }) {
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
    <div className="float-container" >
      <div className="float-child">
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className="map-container" />
      </div>
      <div className="float-child">
        <div className="location-holder">
          {locations.map((location) => (
            <Locations location={location} />
          ))}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

      </div>
      
    </div>
  );
}
