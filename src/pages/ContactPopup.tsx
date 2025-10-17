import React from "react";
import {
  Box,
  Typography,
  Modal,
  IconButton,
  Link,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface ContactPopupProps {
  open: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 350,
            bgcolor: "rgba(17,17,17,0.95)",
            color: "#fff",
            border: "2px solid #ef3e36",
            borderRadius: "16px",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
            backdropFilter: "blur(8px)",
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "#ef3e36",
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#ef3e36",
            }}
          >
            Contact Details
          </Typography>

          <Box sx={{ textAlign: "left", mt: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIcon sx={{ color: "#ef3e36", mr: 1 }} />
              <Typography>+1 (902) 877-1326</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <EmailIcon sx={{ color: "#ef3e36", mr: 1 }} />
              <Typography>aishwarya.loksh@gmail.com</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOnIcon sx={{ color: "#ef3e36", mr: 1 }} />
              <Typography>Halifax, NS, Canada</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <LinkedInIcon sx={{ color: "#ef3e36", mr: 1 }} />
              <Link
                href="https://www.linkedin.com/in/aishwarya-srinivasan23/"
                target="_blank"
                underline="hover"
                sx={{ color: "#fff" }}
              >
                linkedin.com/in/aishwarya-srinivasan23/
              </Link>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ContactPopup;
