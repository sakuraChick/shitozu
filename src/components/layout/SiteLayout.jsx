import { Outlet } from "react-router-dom";
import NavBar from "../modules/NavBar.jsx";
import Footer from "../modules/Footer.jsx";

function SiteLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default SiteLayout;
