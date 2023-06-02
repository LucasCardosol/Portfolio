import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { ImageModal } from "../../../components/structure/ImageModal/ImageModal";
import { ProjectStyle , GlobalStyle} from "../style";
import Title from "../../../components/structure/Title/Title";

import ecommerce from "../../../assets/images/site.png";
import cartecommerce from "../../../assets/images/projects/cartecommerce.png";
import ecommerce2 from "../../../assets/images/projects/ecommerce.png";
import ecommerceProduct from "../../../assets/images/projects/ecommerceProduct.png";

function Ecommerce() {

  const [modalShow, setModalShow] = useState(false);
  const [imgToZoom, setImgToZoom] = useState("");

  return (
    <>
    <GlobalStyle/>
    <ProjectStyle>
      <section className="container">
        <div className="project">
          <Title className="blockResponsivo">
            <h4 className="moonLight blue">E-commerce</h4>
          </Title>
          <Carousel>
              <Carousel.Item>
                <button 
                  onClick={() => {
                    setImgToZoom(ecommerce2);
                    setModalShow(true);
                  }}
                >
                  <img src={ecommerce2} alt="home do projeto de ecommerce"></img>
                </button>
              </Carousel.Item>

              <Carousel.Item>
                <button onClick={() => {
                    setImgToZoom(cartecommerce );
                    setModalShow(true);
                  }}>
                  <img src={cartecommerce } alt="carrinho do projeto ecommerce"></img>
                </button>
              </Carousel.Item>

              <Carousel.Item>
                <button onClick={() => {
                    setImgToZoom(ecommerceProduct);
                    setModalShow(true);
                  }}>
                  <img src={ecommerceProduct} alt="pagina de produto projeto ecommerce"></img>
                </button>
              </Carousel.Item>

            </Carousel>
        </div>
        <div className="divText">
          <Title className="blockDesktop">
            <h4 className="moonLight blue">E-commerce</h4>
          </Title>
          <p className="comfortaa">
            Este projeto foi uma experiência incrível que me proporcionou uma visão mais abrangente do desenvolvimento fullstack. 
            Embora meu interesse principal esteja no front-end, aprender sobre o back-end foi fundamental para ampliar minha 
            compreensão geral do processo. Esse projeto em particular é resultado de um curso que fiz na Udemy, onde tive a oportunidade 
            de aprender e aplicar uma série de tecnologias e conceitos.
          </p>
          <div className="buttons">
            <button className="normal-button"><a href="https://github.com/LucasCardosol/Proshop" target="_blank"><h4>CÓDIGO</h4></a></button>
           
          </div>
        </div>
      </section>
      <section className="container uniqueImage">
      <p className="comfortaa">
      Durante o curso, explorei o uso do Redux para gerenciar o estado da aplicação, implementei um sistema de login com autenticação JWT para garantir a segurança, além de aprender sobre a manipulação de APIs e a interação com bancos de dados. Embora o projeto ainda não esteja completamente finalizado, o conhecimento adquirido até o ponto em que avancei foi bastante significativo. Pude utilizar e aplicar essas novas habilidades em outros projetos, o que ampliou ainda mais meu entendimento e minha capacidade de criação.
                  <br/><br/>
Essa experiência me mostrou a importância de ter uma compreensão sólida de todos os aspectos envolvidos no desenvolvimento fullstack. Aprender a trabalhar com o back-end me ajudou a evitar ficar perdido em relação ao funcionamento geral de um projeto. Além disso, percebi que essa experiência me deu uma base sólida para continuar aprimorando minhas habilidades tanto no front-end quanto no back-end.
        
        </p>            
      </section>
      <ImageModal show={modalShow} imgtozoom={imgToZoom} onHide={() => setModalShow(false)} />
    </ProjectStyle>
    </>
  );
}

export default Ecommerce;
