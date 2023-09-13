import { Outlet } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout(props, count) {
  return (
    <>
      <Header count={count} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
