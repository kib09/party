import { Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default App;
