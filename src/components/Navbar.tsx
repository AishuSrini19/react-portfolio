import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import ContactPopup from "../pages/ContactPopup";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [openContact, setOpenContact] = React.useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Me", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Skills", path: "/skills" },
    { label: "Testimony", path: "/testimony" },
  ];

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "1.5rem 4rem",
          zIndex: 1000,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: location.pathname === item.path ? "#ef3e36" : "#fff",
                  fontSize: "0.95rem",
                  letterSpacing: "0.05em",
                  fontWeight: 600,
                  cursor: "pointer",
                  position: "relative",
                  transition: "color 0.3s ease",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: location.pathname === item.path ? "100%" : 0,
                    height: "2px",
                    left: 0,
                    bottom: "-6px",
                    backgroundColor: "#ef3e36",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": { width: "100%" },
                  "&:hover": { color: "#ef3e36" },
                }}
              >
                {item.label.toUpperCase()}
              </Typography>
            </Link>
          ))}

          {/* 🔴 Removed Link wrapper so it doesn't navigate away */}
          <Button
            variant="contained"
            onClick={() => setOpenContact(true)} // ✅ opens popup
            sx={{
              backgroundColor: "#ef3e36",
              borderRadius: "25px",
              textTransform: "none",
              fontWeight: 600,
              px: "1.5rem",
              py: "0.4rem",
              "&:hover": { backgroundColor: "#ef3e36" },
            }}
          >
            Contact
          </Button>
        </Box>
      </Box>

      {/* 🟢 Contact Popup connected to button */}
      <ContactPopup open={openContact} onClose={() => setOpenContact(false)} />
    </>
  );
};

export default Navbar;
