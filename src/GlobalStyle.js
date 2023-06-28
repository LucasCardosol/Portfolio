import { createGlobalStyle } from "styled-components";
import moonLight from "./assets/fonts/Moon Light.otf";
import comfortaa from "./assets/fonts/Comfortaa-Regular.ttf";


const black = "#262118";
const white = "#F2F1F0";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: moon;
        src: url(${moonLight});
    }
    @font-face {
        font-family: comfortaa;
        src: url(${comfortaa});
    }
    body{
        margin: 0;
        //background-color: #303030;
        background-color: #303030;
      
        
        ::-webkit-scrollbar {
        width: 1px;
        }
        ::-webkit-scrollbar-thumb {
        background: ${white}; 
        }
    }
    button{
        border: none;
        cursor: pointer;
        background-color: transparent;
        font-family: comfortaa, sans-serif;
    }
    a{
        text-decoration: none;
    }
    ul{
        margin: 0;
        padding: 0;
        list-style: none
    }
    p , h1 , h2 , h3 , h4 {
        margin: 0;
        color: ${white};
        font-weight: 400;
        
    }
    p{
        font-size: 16px;
        text-align: left;
        line-height: 25px;
        text-align: justify;
    }
    
    h4{
        font-size: 24px;
    }
    h1{
        
        font-size: 48px;
        
    }
    .blue{
        color: #7EADBF;
    }
    .moonLight{
        font-family: moon;
    }
    .comfortaa{
        font-family: comfortaa, sans-serif;
        
    }
    
    .normal-button{
        font-family: comfortaa;
        border-radius: 3px;
        background-color: transparent;
        padding:  14px 16px 8px 16px;
        font-size: 24px;
        border: rgb(242, 241, 240) solid 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        :active{
            transform: scale(1.1);
        }
        h4{
            color: white;
            
        }
    }
    @keyframes shadow {
        0%{background-color: black;}
        100%{background-color: transparent;}
    }
    
    @keyframes opacity {
        0% {background-color: transparent;}
        100% {background-color: black;}
        
    }
    @keyframes animationLeft {
        0%{
        margin-left: -100px;
        opacity: 0;
        }
       
        100%{
        margin-left:0;
        opacity: 1;
        }
    }
    @keyframes animationRight {
        0%{
        margin-right: -100px;
        opacity: 0;
        }
        
        100%{
        margin-right:0;
        opacity: 1;
        }
    }
    @keyframes animationBottom {
        0%{
        margin-ri: -100px !important;
        opacity: 0;
        }
        
        100%{
        margin-bottom: -100px;
        opacity: 1;
        }
    }

    .shadowScreen{
        z-index: 2;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: calc(100vh - 77px );
        animation: shadow 0.75s;
        pointer-events: none;
        animation-fill-mode: forwards;
    }
    
    .opacity{
        z-index: 2;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: calc(100vh - 77px );
        animation: opacity 0.75s;
        pointer-events: none;
        animation-fill-mode: forwards;
    }
    .project{
        position: relative;
    }
    .flexResponsivo{
        display: none;
    }
    .blockResponsivo{
        display: none
    }
    .flexDesktop{
        display: flex;
    }
    .blockDesktop{
        display: block;
    }
    .none{
        display: none;
    }
    .block{
        display: block;
    }
    .flex{
        display: flex;
    }
    @media only screen and (max-width: 768px) {
    .flexResponsivo{
      display: flex;
    }
    .blockResponsivo{
      display: block;
    }
    .flexDesktop{
      display: none
    }
    .blockDesktop{
      display: none
    }
    .none{
        display: none;
    }
    .block{
        display: block;
    }
    .flex{
        display: flex;
    }
    .container{
        width: 100%;
    }
  }
`;

export default GlobalStyle;
