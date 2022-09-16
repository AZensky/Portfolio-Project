import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Typed from 'react-typed';
import { headerBg } from '../assets';

export default function HeroSection({ handleBackClick }) {
  return (
    <Box
      sx={{
        background: `url(${headerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: '100%',
        // height: { xs: 560, md: 840 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        mt:  -12 ,
      }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant='h1'
          sx={{
            letterSpacing: { xs: '0.20em', lg: '0.22em' },

            textTransform: 'uppercase',
          }}>
          Alex
          <Typography variant='h1' component='span' sx={{ color: (theme) => theme.palette.primary.main }}>
            {' '}
            Zelinsky{' '}
          </Typography>
        </Typography>
        <Typography variant='h3' sx={{ color: (theme) => theme.palette.primary.light, my: 2.5 }}>
          {/* Creative{' '} */}
          <Typography component='span' variant='h3' sx={{ color: '#fff' }}>
            <Typed
              strings={['Software Engineer', 'Web Developer', 'Technical Writer']}
              typeSpeed={80}
              backDelay={1100}
              backSpeed={60}
              loop
            />
          </Typography>
        </Typography>

        {
          //<Typography variant="h3" sx={{ color: (theme) => theme.palette.primary.light, my: 2.5 }}>
          //     <Typed
          //         strings={['Software Engineer', 'Web Developer', 'Technical Writer']}
          //         typeSpeed={40}
          //         backDelay={1100}
          //         backSpeed={30}
          //         loop
          //     />
          // </Typography>
        }
        <Button
          variant='contained'
          sx={{
            fontSize: { xs: 16, md: 18, xl: 20 },
            justifySelf: 'center',
            mt: { md: 1, lg: 2 },
            background: (theme) => theme.palette.primary.main,
          }}
          onClick={() => handleBackClick('contact')}>
          Get In Touch
        </Button>
      </Box>
    </Box>
  );
}
