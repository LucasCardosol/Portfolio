import React, { useEffect, useState } from "react";
import { AboutNavBarStyle } from "./style";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Carousel } from "react-bootstrap";

function AboutNavBar() {
  const location = useLocation();
  const navigateTo = useNavigate();
  const pathSplited = location.pathname.split("/");
  const [classScreen, setClassScreen] = useState("shadowScreen");
  
  const [index, setIndex] = useState(0)
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  
  function handleClick(e, linkPath) {
    if (location.pathname !== linkPath) {
      e.preventDefault();
      setClassScreen("opacity");

      setTimeout(() => {
        navigateTo(linkPath);
        setClassScreen("shadowScreen");
      }, 700);
    }
  }
  useEffect(() => {
    setIndex(pathSplited? pathSplited[2] === "resumo" 
    ? 0 
    : pathSplited[2] === "certificados" ? 1 : 2 : 0);
  },[location]);
  return (
    <>
      {pathSplited[1] === "sobre" ? (
        <AboutNavBarStyle>
          <div className={classScreen}></div>

          <div className="divLinks container">
            <ul className="flexDesktop">
              <li>
                <Link
                  to="/sobre/resumo"
                  onClick={(e) => handleClick(e, "/sobre/resumo")}
                >
                  <h4
                    style={
                      pathSplited[2] === "resumo" ? { color: "#7EADBF" } : {}
                    }
                  >
                    Resumo
                  </h4>
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre/certificados"
                  onClick={(e) => handleClick(e, "/sobre/certificados")}
                >
                  <h4
                    style={
                      pathSplited[2] === "certificados"
                        ? { color: "#7EADBF" }
                        : {}
                    }
                  >
                    CERTIFICADOS
                  </h4>
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre/jornada"
                  onClick={(e) => handleClick(e, "/sobre/jornada")}
                >
                  <h4
                    style={
                      pathSplited[2] === "jornada" ? { color: "#7EADBF" } : {}
                    }
                  >
                    Minha Jornada
                  </h4>
                </Link>
              </li>
            </ul>
            <Carousel
              className="blockResponsivo"
              indicators={false}
              interval={null}
              wrap={false}
              onSelect={handleSelect}
              activeIndex={index}
            >
              <Carousel.Item>
                <Link
                  to="/sobre/resumo"
                  onClick={(e) => handleClick(e, "/sobre/resumo")}
                >
                  <h4
                    style={
                      pathSplited[2] === "resumo" ? { color: "#7EADBF" } : {}
                    }
                  >
                    Resumo
                  </h4>
                </Link>
              </Carousel.Item>
              <Carousel.Item>
                <Link
                  to="/sobre/certificados"
                  onClick={(e) => handleClick(e, "/sobre/certificados")}
                >
                  <h4
                    style={
                      pathSplited[2] === "certificados"
                        ? { color: "#7EADBF" }
                        : {}
                    }
                  >
                    CERTIFICADOS
                  </h4>
                </Link>
              </Carousel.Item>
              <Carousel.Item>
                <Link
                  to="/sobre/jornada"
                  onClick={(e) => handleClick(e, "/sobre/jornada")}
                >
                  <h4
                    style={
                      pathSplited[2] === "jornada" ? { color: "#7EADBF" } : {}
                    }
                  >
                    Minha Jornada
                  </h4>
                </Link>
              </Carousel.Item>
            </Carousel>
          </div>
        </AboutNavBarStyle>
      ) : null}
    </>
  );
}

export default AboutNavBar;
