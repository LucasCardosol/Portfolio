import React from "react";
import Accordion from "react-bootstrap/Accordion";

import { ResumoStyle } from "./style";

import python from "../../../assets/icons/tools/python.png";
import javascript from "../../../assets/icons/tools/javascript.png";
import html from "../../../assets/icons/tools/html.png";
import css from "../../../assets/icons/tools/css-3.png";
import react from "../../../assets/icons/tools/react.png";
import redux from "../../../assets/icons/tools/redux.png";
import django from "../../../assets/icons/tools/django.png";
import git from "../../../assets/icons/tools/git.png";
import TypeScript from "../../../assets/icons/tools/typescript.png";
import gitHub from "../../../assets/icons/tools/gitHub.png";
import treinaweb from "../../../assets/images/cursos/treinaweb.png";
import origamid from "../../../assets/images/cursos/origamid.png";
import Title from "../../../components/structure/Title/Title";

function Resumo() {
  return (
    <ResumoStyle>
      <div
        className="container ToolsAndPresentation"
        style={{ display: "flex"}}
      >
        <section className="tools">
          <Title className="block">
            <h4 className="comfortaa blue">Ferramentas</h4>
          </Title>

          <ul className="frameTools">
            <li className="tool">
              <img src={html}  className="icon" alt="html tool icon"></img>
              <p>Html</p>
            </li>
            <li className="tool">
              <img src={css}  className="icon" alt="css tool icon"></img>
              <p>Css</p>
            </li>
            <li className="tool">
              <img src={javascript}  className="icon" alt="javascript tool icon"></img>
              <p>Javascript</p>
            </li>
            <li className="tool">
              <img src={react}  className="icon" alt="React tool icon"></img>
              <p>React</p>
            </li>
            <li className="tool">
              <img src={redux} className="icon" alt="Redux tool icon"></img>
              <p>Redux</p>
            </li>
            <li className="tool">
              <img src={TypeScript} className="icon" alt="Typescript tool icon"></img>
              <p>Typescript</p>
            </li>
            <li className="tool">
              <img src={python} className="icon" alt="python tool icon"></img>
              <p>Python</p>
            </li>
            <li className="tool">
              <img src={django} className="icon" alt="Django tool icon"></img>
              <p>Django</p>
            </li>
            <li className="tool">
              <img src={git} className="icon" alt="Git tool icon"></img>
              <p>Git</p>
            </li>
            <li className="tool">
              <img src={gitHub} className="icon" alt="GitHub tool icon"></img>
              <p>GitHub</p>
            </li>
          </ul>
        </section>
        <section className="presentation">
          <Title className="block">
            <h4 className="comfortaa">Em busca da minha primeira vaga</h4>
          </Title>
          <p className="comfortaa">
            Minha jornada no mundo do desenvolvimento frontend começou em 2021,
            quando dei os primeiros passos no estudo de JavaScript e me encantei
            com a capacidade de criar interfaces interativas e dinâmicas. Desde
            então, tenho me dedicado incansavelmente ao aprimoramento das minhas
            habilidades e ao aprendizado de novas tecnologias que impulsionam o
            universo do frontend.
            <br/><br/>
             Estou ansioso para fazer parte de uma equipe
            apaixonada pelo desenvolvimento frontend, onde possamos compartilhar
            conhecimentos, superar desafios e criar soluções que impactem
            positivamente a vida das pessoas.
          </p>
        </section>
        
      </div>
      <section className="container otherText">
        <Title className="block">
          <h4 className="comfortaa">Mais sobre mim</h4>
        </Title>
        <p className="comfortaa">
        
  Minha trajetória na área de TI é marcada por uma busca incessante por conhecimento e a descoberta de diferentes vertentes desse vasto campo. Em 2019, enquanto cursava Física na UNB, percebi que minha paixão estava na construção de soluções tecnológicas e decidi mergulhar de cabeça nesse universo.
<br/><br/>

Iniciei minha jornada estudando programação, e o Python foi minha primeira linguagem. Em 2020, durante o início da pandemia, ainda estava me familiarizando com o mundo da TI. Eu já conseguia desenvolver pequenos sistemas, como um jogo de xadrez e um sistema de login simples, utilizando conceitos básicos de orientação a objetos.
<br/><br/>
Como o Python é amplamente utilizado na área de Data Science, decidi explorar esse campo e adquiri cursos e materiais específicos. No entanto, percebi que minha paixão estava em outro lugar, e acabei ficando estagnado, sem um caminho claro a seguir.
<br/><br/>
Foi então que, em 2021, decidi migrar para a área de Frontend. Amei a experiência e mergulhei em cursos, projetos e aprofundamento dos meus conhecimentos. No entanto, ainda enfrentava o desafio de conhecer pessoas da área e ter uma visão abrangente do caminho a seguir.
<br/><br/>
No início de 2022, acabei desviando meu caminho para a área de testes na empresa LinkData. Embora tenha sido uma experiência valiosa, logo recebi uma proposta para trabalhar em um projeto de Frontend de uma empresa, uma oportunidade de trabalho voluntário como freelancer, mas de forma mais informal. Atualmente, estou engajado nesse projeto, aprimorando minhas habilidades e me conectando com profissionais da área.
<br/><br/>

Minha jornada na área de TI é caracterizada por uma busca constante de conhecimento e a descoberta de novos caminhos. Ao longo do tempo, explorei diferentes vertentes, desde a programação em Python até o desenvolvimento Frontend.
<br/><br/>
Através dessa jornada versátil, adquiri uma base sólida de conhecimentos técnicos, a capacidade de enfrentar desafios e a determinação para aprender continuamente. Estou entusiasmado com as oportunidades futuras na área de TI, buscando contribuir com meu talento, criatividade e paixão pela tecnologia.
<br/><br/>
Se você procura um profissional flexível, apaixonado pela área de TI e disposto a enfrentar novos desafios, estou pronto para fazer parte da sua equipe e agregar valor aos projetos. Vamos construir soluções incríveis juntos!
        </p>
      </section>
    </ResumoStyle>
  );
}

export default Resumo;
