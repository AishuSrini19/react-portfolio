import React from "react";
import { Box, Typography } from "@mui/material";
import profilePic from "../assets/work.jpg"; // 👈 update path to your photo

const About: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
      }}
    >
      {/* LEFT PANEL - Black background with image */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#111",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Box
          sx={{
            width: 350,
            height: 350,
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0px 8px 25px rgba(0,0,0,0.4)",
            border: "6px solid #ef3e36",
          }}
        >
          <img
            src={profilePic}
            alt="Aishwarya Srinivasan"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>
      </Box>

      {/* RIGHT PANEL - Grey background with text */}
      <Box
        sx={{
          flex: 1.2,
          backgroundColor: "#222",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "4rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            marginBottom: "1.5rem",
            color: "#ef3e36",
            letterSpacing: "1px",
          }}
        >
          Who I Am?
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#ccc",
            lineHeight: 1.8,
            fontSize: "1.1rem",
            maxWidth: "90%",
          }}
        >
          I’m <b>Aishwarya Srinivasan</b>, a passionate Frontend Developer who loves
          building elegant, user-focused web applications. I enjoy blending
          creativity with clean code to craft interfaces that are both beautiful
          and functional.
          <br />
          <br />
          With a strong foundation in modern JavaScript frameworks and
          responsive design, I focus on building scalable, maintainable, and
          performance-optimized solutions. My goal is to create seamless
          experiences that connect design and technology.
          <br />
          <br />
          Outside of work, I love learning emerging technologies, exploring
          design trends, and mentoring new developers.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
