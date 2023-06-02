import styled from "styled-components";

export const AboutNavBarStyle = styled.nav`
  z-index: 100;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 160px;
  padding: 24px 0;
  background-color: black;
  ul {
    z-index: 100;
    width: 100%;
    justify-content: space-between;
    
  }
  .divLinks{
    
    height: 100%;
    width: 100%;
    margin-top: 45px;;
  }
  h4 {
    font-family: comfortaa;
    transition: 0.2s;
    :hover {
      color: #7eadbf;
      transform: scale(1.15);
    }
  }
  .carousel-item{
    text-align: center;
    
    h4,a{
      display: inline;
    }
  }
  .shadowScreen,
  .opacity {
    z-index: 99 !important;
    height: calc(100vh - 154px) !important;
    margin-bottom: 90px !important;
    bottom: 0;
  }
  .carousel{
   margin-top: 45px;
  }
`;
