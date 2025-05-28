import MultiLineTyping from "../component/MultiLineTyping";

function Mainpage() {
  return (
    <div className="flex flex-col items-center h-screen bg-[#fef5e7] overflow-hidden pt-20">
      <div className="relative  bg-white w-[400px] rounded-xl overflow-hidden ">
        <div className="h-10 mb-20 p-3">
          <MultiLineTyping
            lines={["Weelcome to", "huin's House"]}
            speed={100}
          />
        </div>
        <div className=" flex flex-col items-center justify-center mb-20 gap-10">
          <h2>후니 집에 놀러오세요!</h2>
          <p>📅 날짜: 2025년 6월 2일</p>
          <p>📍 장소: dd</p>
          <p>⏰ 시간: 오후 3시부터</p>
          <p>☎️ 연락처: 010-0000-0000</p>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
