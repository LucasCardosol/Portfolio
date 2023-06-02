import styled from "styled-components";

export const CertificadosStyle = styled.main`
  section {
    padding-top: 117px;
    
  }
  .certificados{
    display: flex;
    gap: 96px;
    width: 100%;
    div ,img{
      width: 100%;
    }
    
  }
  .block{
    margin-bottom: 32px;
  }
  @media only screen and (max-width: 768px) {
    section {
    padding-bottom: 75px;
   
    }
    .certificados{
      flex-direction: column;
      padding-bottom: 140px;
      gap: 32px;
    }
  }

  @media only screen and (max-width: 1400px) and (min-width: 768px){
    section {
    padding-bottom: 200px;
   
    }
  }
`;
