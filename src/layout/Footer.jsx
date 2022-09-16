import { Box, Typography } from "@mui/material";
import React from "react";
import { facebook, github, instagram, linkedIn, medium, twitter,AngelList } from "../assets";
import MuiIconButton from "../components/IconButton";

export default function Footer() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: { xs: 0, sm: 3 },
        }}
      >
        {/* <MuiIconButton title={facebook} /> */}
        <MuiIconButton title={github} />
        {/* <MuiIconButton title={instagram} /> */}
        <MuiIconButton title={linkedIn} />
        <MuiIconButton title={medium}  />
        <MuiIconButton title={AngelList} sx={{ width:55 }} />
        {/* <MuiIconButton title={twitter} /> */}
      </Box>
      <Typography
        sx={{
          fontSize: 14,
          color: "#6C757D",
          background: "#000",
          py: 1.5,
          textAlign: "center",
          mt: 5.5,
        }}
      >
        Copyright © 2022 Alex Zelinsky | All Rights Reserved
      </Typography>
    </Box>
  );
}
