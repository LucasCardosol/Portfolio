import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { ProjectStyle, GlobalStyle } from "../style";
import Title from "../../../components/structure/Title/Title";
import { ImageModal } from "../../../components/structure/ImageModal/ImageModal";
import blog from "../../../assets/images/blog.png";
import blogLogin from "../../../assets/images/projects/blogLogin.png";
import blogText from "../../../assets/images/projects/blogText.png";
import blogTags from "../../../assets/images/projects/blogTags.png";
import blogHome from "../../../assets/images/projects/blogHome.png";

function Blog() {
  const [modalShow, setModalShow] = useState(false);
  const [imgToZoom, setImgToZoom] = useState("");

  return (
    <>
      <GlobalStyle />
      <ProjectStyle>
        <section className="container">
          <div className="project">
            <Title className="blockResponsivo">
              <h4 className="moonLight blue">Blog</h4>
            </Title>
            <Carousel>
              <Carousel.Item>
                <button
                  onClick={() => {
                    setImgToZoom(blogHome);
                    setModalShow(true);
                  }}
                >
                  <img src={blogHome} alt="página home do projeto do meu blog"></img>
                </button>
              </Carousel.Item>

              <Carousel.Item>
                <button
                  onClick={() => {
                    setImgToZoom(blogLogin);
                    setModalShow(true);
                  }}
                >
                  <img src={blogLogin} alt="página de login do projeto do meu blog"></img>
                </button>
              </Carousel.Item>

              <Carousel.Item>
                <button
                  onClick={() => {
                    setImgToZoom(blogTags);
                    setModalShow(true);
                  }}
                >
                  <img src={blogTags} alt="componente de tags do projeto do meu blog"></img>
                </button>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="divText">
            <Title className="blockDesktop">
              <h4 className="moonLight blue">Blog</h4>
            </Title>
            <p className="comfortaa">
            Com os conhecimentos do curso de criação de e-commerce , decidi aplicar tudo que aprendi em um projeto pessoal incrível. Desenvolvi um aplicativo único que me permite criar textos com adição de imagens e trechos de código em várias linguagens. É como ter um diário super prático e minimalista que também me ajuda nos estudos. A tela inicial apresenta um design intuitivo e fácil de usar, permitindo que eu crie e organize meus textos de forma eficiente.




            </p>
            <div className="buttons">
              <button className="normal-button">
                <a href='https://github.com/LucasCardosol/myBlog' target="_blank">
                  <h4>CÓDIGO</h4>
                </a>
              </button>
              
            </div>
          </div>
        </section>
        <section className="container uniqueImage" style={{flexDirection:"column", gap:"0"}}>
          <div className="centeredImage">
            <img src={blogText}></img>
          </div>
          <p  className="comfortaa">
          Esse projeto foi concebido como uma plataforma em constante evolução, sem limites definidos. 
          Embora eu tenha planejado adicionar uma gama de funcionalidades avançadas, como um sistema de 
          login seguro e autenticação, sistema de pastas e visita de perfil, optei por focar na implementação 
          de um sistema de login simples para agilizar o desenvolvimento.
          O objetivo principal era apresentar 
          as funcionalidades básicas e o potencial do aplicativo.
          <br/><br/>
          Em relação ao design, minha prioridade foi a 
          eficiência e o tempo de desenvolvimento. Para evitar a perda de tempo com a criação de um design 
          personalizado, utilizei um template pronto da internet. É importante mencionar que, por questões de 
          direitos autorais, optei por não hospedar o projeto publicamente.
          <br/><br/>
          Durante o desenvolvimento desse projeto, 
          aprimorei meus conhecimentos em Django, focando nas funcionalidades essenciais para garantir o bom 
          funcionamento do aplicativo. Embora não tenha implementado recursos avançados, como segurança, 
          autenticação de usuários e gerenciamento de sessões, concentrei-me em outros aspectos importantes, 
          como a criação de textos com imagens e trechos de código. Dessa forma, pude explorar e aprofundar meu 
          entendimento nessas áreas específicas.     
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

export default Blog;
