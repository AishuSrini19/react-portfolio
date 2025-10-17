import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import reactimg from '../assets/react.jpg';
import reduximg from '../assets/Redux.png';
import reduxSaga from '../assets/redux-saga.png';  
import nodeimg from '../assets/node.png';  
import javascriptimg from '../assets/javascript.png';
import htmlimg from '../assets/html.png';
import cssimg from '../assets/css.png';
import typescriptimg from '../assets/typescript.png'; 
import gitimg from '../assets/git.png';
import figmaimg from '../assets/figma.jpg';
import azureimg from '../assets/Azure-DevOps-Logo.png';
import vscodeimg from '../assets/Visual_Studio_Code_icon.png';
import confluenceimg from '../assets/Confluence-Emblem.png';
import googlecloud from '../assets/googlecloud.png';
import jiraimg from '../assets/Atlassian-Jira-Logo-Vector.png';
import dockerimg from '../assets/docker.png';
import canvaimg from '../assets/canva.jpg';
import androidstudioimg from '../assets/Android_Studio_Logo_2024.png';  
const skills = [
  { name: "React", img: reactimg },
  { name: "Redux", img: reduximg },
  { name: "Redux-Saga", img: reduxSaga },
  { name: "JavaScript", img: javascriptimg },
  { name: "HTML5", img: htmlimg },
  { name: "CSS3", img: cssimg },
  { name: "TypeScript", img: typescriptimg },
  { name: "Node.js", img: nodeimg },
  { name: "Git / GitHub", img: gitimg },
  { name: "Figma", img: figmaimg },
  { name: "Azure DevOps", img: azureimg },
  { name: "Visual Studio", img: vscodeimg },
  { name: "Confluence", img: confluenceimg },
  { name: "Google Cloud", img: googlecloud },
  { name: "JIRA", img: jiraimg },
  { name: "Docker", img: dockerimg },
  { name: "Canva", img: canvaimg },
  { name: "Android Studio", img: androidstudioimg },
];

const Skills: React.FC = () => {
  const skillsRow1 = skills.slice(0, 9);
  const skillsRow2 = skills.slice(9, 18);

  const renderRow = (row: typeof skills, direction: "left" | "right") => (
    <Box
      sx={{
        display: "flex",
        gap: "1.5rem",
        width: "fit-content",
        animation: `${direction === "left" ? "scrollLeft" : "scrollRight"} 25s linear infinite`,
        "&:hover": { animationPlayState: "paused" },
      }}
    >
      {/* repeat 3x for seamless loop */}
      {[...row, ...row, ...row].map((skill, i) => (
        <Card
          key={`${skill.name}-${i}`}
          sx={{
            minWidth: 150,
            height: 150,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1c1c1c",
            borderRadius: "16px",
            border: "2px solid #ef3e36",
            boxShadow: "0 0 15px rgba(239,62,54,0.6)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.08)",
              boxShadow: "0 0 30px rgba(239,62,54,0.9)",
            },
          }}
        >
          <img
            src={skill.img}
            alt={skill.name}
            style={{
              width: 60,
              height: 60,
              marginBottom: "1rem",
              objectFit: "contain",
            }}
          />
          <CardContent sx={{ p: 0 }}>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                color: "#fff",
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}
            >
              {skill.name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#111",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        padding: "2rem 0",
        "@keyframes scrollLeft": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "@keyframes scrollRight": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 8,
          fontWeight: 700,
          color: "#ef3e36",
          letterSpacing: "1px",
        }}
      >
       Building Blocks of My Code
      </Typography>

      {/* Row 1 → moves left */}
      <Box
        sx={{
          overflow: "hidden",
          width: "90%",
          margin: "0 auto",
          mb: "2rem",
        }}
      >
        {renderRow(skillsRow1, "left")}
      </Box>

      {/* Row 2 → moves right */}
      <Box
        sx={{
          overflow: "hidden",
          width: "90%",
          margin: "0 auto",
        }}
      >
        {renderRow(skillsRow2, "right")}
      </Box>
    </Box>
  );
};

export default Skills;
