import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const skills = [
  { name: "React", img: "/src/assets/react.jpg" },
  { name: "Redux", img: "/src/assets/Redux.png" },
  { name: "Redux-Saga", img: "/src/assets/redux-saga.png" },
  { name: "JavaScript", img: "/src/assets/javascript.png" },
  { name: "HTML5", img: "/src/assets/html.png" },
  { name: "CSS3", img: "/src/assets/css.png" },
  { name: "TypeScript", img: "/src/assets/typescript.png" },
  { name: "Node.js", img: "/src/assets/node.png" },
  { name: "Git / GitHub", img: "/src/assets/git.png" },
  { name: "Figma", img: "/src/assets/figma.jpg" },
  { name: "Azure DevOps", img: "/src/assets/Azure-DevOps-Logo.png" },
  { name: "Visual Studio", img: "/src/assets/Visual_Studio_Code_icon.png" },
  { name: "Confluence", img: "/src/assets/Confluence-Emblem.png" },
  { name: "Google Cloud", img: "/src/assets/googlecloud.png" },
  { name: "JIRA", img: "/src/assets/Atlassian-Jira-Logo-Vector.png" },
  { name: "Docker", img: "/src/assets/docker.png" },
  { name: "Canva", img: "/src/assets/canva.jpg" },
  { name: "Android Studio", img: "/src/assets/Android_Studio_Logo_2024.png" },
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
