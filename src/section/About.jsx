import { Box, Button, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import { aboutVector, alex } from "../assets";

export default function About() {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.primary.dark,
        py: 16,
        zIndex: 9,
        position: "relative",
        px: { md: 2 },
      }}
    >
      <Container maxWidth="xl" sx={{ px: "48px !important" }}>
        <Box
          sx={{
            background: `url(${aboutVector})`,
            backgroundRepeat: "no-repeat",
            display: "grid",
            gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)" },
            gap: { xs: 8, md: 5 },
          }}
        >
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="h2"
              sx={{
                letterSpacing: { xs: "0.20em", lg: "0.22em" },

                textTransform: "uppercase",
              }}
            >
              Alex
              <Typography
                variant="h2"
                component="span"
                sx={{ color: (theme) => theme.palette.primary.main }}
              >
                {" "}
                Zelinsky{" "}
              </Typography>
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: (theme) => theme.palette.primary.light, my: 1.1 }}
            >
              Creative{" "}
              <Typography component="span" variant="h4" sx={{ color: "#fff" }}>
                {/* <Typed
                  strings={["Engineer", "Developer", "Writer"]}
                  typeSpeed={80}
                  backDelay={1100}
                  backSpeed={60}
                  loop
                /> */}
                Developer
              </Typography>
            </Typography>

            <Divider
              sx={{
                height: "1px",
                width: "19%",
                background: (theme) => theme.palette.primary.main,
              }}
            />

            <Typography variant="h5" sx={{ mt: { xs: 3, md: 4 } }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra.{" "}
            </Typography>

            <Typography variant="h5" sx={{ mt: 1.5 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim
            </Typography>
            <Link
              to="/resume.pdf"
              target="_blank"
              download
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{
                  fontSize: { xs: 16, md: 18, xl: 20 },
                  justifySelf: "center",
                  mt: { xs: 5, md: 6, lg: 8 },
                  background: (theme) => theme.palette.primary.main,
                }}
              >
                Resume
              </Button>
            </Link>
          </Box>

          <Box sx={{ maxWidth: 620, width: "100%", justifySelf: "center" }}>
            <Box component="img" src={alex} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
