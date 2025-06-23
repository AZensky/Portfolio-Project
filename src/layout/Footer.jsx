import { Box, Typography } from "@mui/material";
import React from "react";
import {
  facebook,
  github,
  instagram,
  linkedIn,
  medium,
  twitter,
  AngelList,
} from "../assets";
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
        {/* open link in new tab */}
        <a
          style={{ display: "flex", alignItems: "center" }}
          href="https://github.com/AZensky"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MuiIconButton title={github} />
        </a>

        <a
          style={{ display: "flex", alignItems: "center" }}
          href="https://www.linkedin.com/in/alex-zelinsky/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MuiIconButton title={linkedIn} />
        </a>

        <a
          style={{ display: "flex", alignItems: "center" }}
          href="https://medium.com/@alexzelinsky124"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MuiIconButton title={medium} />
        </a>

        <a
          style={{ display: "flex", alignItems: "center" }}
          href="https://angel.co/u/alex-zelinsky-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MuiIconButton title={AngelList} sx={{ width: 55 }} />
        </a>
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
        Copyright © 2025 Alex Zelinsky | All Rights Reserved
      </Typography>
    </Box>
  );
}
