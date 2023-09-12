import { Link, NavLink } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import { useState } from "react";

export default function Header() {
  let [navbar, setNavbar] = useState(false);
  let [active, setActive] = useState(false);

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
                  <NavLink
                    className="text-light nav-link"
                    to="About"
                    style={({ isActive }) => {
                      return { backgroundColor: isActive ? "#1abc9c" : "" };
                    }}
                  >
                    about
                  </NavLink>
                </li>
                <li className="nav-item px-2  fw-bold">
                  <NavLink
                    className="  text-light nav-link"
                    to="Products"
                    style={({ isActive }) => {
                      return { backgroundColor: isActive ? "#1abc9c" : "" };
                    }}
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item px-2 fw-bold">
                  <NavLink
                    className="  text-light nav-link"
                    to="Portfolio"
                    style={({ isActive }) => {
                      return { backgroundColor: isActive ? "#1abc9c" : "" };
                    }}
                  >
                    portfolio
                  </NavLink>
                </li>
                <li className="nav-item px-2 fw-bold">
                  <NavLink
                    className=" text-light nav-link"
                    to="Contact"
                    style={({ isActive }) => {
                      return { backgroundColor: isActive ? "#1abc9c" : "" };
                    }}
                  >
                    contact
                  </NavLink>
                </li>
              </ul>
              <div className="position-relative cart text-light fs-5">
                <h6>
                  <span className="start-100 position-absolute badge bg-primary">
                    0
                  </span>
                </h6>

                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
