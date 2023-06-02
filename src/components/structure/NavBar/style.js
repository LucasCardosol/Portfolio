import styled from "styled-components";

const white = "#F2F1F0";
export const NavBarStyle = styled.nav`
  
   @keyframes mymove {
    0% {
      transform: scale(1);
      margin-top: 0px;
      margin-right: 0px;
    }
    25% {
      transform: scale(1.1);
      margin-top: 0px;
      margin-right: 0px;
    }
    75% {
      transform: scale(1.1);
      margin-top: 0px;
      margin-right: 0px;
    }
    100% {
      transform: scale(3);
      margin-top: -300px;
      margin-right: -100px;
      
    }
  }

  @keyframes mymoveResponsivo {
    0% {
      transform: scale(1);
      margin-top: 0px;
      margin-right: 0px;
    }
    25% {
      transform: scale(1.1);
      margin-top: 0px;
      margin-right: 0px;
    }
    100% {
      transform: scale(1.1);
      margin-top: 0px;
      margin-right: 0px;
    }
  }
  
  .projectAnchor {
    height: 120px;
    width: 180px;
  
    border-radius: 3px;
    border: 3px solid ${white};
    cursor: pointer;
    position: relative;
    animation-fill-mode: forwards;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .background {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0,1);
      transition: 0.75s;
      
      .icon {
        height: 60px;
        width: 60px;
        transition: 0.2s;
      }
      .title{
        color: ${white};
        transition: 0.2s;
        font-size:21px;
      }
      :hover {
        background-color: rgba(0, 0, 0, 0);
        .icon,span {
          opacity: 0;
        }
      }
    }
    :hover {
      z-index: 4;
      animation: mymove 1.5s;
      animation-fill-mode: forwards;
      border:none;
      
    }
  }
  
  .divCarousel {
    max-width: 100%;
    width: 100%;
    position: fixed;
    z-index: 5;
    padding: 24px 0;
    bottom: 0;
    left: 0;
    background-color: black;
    max-height: 160px;
  }
  .navProjects {
    display: flex;
    gap: 24px;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    .divCarousel{
      max-width: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 50px;
      overflow-x: scroll;
    }
    
    .navProjects{
      padding-left:243px;
      margin-left: 300px;

    }
    .projectAnchor{
      :hover {
        
        animation: mymoveResponsivo 1.5s;
        animation-fill-mode:none;
        
      }
    }
  }
`