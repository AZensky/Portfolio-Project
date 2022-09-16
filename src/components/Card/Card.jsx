import { Link } from "@mui/material";
import { Box, Typography } from "@mui/material";
import React from "react";
import RedoRoundedIcon from "@mui/icons-material/RedoRounded";
import { github } from "../../assets";
import { IconButton } from "@mui/material";
import { Tooltip } from "@mui/material";
import { Stack } from "@mui/material";
// import { Ecom } from '../assets';

export default function Card({ card }) {
  return (
    <Box
      sx={{
        background: `url(${card.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        width: { xs: "100%", sm: 400 },
        filter: "blur(0px)",
        imageRednering: "pixalted",
        height: 400,
        mx: "auto",
        borderRadius: "20px",
        "&:hover": {
          "& div": {
            display: "flex",
          },
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: 400 },
          mx: "auto",
          background: "#252424ab",
          borderRadius: 2.8,
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: "none",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          "& a": {
            background: (theme) => theme.palette.primary.main,
            p: 2,
            // py: 0,
            borderRadius: "50%",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
            textDecoration: "none",
            width: 60,
            height: 60,
            "&:hover": {
              background: (theme) => theme.palette.primary.main,
            },
          },
        }}
      >
        <Tooltip title="Live Link">
          <IconButton
            component={Link}
            href={card.liveLink}
            target="_blank"
            sx={{
              transform: "rotate(-50deg)",
              "& svg": {
                fill: "#fff",
              },
            }}
          >
            <RedoRoundedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Github">
          <IconButton
            component={Link}
            target="_blank"
            href={card.githubLink}
            sx={{ py: 0 }}
          >
            <Box component="img" src={github} />
          </IconButton>
        </Tooltip>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          p: 3,
          background:
            "linear-gradient(1deg, rgb(0 0 0 / 84%) 0%, rgb(4 4 23 / 43%) 35%, rgb(14 22 23 / 3%) 99%)",
          display: "flex",
          justifyContent: "start",
          alignItems: "end",
        }}
      >
        <Stack
          direction="column"
          spacing={1}
          justifyContent="start"
          alignItems="start"
        >
          <Typography variant="h4" sx={{ width: 255, fontWeight: "normal" }}>
            {card.title}
          </Typography>
          <Typography variant="subtitle2" color="grey">
            {card.techStack}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
