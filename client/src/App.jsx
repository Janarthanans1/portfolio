import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <header className="w-full h-screen">
        <Navbar />
        <Home />
      </header>
      <section className="w-full h-screen bg-red-500">
        <About />
      </section>
      <section className="w-full h-screen bg-violet-500">
        <Services />
      </section>
      <section className="w-full h-screen bg-pink-500">
        <Skills />
      </section>
      <section className="w-full h-screen bg-yellow-500">
        <Projects />
      </section>
      <footer className="w-full h-screen bg-orange-500">
        <Contact />
      </footer>
    </>
  );
};

export default App;
