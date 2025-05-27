import { useEffect, useRef, useState } from "react";
import "./App.css";
import FirstImg from "./assets/firstimg.png";

function App() {
  const flapRef = useRef(null);
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (flapRef.current && cardRef.current) {
        flapRef.current.style.transform = "rotateX(-180deg)";
        cardRef.current.style.transform = "translateY(-100%) rotateY(0deg)";
      }
    }, 10);
  }, []);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
    if (cardRef.current) {
      cardRef.current.style.transform = isFlipped
        ? "translateY(-100%) rotateY(0deg)"
        : "translateY(-100%) rotateY(180deg)";
    }
  };

  return (
    <div className="envelope-wrapper">
      <div className="envelope">
        <div className="flap" ref={flapRef}></div>
        <div
          className="invitation-card"
          ref={cardRef}
          onClick={handleCardClick}
        >
          <div className="card-front">
            <img src={FirstImg} alt="초대 이미지" />
          </div>
          <div className="card-back">
            <h2 className="">후니 집에 놀러오세요!</h2>
            <p>📅 날짜: 2025년 6월 2일</p>
            <p>📍 장소: dd</p>
            <p>⏰ 시간: 오후 3시부터</p>
            <p>☎️ 연락처: 010-0000-0000</p>
          </div>
        </div>
      </div>
      <div className="under-text">사진을 클릭해보세요!</div>
    </div>
  );
}

export default App;
