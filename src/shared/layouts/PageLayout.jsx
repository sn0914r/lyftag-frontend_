import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function PageLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default PageLayout;
