import { Loader, Map, MapMarker } from "react-kakao-maps-sdk";

function KakaoMapBox() {
  return (
    <Map
      center={{ lat: 36.3581, lng: 128.695 }}
      style={{ width: "100%", height: "300px" }}
      level={3}
    >
      <MapMarker position={{ lat: 36.3581, lng: 128.6954 }}>
        <div className="w-full" style={{ color: "#000" }}>
          의성군 후죽리442-8
        </div>
      </MapMarker>
    </Map>
  );
}
export default KakaoMapBox;
