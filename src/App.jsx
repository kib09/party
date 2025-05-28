import { HashRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Mainpage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/main" element={<Mainpage />} />
    </Routes>
  );
}

export default App;
