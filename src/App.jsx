import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import AboutUs from "./components/AboutUs/AboutUs";
import AboutMe from "./components/AboutMe/AboutMe"

const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <hr className="header__bottom-border"></hr>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
