import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import { appLogo } from '../assets';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  return (
    <RouterLink to='/'>
      <Box
        component='img'
        src={appLogo}
        sx={{
          width: {
            xs: 70,
            xl: 85,
          },
          height: {
            xs: 70,
            xl: 85,
          },
          my: {
            xs: 1,
            xl: 0.8,
          },
          borderRadius: 2,
          boxShadow: 2,
          mx: 'auto',
          ...sx,
        }}
      />
    </RouterLink>
  );
}
