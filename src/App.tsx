import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
// import ContactPopup from "./pages/ContactPopup";
import Testimony from "./pages/Testimony";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="testimony" element={<Testimony />} />
          {/* <Route path="contact" element={<ContactPopup />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
