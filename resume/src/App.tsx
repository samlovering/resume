import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from './components/navbar';
import LandingPage from './components/pages/landingpage';
import About from './components/pages/about';
import Skills from './components/pages/skills'; 
import Experience from './components/pages/experience';
import Contact from './components/pages/contact';
import Footer from './components/pages/footer';

//Use 800020 in for color pallete https://m2.material.io/inline-tools/color/ 

function App() {
  return (
  <div>
    <NavBar />
    <LandingPage />
    <About />
    <Skills />
    <Experience />
    <Contact />
    <Footer />   
  </div>
  );
}
export default App;
