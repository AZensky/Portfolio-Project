import { Box, Typography } from '@mui/material';
import React from 'react';
import { facebook, github, instagram, linkedIn, twitter } from '../assets';
import MuiIconButton from '../components/IconButton';

export default function Footer() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 0, sm: 3 } }}>
        <MuiIconButton title={facebook} />
        <MuiIconButton title={github} />
        <MuiIconButton title={instagram} />
        <MuiIconButton title={linkedIn} />
        <MuiIconButton title={twitter} />
      </Box>
      <Typography sx={{ fontSize: 14, color: '#6C757D', background: '#000', py: 1.5, textAlign: 'center', mt: 5.5 }}>
        Copyright © 2022 David Parker | All Rights Reserved
      </Typography>
    </Box>
  );
}
