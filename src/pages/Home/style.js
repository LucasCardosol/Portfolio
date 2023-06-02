import styled from "styled-components";
import person from '../../assets/images/lukas-godina-wNB3DFN3u9Q-unsplash.png'

const white = "#F2F1F0";

export const HomeStyle = styled.main`
  section {
    padding-top: 72px;
    display: flex;
    gap: 128px;
    justify-content: space-between;
  }
  h1 {
    margin-top: 96px;
  }
  .divisor {
    width: 50%;
    max-width: 96px;
    border-radius: 4px;
    height: 3px;
    background-color: ${white};
    margin-top: 4px;
    
  }
  
  p {
    max-width: 264px;
  }
  .logos {
    display: flex;
    gap: 21px;
    margin-top: 9px;
    margin-bottom: 64px;
    img {
      height: 48px;
    }
    .cv{
      height: 50px;
    }
  }
  
  .divText{
    animation:animationLeft 1.5s normal;
  }

  .divImage {
    height: calc(100vh - 28px);
    margin-top: -48px;
    margin-right: -100px;
    img {
      z-index: -1;
      height: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    
    .container{
      flex-direction: column-reverse;
    }
    .divText{
      background-color: rgba(0,0,0,0.5);
     margin-top: -500px;
    }
    .logos {
      margin-bottom: 0;
    }
    .divImage{
      z-index: -1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -96px;
      margin-right: -0px;
      img{
        height: auto;
        width: 100%;
        margin: 0 auto;
      }
    }
  }
`;
