import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";

import { HeaderStyle } from "./style";

function Header() {
  const [classScreen, setClassScreen] = useState("shadowScreen");
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  const navigateTo = useNavigate();
  const path = location.pathname.split("/")[1];

  function handleClick(e, linkPath) {
    if (location.pathname !== linkPath) {
      e.preventDefault();
      setClassScreen("opacity");

      setTimeout(() => {
        navigateTo(linkPath);
        setClassScreen("shadowScreen");
        setOpen(false)
      }, 700);
    }
  }



  return (
    <HeaderStyle>
      <div className={classScreen}></div>
      <div className={`menu blockResponsivo ${isOpen ? "on" : "off"}`}>
        <div className="nav container">
          <nav >
            <ul>
              <li>
                <Link to="/home" onClick={(e) => handleClick(e, "/home")}>
                 
                  <h4
                    className="comfortaa"
                    style={path === "home" || path === "" ? { color: "#7EADBF" } : {}}
                  >
                    Home
                  </h4>
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre/resumo"
                  onClick={(e) => handleClick(e, "/sobre/resumo")}
                >
                  <h4
                    className="comfortaa"
                    style={path === "sobre" ? { color: "#7EADBF" } : {}}
                  >
                    Sobre
                  </h4>
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/bocaboca"
                  onClick={(e) => handleClick(e, "/projects/bocaboca")}
                >
                  <h4
                    className="comfortaa"
                    style={path === "projects" ? { color: "#7EADBF" } : {}}
                  >
                    Projetos
                  </h4>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="container headerContainer">
        <nav className="blockDesktop">
          <ul>
            <li>
              <Link to="/home" onClick={(e) => handleClick(e, "/home")}>
                <h4
                  className="moonLight"
                  style={path === "home" || path === "" ? { color: "#7EADBF" } : {}}
                >
                  Home
                </h4>
              </Link>
            </li>
            <li>
              <Link
                to="/sobre/resumo"
                onClick={(e) => handleClick(e, "/sobre/resumo")}
              >
                <h4
                  className="moonLight"
                  style={path === "sobre" ? { color: "#7EADBF" } : {}}
                >
                  Sobre
                </h4>
              </Link>
            </li>
            <li>
              <Link
                to="/projects/bocaboca"
                onClick={(e) => handleClick(e, "/projects/bocaboca")}
              >
                <h4
                  className="moonLight"
                  style={path === "projects" ? { color: "#7EADBF" } : {}}
                >
                  Projetos
                </h4>
              </Link>
            </li>
          </ul>
        </nav>
        <h4 className="blockResponsivo">
          {(path==='home' || path === "")
          &&
            <button className="normal-button">
              <Link
                to="/projects/bocaboca"
                onClick={(e) => handleClick(e, "/projects/bocaboca")}
              >
                <h4>PROJETOS</h4>
              </Link>
            </button>
          }
          {path==='projects'&&'projetos'}
          {path==='sobre'&&'sobre'}
          </h4>
        <div className="blockResponsivo">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        
      </div>
    </HeaderStyle>
  );
}

export default Header;
