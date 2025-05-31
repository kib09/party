import { Map, MapMarker } from "react-kakao-maps-sdk";

function KakaoMapBox() {
  return (
    <Map
      center={{ lat: 36.3581, lng: 128.695 }}
      className="w-full h-[300px] pointer-events-none"
      level={3}
      draggable={false}
      zoomable={false}
      scrollwheel={false}
      disableDoubleClickZoom={true}
    >
      <MapMarker position={{ lat: 36.3581, lng: 128.6954 }}>
        <div style={{ color: "#000" }}>의성군 후죽리 442-8</div>
      </MapMarker>
    </Map>
  );
}

export default KakaoMapBox;
