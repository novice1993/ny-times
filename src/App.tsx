import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSreenPage from "./pages/homeSreenPage";
import ScrapScreenPage from "./pages/scrapScreenPage";
import NoScrapIndicatorPage from "./pages/noScrapIndicatorPage";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeSreenPage />} />
        <Route path="/scrap" element={<ScrapScreenPage />} />
        <Route path="/noScrap" element={<NoScrapIndicatorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
