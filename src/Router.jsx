import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/structure/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Bocaboca from "./pages/Projects/BocaBoca/Bocaboca.jsx";
import NavBar from "./components/structure/NavBar/NavBar.jsx";
import Pinterest from "./pages/Projects/Pinterest/Pinterest.jsx";
import Resumo from "./pages/Sobre/Resumo/Resumo.jsx";
import AboutNavBar from "./components/structure/AboutNavBar/AboutNavBar.jsx";
import Certificados from "./pages/Sobre/Certificados/Certificados.jsx";

import Jornada from "./pages/Sobre/Jornada/Jornada.jsx";
import Ecommerce from "./pages/Projects/Ecommerce/Ecommerce.jsx";
import Blog from "./pages/Projects/Blog/Blog.jsx";
import ScrollToTop from "./components/functionalitys/scrollToTop.jsx";

const Router = () => {
  
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/sobre">
          <Route path="resumo" element={<Resumo />}/>
          <Route path="certificados" element={<Certificados />}/>
          <Route path="jornada" element={<Jornada />}/>
          
        </Route>
        <Route path="/projects">
          <Route path="bocaboca" element={<Bocaboca />} />
          <Route path="pinterest" element={<Pinterest />} />
          <Route path="ecommerce" element={<Ecommerce />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
      <NavBar/>
      <AboutNavBar/>
    </BrowserRouter>
  );
};

export default Router;
