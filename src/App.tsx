import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSreenPage from "./pages/homeSreenPage";
import ScrapScreenPage from "./pages/scrapScreenPage";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeSreenPage />} />
        <Route path="/scrap" element={<ScrapScreenPage />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
