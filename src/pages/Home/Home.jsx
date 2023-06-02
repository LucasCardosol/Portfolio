import React from 'react'

import { HomeStyle } from './style'
import { GlobalStyle } from './globalStyle'
import person from '../../assets/images/lukas-godina-wNB3DFN3u9Q-unsplash.png'
import linkedin from '../../assets/images/linkedin.svg'
import github from '../../assets/images/github.svg'
import Title from "../../components/structure/Title/Title"
import whatsapp from "../../assets/icons/whatsapp-svgrepo-com.svg"
import cv from "../../assets/icons/cv.png"
import { Link } from 'react-router-dom'
import curriculo from "../../assets/Curriculo.pdf"

function Home() {
  

  return (
    <>
    <GlobalStyle/>
    <HomeStyle>
      <section className='container' >
        <div className='divText'>
          <Title className="titleDisplay">
            <h1 className='comfortaa blue'>Front-end<br></br>Developer</h1>
          </Title>
          
          <h4 className='comfortaa'>Lucas Cardoso</h4>
          <div className='logos'>
            <a href='https://www.linkedin.com/in/lucas-cardoso-095356189/'>
              <img src={linkedin} alt='linkedin'></img>
            </a>
            <a href='https://github.com/LucasCardosol'>
              <img src={github} alt='github'></img>
            </a>
            <a href="tel:+5561998660209" >
              <img src={whatsapp} alt='whatsapp'></img>
            </a>
            <a href={curriculo}  target="_blank">
              <img className="cv" src={cv} alt='curriculo'></img>
            </a>
          </div>
          <div>
            <button className='normal-button blockDesktop'>
              <Link to="/projects/bocaboca">
                <h4>PROJETOS</h4>
              </Link>
            </button>
          </div>
        </div>
        <div className='divImage'>
          <img src={person}></img>
        </div>
      </section>
      
    </HomeStyle>
    </>
  )
}

export default Home 