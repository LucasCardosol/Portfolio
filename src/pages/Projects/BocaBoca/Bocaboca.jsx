import React, { useState } from "react";
import Title from "../../../components/structure/Title/Title";
import Carousel from "react-bootstrap/Carousel";


import { ImageModal } from "../../../components/structure/ImageModal/ImageModal";
import { ProjectStyle , GlobalStyle} from "../style";
import bocaboca from "../../../assets/images/projects/bocabocaHome.png";
import bocabocaOld from "../../../assets/images/projects/bocabocaold.png";
import bocabocaExtrato from "../../../assets/images/projects/bocabocaExtrato.png";
import bocabocaPlanos from "../../../assets/images/projects/bocabocaPlanos.png";
import bocabocaReviews from "../../../assets/images/projects/bocabocaAvaliações.png";
import bocabocaOldFiscal from "../../../assets/images/projects/bocabocaOldFiscal.png";



function Bocaboca() {
  const [modalShow, setModalShow] = useState(false);
  const [imgToZoom, setImgToZoom] = useState("");
  

  return (
    <>
      <GlobalStyle/>
      <ProjectStyle>
        <section className="container">
          <div className="project">
            <Title className="blockResponsivo">
              <h4 className="comfortaa blue">Boca Boca</h4>
            </Title>
            <Carousel>
              <Carousel.Item>
                <button 
                  onClick={() => {
                    setImgToZoom(bocaboca);
                    setModalShow(true);
                  }}
                >
                  <img src={bocaboca} alt="página home do projeto boca boca"></img>
                </button>
              </Carousel.Item>

              <Carousel.Item>
                <button onClick={() => {
                    setImgToZoom(bocabocaReviews);
                    setModalShow(true);
                  }}>
                  <img src={bocabocaReviews} alt="página de avaliações do projeto boca boca"></img>
                </button>
              </Carousel.Item>

              <Carousel.Item>
                <button onClick={() => {
                    setImgToZoom(bocabocaExtrato);
                    setModalShow(true);
                  }}>
                  <img src={bocabocaExtrato} alt="página de extrato do projeto boca boca"></img>
                </button>
              </Carousel.Item>

              <Carousel.Item>
                <button onClick={() => {
                    setImgToZoom(bocabocaPlanos);
                    setModalShow(true);
                  }}>
                  <img src={bocabocaPlanos} alt="página de planos do projeto boca boca"></img>
                </button>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="divText">
            <Title className="blockDesktop">
              <h4 className="moonLight blue">Boca Boca </h4>
            </Title>
            <p className="comfortaa">
              Durante este ano, tive o privilégio de trabalhar em um projeto
              desafiador para a empresa Boca Boca. Fui responsável por
              implementar um novo design, utilizando as habilidades de uma
              talentosa designer, e tornar responsivo o marketplace. Com a
              colaboração dessa profissional, utilizei tecnologias como React,
              CSS e outras para criar uma interface moderna e atraente para os
              usuários.
            </p>
           
          </div>
        </section>

        <section className="container normalContainer">
          <div className="project">
            <Carousel>
              <Carousel.Item>
              <button onClick={() => {
                    setImgToZoom(bocabocaOld);
                    setModalShow(true);
                  }}>
                <img src={bocabocaOld}></img>
                </button>
              </Carousel.Item>
              <Carousel.Item>
              <button onClick={() => {
                    setImgToZoom(bocabocaOldFiscal);
                    setModalShow(true);
                  }}>
                <img src={bocabocaOldFiscal}></img>
                </button>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="divText">
            <p className="comfortaa">
              Como pode ser visto na imagem ao lado, essa era a antiga
              interface. Inicialmente, meu trabalho consistia em tornar as telas
              acessíveis em dispositivos móveis. No entanto, à medida que o
              tempo passou, o cliente decidiu que era necessário torná-la mais
              bonita e moderna. Reconhecendo minha limitação na área de design,
              sugeri a contratação de uma profissional especializada para criar
              as novas telas. Isso deu início a um desafio considerável, pois
              além de lidar com o CSS, precisei compreender o funcionamento
              completo do sistema, incluindo rotas e serviços. Com o novo
              design, foram necessárias alterações na estrutura do JSX, a
              substituição de alguns componentes em determinadas páginas, entre
              outras modificações
            </p>
          </div>
        </section>

        <ImageModal show={modalShow} imgtozoom={imgToZoom} onHide={() => setModalShow(false)} />
      </ProjectStyle>
    </>
  );
}

export default Bocaboca;
