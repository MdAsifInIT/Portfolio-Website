import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialBar from "./components/SocialBar";
import Projects from "./components/Projects";
import OpenSource from "./components/OpenSource";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import FloatingContactButton from "./components/FloatingContactButton";

const Home = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero onContactClick={() => setIsContactModalOpen(true)} />
      <SocialBar />
      <Projects />
      <OpenSource />
      <About />
      <Footer />
      <FloatingContactButton onClick={() => setIsContactModalOpen(true)} />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
