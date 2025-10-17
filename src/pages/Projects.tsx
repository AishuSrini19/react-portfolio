import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const projects = [
  {
    title: "Virtual Avatar",
    image: "/src/assets/avatar.jpg",
    description:
      "Built an interactive virtual avatar using Google Cloud Vertex AI, React, and Three.js, with Rhubarb for lip-sync and Node.js for voice detection and real-time AI-driven interactions.",
  },
  {
    title: "Nurse Assistant",
    image: "/src/assets/nurse.jpg",
    description:
      "Developed an AI-powered Nurse Assistant using GCP to summarize patient history, set medicine reminders, and analyze X-rays, improving shift handovers and patient care efficiency.",
  },
  {
    title: "Code Generation Portal",
    image: "/src/assets/code-generation.jpg",
    description:"Built an automated Code Generation Portal using React, Redux, and Node.js that generates project artifacts, code, and test scripts, and deploys applications to GCP with seamless JIRA integration.",
  },
  {
    title: "Delta Airlines",
    image: "/src/assets/delta.jpg",
    description:
      "Designed, developed, and maintained Delta Airlines’ Lobby and Gate Agent Modules, handling end-to-end feature implementation and system enhancements. Delivered Change Requests (CRs) based on functional requirements to improve passenger processing, check-in efficiency, and gate operations.",
  },
  {
    title: "Microsoft BOHS Logistics Portal",
    image: "/src/assets/logistics.jpg",
    description:
      "Developed a Logistics Management Portal for Microsoft’s backend operations using React, Redux, and Saga to efficiently track packages, shipments, and inventory. The system streamlines logistics workflows, provides real-time tracking updates, and enhances operational visibility across teams.",
  },
  {
    title: "AI-Powered Interactive Learning and Streaming Platform",
    image: "/src/assets/learning.jpg",
    description:
      "Developed an AI-powered online learning and streaming platform with agentic agents that interact with students to provide subject-specific guidance through real-time Q&A. After each session, the system auto-generates a 1-minute summary video and delivers a quiz-based score to reinforce learning and engagement.",
  },
  {
    title:"AI-Powered Virtual Care Companion for Alzheimer’s Patients",
    image:"/src/assets/elder.jpg",
    description:"Developed an AI Care Companion for Alzheimer’s patients, providing empathetic interaction and daily assistance by reminding medications, encouraging exercises, and engaging in conversations about family and personal memories to offer companionship and cognitive support.",
  }
];

const Projects: React.FC = () => {
  return (
  <Box
  sx={{
    width: "100vw",
    height: "96vh", // fills entire viewport
    backgroundColor: "#111",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "6rem 2rem 4rem 2rem",
    marginTop: "70px", // leave room for navbar
    overflowY: "auto", // 🟢 enables vertical scrolling only here
    overflowX: "hidden",
    boxSizing: "border-box",
  }}
>
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          mb: 3,
          fontWeight: 700,
          color: "#ef3e36",
          letterSpacing: "1px",
          textAlign: "center",
        }}
      >
        My Journey in Code
      </Typography>

      {/* 🔹 Grid Layout (Exactly 3 per row) */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 👈 always 3 columns
          gap: "2rem",
          width: "90%",
          maxWidth: "1200px",
        }}
      >
        {projects.map((proj, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "#1c1c1c",
              borderRadius: "16px",
              border: "2px solid #ef3e36",
              color: "#fff",
              boxShadow: "0 0 15px rgba(239,62,54,0.4)",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 0 25px rgba(239,62,54,0.8)",
              },
            }}
          >
            {/* Project Image Header */}
            <CardMedia
              component="img"
              height="100"
              image={proj.image}
              alt={proj.title}
              sx={{
                borderBottom: "2px solid #ef3e36",
                objectFit: "cover",
              }}
            />

            {/* Description */}
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#ef3e36",
                  fontWeight: 700,
                  mb: 1,
                  textAlign: "center",
                }}
              >
                {proj.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#ccc",
                  textAlign: "justify",
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                }}
              >
                {proj.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
