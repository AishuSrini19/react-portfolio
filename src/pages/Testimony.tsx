import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Typography, Avatar } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  img: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Vijay Kaushik",
    role: "AI/ML Developer",
    comment: "Aishwarya demonstrates excellent proficiency in React and front-end UI development. She played a key role in developing the user interface for our AI applications, delivering high-quality work within deadlines. Her commitment, attention to detail, and willingness to put in extra effort to ensure timely completion are truly admirable",
    img: ""
  },
  {
    name: "Shanmuganathan(Shan) Rajendran",
    role: "Enterprise Tech Architect",
    comment:
      "Aishwarya is a passionate React.js developer who loves turning ideas into seamless, intelligent digital experiences. Her work blends the precision of modern front-end engineering with the innovation of Generative AI — creating solutions that are not only visually engaging but also intuitively smart. With a focus on performance, scalability, and user delight, she aims to build products that truly make technology feel human.",
    img: "/src/assets/testimonials/ross.png",
  },
  {
    name: "SarathKumar Chinnadurai",
    role: "Azure Data Engineer",
    comment:
      "I had the opportunity to work with Aishwarya on a challenging engagement involving backend facility operations. She delivered an excellent integrated solution with great ownership and technical skill. Truly commendable work!",
    img: "/src/assets/testimonials/monica.png",
  },
];

const Testimony: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#black", // 🔴 Fully red background
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "4rem 2rem",
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          mb: 9,
          fontWeight: 800,
          color: "#ef3e36",
          letterSpacing: "1px",
          textAlign: "center",
        }}
      >
        Testimonials
      </Typography>

      {/* Carousel */}
      <Box
        sx={{
          width: "100%",
          mb:8,
          maxWidth: "800px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Carousel
          navButtonsAlwaysVisible
          indicators={false}
          interval={4000} // auto-play every 4s
          animation="slide"
          NextIcon={<ArrowForwardIos />}
          PrevIcon={<ArrowBackIos />}
          navButtonsProps={{
            style: {
              backgroundColor: "#000",
              color: "#ef3e36",
              borderRadius: "50%",
              width: "45px",
              height: "45px",
            },
          }}
          sx={{
            width: "100%",
            maxWidth: "800px",
            borderRadius: "50px",
             boxShadow: "0 0 20px rgba(239,62,54,0.8)",
          }}
        >
          {testimonials.map((t, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                backgroundColor: "#111",
                color: "#fff",
                borderRadius: "40px",
                padding: "3rem 3rem",
                minHeight: "220px",
                position: "relative",
                //boxShadow: "0 0 20px rgba(239,62,54,0.8)",
              }}
            >
              {/* Avatar overlapping bubble */}
              {/* <Avatar
                src={t.img}
                alt={t.name}
                sx={{
                  width: 80,
                  height: 80,
                  position: "absolute",
                  top: "-40px",
                  border: "3px solid #ef3e36",
                  boxShadow: "0 0 20px rgba(239,62,54,0.8)",
                }}
              /> */}

              <Typography
                variant="body1"
                sx={{
                  fontStyle: "italic",
                  color: "#ddd",
                  fontSize: "1.1rem",
                  mb: 3,
                  mt: 5,
                  maxWidth: "500px",
                  lineHeight: 1.7,
                }}
              >
                “{t.comment}”
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#ef3e36",
                }}
              >
                {t.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#aaa",
                  mt: 0.5,
                }}
              >
                {t.role}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Testimony;
