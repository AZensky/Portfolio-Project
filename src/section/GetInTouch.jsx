import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { getInTouch } from "../assets";
import GetInTouchForm from "../components/GetInTouchForm";

export default function GetInTouch() {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.primary.dark,
        pt: 16,
        zIndex: 9,
        position: "relative",
        px: { md: 2 },
        pb: 6.5,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Box
          sx={{
            background: `url(${getInTouch})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 0",
            mb: 5,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textTransform: "capitalize",
            }}
          >
            Let’s{" "}
            <Typography
              variant="h4"
              component="span"
              sx={{ color: (theme) => theme.palette.primary.main }}
            >
              Talk
            </Typography>
          </Typography>

          <Divider
            sx={{
              height: 2,
              background: "#fff",
              width: 105,
              mx: "auto",
              mt: 1,
            }}
          />

          <Typography variant="h6" sx={{ mt: 4, mb: 8 }}>
            I'm always open to learn more and collaborate <br /> on projects.
            Don't hesitate to reach out!
          </Typography>
          <GetInTouchForm />
        </Box>
      </Container>
    </Box>
  );
}
