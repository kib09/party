import { useState, useEffect, useRef } from "react";
import FirstImg from "../assets/firstimg.png";
import backimg from "../assets/backimg.png";
import MultiLineTyping from "../component/MultiLineTyping";
import KakaoMapBox from "../component/KakaoMapBox";

function FirstPage() {
  const cardRef = useRef(null);
  const innerRef = useRef(null);
  const overlayRef = useRef(null);

  const [isFlipped, setIsFlipped] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);

  const handleCardClick = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      setHasTyped(true);
    }
  };

  useEffect(() => {
    const inner = innerRef.current;
    const overlay = overlayRef.current;

    // 마우스 회전
    const handleMouseMove = (e) => {
      if (!inner || isFlipped) return;
      const rect = inner.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = (-1 / 5) * x + 20;
      const rotateX = (4 / 30) * y - 20;

      if (overlay) {
        overlay.style.backgroundPosition = `${x / 5 + y / 5}%`;
        overlay.style.filter = `opacity(${x / 200}) brightness(1.2)`;
      }

      inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseOut = () => {
      if (!inner || isFlipped) return;
      if (overlay) overlay.style.filter = "opacity(0)";
      inner.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    // 모바일 기울기
    const handleOrientation = (e) => {
      if (!inner || isFlipped) return;
      const rotateX = e.beta * 0.6; // 위아래
      const rotateY = e.gamma * 0.6; // 좌우
      inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    // 이벤트 등록
    if (inner) {
      inner.addEventListener("mousemove", handleMouseMove);
      inner.addEventListener("mouseout", handleMouseOut);
    }

    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      DeviceOrientationEvent.requestPermission()
        .then((response) => {
          if (response === "granted") {
            window.addEventListener("deviceorientation", handleOrientation);
          }
        })
        .catch(console.error);
    } else {
      window.addEventListener("deviceorientation", handleOrientation);
    }

    return () => {
      if (inner) {
        inner.removeEventListener("mousemove", handleMouseMove);
        inner.removeEventListener("mouseout", handleMouseOut);
      }
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [isFlipped]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#fef5e7] overflow-hidden">
      <div
        ref={cardRef}
        className="w-[320px] h-[500px] perspective"
        onClick={handleCardClick}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* 앞면 */}
          <div
            ref={innerRef}
            className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden transition-transform duration-300 ease-out cursor-pointer"
          >
            <div
              ref={overlayRef}
              className="absolute inset-0 bg-gradient-to-br from-transparent to-white opacity-0 pointer-events-none transition-all duration-300"
            />
            <img
              src={FirstImg}
              alt="초대 이미지"
              className="w-full h-full object-cover rounded-xl pointer-events-none"
            />
          </div>

          {/* 뒷면 */}
          <div
            className="absolute w-full h-full backface-hidden rotate-y-180 bg-cover bg-center rounded-xl shadow-2xl p-5 overflow-auto"
            style={{ backgroundImage: `url(${backimg})` }}
          >
            <div className="h-10 mb-16 text-white">
              {hasTyped && (
                <MultiLineTyping
                  lines={["Welcome to", "Hooin's House"]}
                  speed={100}
                />
              )}
            </div>
            <div className="text-center text-white font-cookie text-lg drop-shadow-lg font-bold">
              <h2 className="mb-3 text-2xl">
                술 지옥으로 초대합니다!
                <br />
                <span className="text-sm"> `노래 및 영화를 곁들인`</span>
              </h2>
              <div className="mb-5">
                2025년 6월 2일
                <br />
                오후 7시 부터 달려 달려~!
              </div>
              <div className="mb-5">
                집합 장소:
                <p>
                  의성군 의성읍 후죽리 <br />
                  442-8 503호(아리아빌)
                </p>
                <KakaoMapBox />
                <a
                  href="https://map.kakao.com/?urlX=880445.0000000775&amp;urlY=797781.9999999995&amp;name=%EA%B2%BD%EB%B6%81%20%EC%9D%98%EC%84%B1%EA%B5%B0%20%EC%9D%98%EC%84%B1%EC%9D%8D%20%ED%9B%84%EC%A3%BD%EB%A6%AC%20442-8&amp;map_type=TYPE_MAP&amp;from=roughmap"
                  target="_blank"
                  className="underline hover:opacity-50"
                >
                  앱으로 확인하기
                </a>
                <p className="mt-3 ">고오급 연락처: 010-6433-6711</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFlipped ? (
        ""
      ) : (
        <div div className="mt-10 font-bold">
          카드를 눌러 초대장을 확인하세요!
        </div>
      )}
    </div>
  );
}

export default FirstPage;
