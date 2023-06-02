import React, { useState } from "react";
import Title from "../../../components/structure/Title/Title";
import { Carousel } from "react-bootstrap";
import pinterest from "../../../assets/images/Screenshot_5.png";
import pinterest2 from "../../../assets/images/projects/pinterest2.png";
import { ProjectStyle, GlobalStyle } from "../style";
import { ImageModal } from "../../../components/structure/ImageModal/ImageModal";

function Pinterest() {
  const [imgToZoom, setImgToZoom] = useState("");
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <GlobalStyle />
      <ProjectStyle>
        <section className="container" >
          <div className="project">
            <Title className="blockResponsivo">
              <h4 className="moonLight blue">Pinterest</h4>
            </Title>
            <Carousel>
              <Carousel.Item>
                <button
                  onClick={() => {
                    setImgToZoom(pinterest);
                    setModalShow(true);
                  }}
                >
                  <img src={pinterest} alt="home projeto pinterest"></img>
                </button>
              </Carousel.Item>
              <Carousel.Item>
                <button
                  onClick={() => {
                    setImgToZoom(pinterest2);
                    setModalShow(true);
                  }}
                >
                  <img src={pinterest2} alt="image projeto pinterest"></img>
                </button>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="divText">
            <Title className="blockDesktop">
              <h4 className="moonLight blue">Pinterest</h4>
            </Title>
            <p className="comfortaa">
              Este projeto tem uma abordagem mais simples e foi inspirado pela
              ideia de criar clones de projetos populares para o meu portfólio.
              Decidi criar um clone do Pinterest, escolhi ele porque é um
              projeto interessante e menos explorado em comparação com outros,
              como Netflix e Spotify
            </p>
            <div className="buttons">
              <button className="normal-button">
                <a href='https://github.com/LucasCardosol/Pinterest' target="_blank">
                  <h4>CÓDIGO</h4>
                </a>
              </button>
              
            </div>
          </div>
        </section>
        <section className="container uniqueImage">
          <p className="comfortaa">
          Embora seja um projeto pequeno, meu foco principal foi na parte de design, reproduzindo uma tela e criando um HTML e CSS bem estruturados. A tela principal representou um desafio, pois exibe colunas com imagens de alturas diferentes, e o número de colunas aumenta de acordo com o tamanho da tela. Para resolver essa complexidade, utilizei o sistema Flexbox do CSS, que permitiu criar as colunas dinamicamente, adaptando-se às diferentes larguras de tela.
                  <br/><br/>
Essa experiência me permitiu aprimorar minhas habilidades de design e explorar soluções criativas para desafios específicos. Ao adicionar esse projeto ao meu portfólio, busco demonstrar minha dedicação e vontade de aprender novas técnicas.
          </p>
        </section>
        <ImageModal
          show={modalShow}
          imgtozoom={imgToZoom}
          onHide={() => setModalShow(false)}
        />
      </ProjectStyle>
    </>
  );
}

export default Pinterest;
