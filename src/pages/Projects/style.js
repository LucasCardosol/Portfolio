import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const ProjectStyle = styled.main`
  section {
    padding-top: calc(72px + 57px);
    display: flex;
    justify-content: flex-start;
    gap: 96px;
    
  }
  .normalContainer {
    padding-top: 96px;
    padding-bottom: calc(96px + 48px + 112px);
    flex-direction: row-reverse;
  }
  .uniqueImage{
    padding-top: 96px;
    padding-bottom: 200px;
    p{
      max-width: 470px;
      margin-top: 16px;
    }
  }
  .divText {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    p {
      max-width: 470px;
    }
  }
  .project {
    width: 48vw;
    max-width: 900px;
    .carousel-item {
      button {
        cursor: zoom-in;
      }
    }
    img {
      width: 100%;
    }
  }
  .centeredImage{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .buttons {
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    margin-top: 16px;
  }
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    background-color: black;
    padding: 10px;
    border-radius: 3px;
  }
  .carousel-indicators {
    margin-bottom: -30px;
  }
  @media only screen and (max-width: 768px) {
    padding-bottom: 192px;
    section {
      flex-direction: column;
    }
    .project {
      width: 100%;
    }
    section {
      gap: 0;
    }
    .normalContainer {
      flex-direction: column;
      padding-top: 60px;
      padding-bottom: 0;
      p {
        margin-top: 30px;
      }
    }
    .uniqueImage{
      padding-top: 60px;
      p{
        margin-top: 16px;
      }
    }
    .divText {
      flex-direction: column-reverse;
      p {
        max-width: 410px;
      }
    }
    .buttons {
      margin-bottom: 16px;
      margin-top: 35px;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  .modal-dialog{
    max-width: 90%;
    margin: auto;
    button{
      position: absolute;
      background-color: rgba(0,0,0,0.75);
      border-radius: 3px;
      right: 15px;
      top: 15px;
      padding: 0;
      img{
        height: 40px;
        width: 40px;
      }
    }
  } 
  .modal-body{
    padding: 0;
    position: relative;
    img{
      width: 100%;
    }
    
  }
`;
