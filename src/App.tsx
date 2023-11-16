import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSreenPage from "./pages/homeSreenPage";
import ScrapScreenPage from "./pages/scrapScreenPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeSreenPage />} />
        <Route path="scrap" element={<ScrapScreenPage />} />
      </Routes>
    </Router>
  );
}

export default App;
