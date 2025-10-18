import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import { Box } from "@mui/material";
// import ContactPopup from "./pages/ContactPopup";
import Testimony from "./pages/Testimony";
const App: React.FC = () => {
  return (
     <Box
      sx={{
        backgroundColor: "#000",
        minHeight: "100vh",
        width: "100%",
        color: "#fff",
         flexGrow: 1,
            overflowY: "auto", // ✅ only content scrolls
            overflowX: "hidden",
      }}
    >
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
    </Box>
  );
};

export default App;
