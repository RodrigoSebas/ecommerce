import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
import useAxios from "../hooks/useAxios";

const Map = ({ height = "500px", positionMarker, setPositionMarker }) => {

  //const [positionMarker, setPositionMarker] = useState(null)
  const [coordsMap, setCoordsMap] = useState([-12.0630198, -77.0384351])

  const LocationMarker = ({position, setPosition}) => {
    const map = useMapEvents({
      click(e){
        const {lat, lng} = e.latlng;
        setPosition([lat,lng]);
        map.flyTo(e.latlng, map.getZoom());
      }
    })

    if(coordsMap){
      const _map = useMap();
      _map.flyTo(coordsMap);
    }

    return (
    <>
      {position && <Marker position={position}/>}
    </>
    )
  }

  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((location) => {
        //console.log(location)
        const { coords } = location;
        //const {latitude, longitude} = coords;
        const {coords: {latitude, longitude}} = location;
        setCoordsMap([latitude, longitude]);
      });
    }
  }, [])


  return (
    <div className="w-full border-2 border-gray-600" style={{ height: height }}>
      <MapContainer center={coordsMap} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>; contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker position = {positionMarker} setPosition={setPositionMarker}/>
        <Marker position={[-12.0630198, -77.0384351]} />
      </MapContainer>
    </div>
  );
};

export default Map;
