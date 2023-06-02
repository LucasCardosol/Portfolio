import React from "react";
import { JornadaStyle } from "./style.js";
import Title from "../../../components/structure/Title/Title";

import chess from "../../../assets/images/projects/chess.png";
import bikcraft from "../../../assets/images/projects/bikcraft.png";
import mesha from "../../../assets/images/projects/mesha.png";
import bocaboca from "../../../assets/images/projects/bocabocaold.png";

function Jornada() {
  return (
    <JornadaStyle>
      <section className="container sec2021">
        <h4 className="year">• 2021</h4>

        <div className="projectAndText">
          <Title className="blockResponsivo">
            <h4 className="comfortaa blue">Xadrez</h4>
          </Title>
          <div className="project">
            <img src={chess} alt="projeto de xadrez"></img>
          </div>
          <div className="divText">
            <Title className="blockDesktop">
              <h4 className="moonLight blue">Xadrez</h4>
            </Title>
            <p className="comfortaa">
              No meu projeto de xadrez, enfrentei o desafio de criar um jogo
              completo do zero, sem recorrer a recursos prontos da internet. Foi
              uma jornada empolgante e desafiadora, pois tive que pensar
              cuidadosamente em cada detalhe, desde o modelo das peças até as
              complexas lógicas de movimentação, verificação de xeque, roque e
              xeque-mate. Fico orgulhoso de ter desenvolvido tudo de forma
              autônoma, sem consultar fontes externas. Este projeto me
              proporcionou um grande crescimento, além de uma sensação de
              satisfação por ter construído algo tão complexo apenas com a minha
              própria criatividade e conhecimento.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="projectAndText reverse">
          <div className="divText ">
            <Title className="blockDesktop">
              <h4 className="comfortaa blue">Bikcraft</h4>
            </Title>
            <p className="comfortaa">
              Este projeto de um site de bicicletas foi desenvolvido durante o
              curso Origamid, onde aprendi sobre HTML semântico, CSS responsivo
              e UI design. Com um formulário funcional em PHP e uma animação em
              JavaScript, o projeto representa minha evolução no desenvolvimento
              web. Agradeço ao curso e ao professor pela orientação e
              conhecimentos adquiridos nessa jornada de aprendizado.
            </p>
          </div>
          <div className="project">
            <Title className="blockResponsivo">
              <h4 className="comfortaa blue">Bikcraft</h4>
            </Title>
            <img src={bikcraft} alt="projeto de loja de bicicletas bikcraft"></img>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="projectAndText">
          <div className="project">
            <Title className="blockResponsivo">
              <h4 className="comfortaa blue">Mesha Technology</h4>
            </Title>
            <img src={mesha} alt="projeto mesha technologie"></img>
          </div>
          <div className="divText">
            <Title className="blockDesktop">
              <h4 className="comfortaa blue">Mesha Technology</h4>
            </Title>
            <p className="comfortaa">
              Esse projeto é realmente especial para mim, pois representou um
              desafio significativo durante o processo seletivo da startup Mesha
              Technology. Durante três dias intensos, dediquei todo o meu
              esforço e paixão para desenvolver um sistema utilizando Next.js,
              TypeScript e React, além de uma API pública. A proposta do
              aplicativo era simples: inserir o nome de uma cidade e obter a
              temperatura atual. Com base nessa temperatura, o sistema deveria
              sugerir uma playlist de músicas adequada ao clima. Embora o uso do
              Redux fosse recomendado para gerenciar os dados, optei por
              implementar tudo em uma única página. Foi uma experiência
              desafiadora, mas gratificante, que me permitiu aprimorar minhas
              habilidades técnicas e mostrar meu potencial criativo.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <h4 className="year">• 2022</h4>
        <div className="projectAndText ">
          <div className="project">
            <Title className="blockResponsivo">
              <h4 className="comfortaa blue">Boca Boca</h4>
            </Title>
            <img src={bocaboca} alt="projeto boca boca"></img>
          </div>
          <div className="divText">
            <Title className="blockDesktop">
              <h4 className="comfortaa blue">Boca Boca</h4>
            </Title>
            <p className="comfortaa">
              No meu trabalho atual na empresa Boca Boca, estou envolvido em um projeto emocionante, 
              onde tenho a responsabilidade de trazer um novo visual e tornar o sistema mais responsivo. 
              É uma experiência desafiadora, pois estou lidando com o código existente e buscando 
              entender cada detalhe para implementar as mudanças necessárias. Durante o processo, encontrei 
              situações em que precisei ajustar a forma como as funções são chamadas dentro dos componentes, 
              visando uma melhor organização e clareza no código. Essa oportunidade tem sido uma verdadeira 
              escola, me ajudando a aprimorar minhas habilidades e a crescer profissionalmente. 
              Estou empolgado em contribuir para o sucesso do projeto da Boca Boca.
            </p>
          </div>
        </div>
      </section>
    </JornadaStyle>
  );
}

export default Jornada;
