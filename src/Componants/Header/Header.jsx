import { Link } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import { useState } from "react";

export default function Header() {
  let [navbar, setNavbar] = useState(false);
  function reduceNavheight() {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener("scroll", reduceNavheight);
  return (
    <>
      <header className="d-flex align-items-center">
        <nav
          className={
            navbar
              ? " navbar navbar-expand-sm  fixed-top py-0"
              : " navbar navbar-expand-sm  fixed-top py-2"
          }
        >
          <div className="container">
            <a
              className="fw-bold fs-2 p-4 text-light navbar-brand text-uppercase"
              href="#"
            >
              start framework
            </a>

            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav text-uppercase fs-6  p-4  ms-auto mt-2 mt-lg-0">
                <li className="nav-item px-2  fw-bold">
                  <Link className=" text-light nav-link" to="About">
                    about
                  </Link>
                </li>
                <li className="nav-item px-2  fw-bold">
                  <Link className=" text-light nav-link" to="Products">
                    Products
                  </Link>
                </li>
                <li className="nav-item px-2 fw-bold">
                  <Link className=" text-light nav-link" to="Portfolio">
                    portfolio
                  </Link>
                </li>
                <li className="nav-item px-2 fw-bold">
                  <Link className=" text-light nav-link" to="Contact">
                    contact
                  </Link>
                </li>
              </ul>
              <div className="cart position-relative text-light fs-5">
                <span className="position-absolute bottom-0 text-light left-0">
                  1
                </span>
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
