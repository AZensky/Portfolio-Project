import { Box } from '@mui/material';
import { IconButton } from '@mui/material';
import React from 'react';

export default function MuiIconButton({ title, sx }) {
  return (
    <IconButton sx={{ ...sx }}>
      <Box component='img' src={title} />
    </IconButton>
  );
}
