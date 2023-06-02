import styled from "styled-components";

export const JornadaStyle = styled.main`
  padding-bottom: 96px;
  .projectAndText{
    display: flex;
    gap: 96px;
    padding-bottom: 128px;
  }
  .sec2021{
    padding-top: 117px;
    
  }
  
  .divText {
    p{
      max-width: 410px;
    }
  }
  .project {
    width: 48vw;
    max-width: 900px;
    img {
      width: 100%;
    }
  }
  .divisor{
      width: 50% !important;
      max-width: 96px;
    }
    .year{
      margin-bottom: 32px;
    }
  
  @media only screen and (max-width: 768px){
    .projectAndText{
      gap: 0;
      flex-direction: column;
      padding-bottom: 64px;
      .project{
        width: 100%;
        margin-bottom: 16px;
      }
    }
    .year{
      margin-bottom: 64px;
    }
    .reverse{
      flex-direction: column-reverse !important;
    }
  }
`;
