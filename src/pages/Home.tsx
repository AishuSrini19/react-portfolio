import React from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import { LinkedIn, GitHub, Twitter } from "@mui/icons-material";
import profilePic from "../assets/Crop_face.jpg"; // replace with your image

const Home: React.FC = () => {
    const navItems = ["Home", "About Me", "Projects", "Skills", "Contact"];

  return (
   <Box
  sx={{
    display: "flex",
    height: "100vh",
    width: "100vw",
    fontFamily: "Poppins, sans-serif",
    position: "relative",
     //paddingTop: "6rem", // ✅ add this line
    overflow: "hidden",
    backgroundColor: "#111", // this ensures any leftover space is black
  }}
>
      {/* LEFT PANEL */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#ef3e36",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "3rem 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Dancing Script, cursive",
            alignSelf: "flex-start",
            fontWeight: 600,
          }}
        >
          Aishwarya Srinivasan
        </Typography>

        {/* Social Icons */}
        <Box sx={{ display: "flex", gap: 2, alignSelf: "flex-start", mt: "auto", marginLeft:'20%' }}>
          <IconButton color="inherit" href="https://www.linkedin.com/in/aishwarya-srinivasan23/" target="_blank" rel="noopener">
            <LinkedIn />
          </IconButton>
          <IconButton color="inherit" href="#">
            
            </IconButton>
        </Box>
      </Box>

      {/* RIGHT PANEL */}
      <Box
        sx={{
         flex: 2.2,
    backgroundColor: "#111",
    color: "#fff",
    display: "flex",
    alignItems: "center", // vertically center the content
    justifyContent: "flex-start", // align to left side of the right panel
    position: "relative",
    zIndex: 1,
    paddingX: "6rem", // spacing on sides
          
        }}
      >
           <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "1.5rem 4rem",
            background: "transparent",
            zIndex: 10,
          }}
        >
        
        </Box>
          <Box
    sx={{
      maxWidth: 550,
      marginLeft: "8rem", // pushes the content toward the right side
    }}
  >
        <Typography variant="h6" sx={{ color: "#b3b3b3" }}>
          Web Developer
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 700, marginTop: 1 }}>
          Aishwarya Srinivasan
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#aaa",
            marginTop: 3,
            maxWidth: 500,
            lineHeight: 1.8,
          }}
        >
          I’m a passionate frontend developer who loves building scalable and
          user-friendly applications. I focus on clean code, modern UI design,
          and seamless user experiences across devices.
        </Typography>

        <Box sx={{ display: "flex", gap: 3, marginTop: 5 }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#ef3e36",
              color: "#ef3e36",
              borderRadius: 5,
              px: 3,
              "&:hover": { backgroundColor: "#ef3e36", color: "#fff" },
            }}
             component="a"
  href="/Aishwarya_Resume_Frontend_Dev.pdf" // ✅ path from public folder
  download="Aishwarya_Resume_Frontend_Dev.pdf" // ✅ forces download
          >
            Download CV
          </Button>
         
        </Box>
      </Box>
      </Box>

      {/* CENTERED IMAGE OVERLAP */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          width: 300,
          height: 300,
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
          zIndex: 2,
          backgroundColor: "#fff",
        }}
      >
        <img
          src={profilePic}
          alt="Aishwarya"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
