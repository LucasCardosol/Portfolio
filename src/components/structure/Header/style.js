import styled from "styled-components";

export const HeaderStyle = styled.header`
    padding: 24px 0;
    z-index: 3;
    position: fixed;
    width: 100%;
    top: 0;
    background-color: black;
    .container{
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .dropdown-basic{
        ::after{
            content: none;
        }
    }
    .hamburger-react{
        div{
            background-color: #F2F1F0 !important;
            height: 2px !important;
            border: 1px solid #F2F1F0;
            border-radius: 20px;
        }
    }
    @keyframes menuAnimationOn {
        from{ opacity: 0;}
        to{opacity: 1;}
    }
    @keyframes menuAnimationOff {
        from{ opacity: 1;}
        to{opacity: 0;}
    }
    .off{
        background-color: red;
        animation: menuAnimationOff 0.5s;
        pointer-events: none;
    }
    .on{
        animation: menuAnimationOn 0.5s;
    }
    .menu{
        z-index: 100 !important;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.8);
        width: 100%;
        height: 100vh;
        margin-top: 96px;
        animation-fill-mode: forwards; 
        h4{
            z-index: 1000 !important;
        }
        .nav{
            
            z-index: 100 !important;
            
        }
            ul{
                flex-direction: column;
                align-items: end;
            }
        }
    a h4{
        transition: 0.15s;
        :hover{
            
            transform: scale(1.15);
        }
    }
    
    ul{
        display: flex;
        gap: 24px;
    }
    
    @media only screen and (max-width: 768px) {
        .headerContainer{
            justify-content: space-between;
        }
    }
`