import React from 'react'
import { CertificadosStyle } from './style'
import Title from "../../../components/structure/Title/Title";

import origamid from "../../../assets/images/cursos/origamid.png"
import treinaweb from "../../../assets/images/cursos/treinaweb.png"
function Certificados() {
  return (
    <CertificadosStyle>
      <section className='container'>
        <Title className="block">
          <h4 className="comfortaa">Certificados</h4>
        </Title>
        <div className='certificados'>
          <div className='left'>
            <img src={origamid} alt="certificado origamid"></img>
          </div>
          <div className='right'>
            <img src={treinaweb} alt="certificado treinaweb"></img>
          </div>
        </div>
      </section>

    </CertificadosStyle>
  )
}

export default Certificados