import styled from "styled-components";

const white = "#F2F1F0";

export const ResumoStyle = styled.main`
  .title {
    display: inline-block;
  }
  .ToolsAndPresentation {
    
    padding-top: 117px;
    display: flex;
    justify-content: space-between;
    gap: 96px;
    

    .tools,.presentation{
      width: 100%;
    }
  }
  .frameTools {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 32px;
    justify-items: center;
    align-items: center;
    
    .tool {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p{
        text-align: center;
        color: #7eadbf;
      }
      .icon {
        height: 48px;
        object-fit: cover;
      }
    }
  }
  .otherText{
    padding:96px 0 200px 0
  }
  @media only screen and (max-width: 768px) {
    .ToolsAndPresentation{
      flex-direction: column-reverse;
      gap: 32px;
    }
    .otherText{
      padding-top:60px
    }
    .frameTools{
      grid-template-columns: repeat(3, 1fr);
      
      
      
    }
  }
`;
