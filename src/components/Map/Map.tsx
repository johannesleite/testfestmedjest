import GeoDummyMarkers from "../../../geodummy.json";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  GeoJSONProps,
} from "react-leaflet";

const Map = () => {
  const position: [number, number] = [58.133238, 7.968342];

  const onEachFeature = (feature: any, layer: any) => {
    const temp = feature.properties.val.toFixed(2);
    const timestamp = new Date(feature.properties.timeDate).toLocaleString(
      "no"
    );

    const popupText = `ID: ${feature.properties.id} <br/>
      Temperatur: ${temp}°C <br/>
      Tid: ${timestamp}`;

    layer.bindPopup(popupText);
  };

  return (
    <MapContainer
      center={position}
      zoom={12}
      scrollWheelZoom={true}
      style={{ minHeight: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON
        data={GeoDummyMarkers.features as any}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  );
};

export default Map;
