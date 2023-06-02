import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { NavBarStyle } from "./style";

import blog from "../../../assets/images/blog.png";
import blogIcon from "../../../assets/icons/blog.svg";
import bocabocaIcon from "../../../assets/icons/bocaboca.svg";
import ecommerce from "../../../assets/images/site.png";
import pinterest from "../../../assets/images/Screenshot_5.png";
import pinterestIcon from "../../../assets/icons/pinterest-color-svgrepo-com.svg";
import bocaboca from "../../../assets/images/bocaboca.png";

function NavBar() {
  const location = useLocation();
  const pathSplited = location.pathname.split("/");
  const navigateTo = useNavigate();
  const [classScreen, setClassScreen] = useState("shadowScreen");

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

  return (
    <NavBarStyle>
      <div className={classScreen}></div>
      {pathSplited[1] === "projects" ? (
        <div className="container">
          <div className="divCarousel">
            <ul className="navProjects">
              
                <li className="projectAnchor" style={ pathSplited[2]==='bocaboca' ?{borderColor:'#65ADBF',transform:'scale(1.1)'} : {}}>
                  <Link
                    to="/projects/bocaboca"
                    onClick={(e) => handleClick(e, "/projects/bocaboca")}
                  >
                    <img src={bocaboca} alt="button project"></img>
                    <div className="background" >
                      <img src={bocabocaIcon} alt="blog" className="icon"></img>
                    </div>
                  </Link>
                </li>
              
              
                <li className="projectAnchor" style={ pathSplited[2]==='blog' ?{borderColor:'#65ADBF',transform:'scale(1.1)'} : {}}>
                  <Link
                    to="/projects/blog"
                    onClick={(e) => handleClick(e, "/projects/blog")}
                  >
                    <img src={blog} alt="button project"></img>
                    <div className="background">
                      <img src={blogIcon} alt="blog" className="icon"></img>
                    </div>
                  </Link>
                </li>
              
              
                <li className="projectAnchor" style={ pathSplited[2]==='ecommerce' ?{borderColor:'#65ADBF',transform:'scale(1.1)'} : {}}>
                  <Link
                    to="/projects/ecommerce"
                    onClick={(e) => handleClick(e, "/projects/ecommerce")}
                  >
                    <img src={ecommerce} alt="button project"></img>
                    <div className="background">
                      <span className="title">E-commerce</span>
                    </div>
                  </Link>
                </li>
              
              
                <li className="projectAnchor" style={ pathSplited[2]==='pinterest' ?{borderColor:'#65ADBF',transform:'scale(1.1)'} : {}}>
                  <Link
                    to="/projects/pinterest"
                    onClick={(e) => handleClick(e, "/projects/pinterest")}
                  >
                    <img src={pinterest} alt="button project"></img>
                    <div className="background">
                      <div></div>
                      <img
                        src={pinterestIcon}
                        alt="blog"
                        className="icon"
                      ></img>
                    </div>
                  </Link>
                </li>
             
            </ul>
          </div>
        </div>
      ) : null}
    </NavBarStyle>
  );
}

export default NavBar;
