import { useEffect, useRef } from "react";
import FirstImg from "../assets/firstimg.png";
import { useNavigate } from "react-router-dom";

function FirstPage() {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const navigate = useNavigate(); // ← 컴포넌트 바깥이면 오류 발생
  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;

    const handleMouseMove = (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
      const rotateY = (-1 / 5) * x + 20;
      const rotateX = (4 / 30) * y - 20;

      if (overlay) {
        overlay.style.backgroundPosition = `${x / 5 + y / 5}%`;
        overlay.style.filter = `opacity(${x / 200}) brightness(1.2)`;
      }

      if (container) {
        container.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    const handleMouseOut = () => {
      if (overlay) overlay.style.filter = "opacity(0)";
      if (container)
        container.style.transform =
          "perspective(350px) rotateY(0deg) rotateX(0deg)";
    };

    const handleDeviceOrientation = (event) => {
      const { beta, gamma } = event;
      const rotateX = beta * 0.5;
      const rotateY = gamma * 0.5;

      if (container) {
        container.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseout", handleMouseOut);
    }

    // 모바일 권한
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      DeviceOrientationEvent.requestPermission()
        .then((response) => {
          if (response === "granted") {
            window.addEventListener(
              "deviceorientation",
              handleDeviceOrientation
            );
          }
        })
        .catch(console.error);
    } else {
      window.addEventListener("deviceorientation", handleDeviceOrientation);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseout", handleMouseOut);
      }
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#fef5e7] overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-[400px] h-[400px] rounded-xl overflow-hidden transition-transform duration-300 ease-out cursor-pointer"
        onClick={() => navigate("/main")}
      >
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-br from-transparent to-white opacity-0 pointer-events-none transition-all duration-300"
        />
        <img
          src={FirstImg}
          alt="초대 이미지"
          className="w-full h-full object-cover rounded-xl pointer-events-none "
        />
      </div>
      <div className="mt-10 font-bold">사진을 눌러 초대장을 확인하세요!</div>
    </div>
  );
}

export default FirstPage;
