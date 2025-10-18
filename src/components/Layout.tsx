import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#111",
        color: "#fff",
      }}
    >
      {/* Fixed Navbar */}
      <Navbar />

      {/* Scrollable content */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",  // ✅ scrolls only the content below navbar
          overflowX: "hidden",
          position: "relative",
          backgroundColor: "#111",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
