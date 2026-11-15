import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage.jsx";
import StockPage from "../components/pages/StockPage.jsx";
import AboutPage from "../components/pages/AboutPage.jsx";
import LoginPage from "../components/pages/LoginPage.jsx";
import SiteLayout from "../components/layout/SiteLayout.jsx";
import "../styles/site.css";
import "../styles/homepage_style.css";
import "../styles/stock_style.css";
import "../styles/aboutus_style.css";
import "../styles/login_style.css";
import NotFoundPage from "../components/pages/NotFoundPage.jsx";

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/stock" element={<StockPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
