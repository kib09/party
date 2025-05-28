import MultiLineTyping from "../component/MultiLineTyping";
import KakaoMapBox from "../component/KakaoMapBox";

function Mainpage() {
  return (
    <div className="flex flex-col items-center h-screen bg-[#fef5e7] pt-20 pb-15 ">
      <div className="relative bg-white w-[400px] rounded-xl shadow-2xl p-5 ">
        <div className="h-10 mb-12">
          <MultiLineTyping
            lines={["Weelcome to", "hooin's House"]}
            speed={100}
          />
        </div>
        <div className=" flex flex-col items-center justify-center gap-5 font-pokemon text-2xl">
          <h2>우리 집에 놀러오도록!!</h2>
          <p>
            우리는
            <br />
            2025년 6월 9일
            <br />
            오후 6시 부터 달린다!
          </p>

          <div className="w-[400px] p-5">
            <div className="mb-5 flex justify-center ">
              집합 장소:
              <p>
                의성군 의성읍 후죽리 <br />
                442-8 503호(아리아빌)
              </p>
            </div>
            <KakaoMapBox />

            <a
              href="https://map.kakao.com/?urlX=880445.0000000775&amp;urlY=797781.9999999995&amp;name=%EA%B2%BD%EB%B6%81%20%EC%9D%98%EC%84%B1%EA%B5%B0%20%EC%9D%98%EC%84%B1%EC%9D%8D%20%ED%9B%84%EC%A3%BD%EB%A6%AC%20442-8&amp;map_type=TYPE_MAP&amp;from=roughmap"
              target="_blank"
              className="underline hover:opacity-20 "
            >
              앱으로 확인하기
            </a>
          </div>

          <p>고오급 연락처: 010-6433-6711</p>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
