import { Box, Button, Container, Divider, Typography } from '@mui/material';
import React from 'react';
import { portfolio } from '../assets';
import PortfolioTabs from '../components/PortfolioTab/PortfolioTab';
import SliderView from '../components/Slider/Slider';

export default function Portfolio() {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.primary.dark,
        py: 16,
        zIndex: 9,
        position: 'relative',
        px: { md: 2 },
      }}>
      <Container maxWidth={false} sx={{ maxWidth: 1610, textAlign: 'center' }}>
        <Box
          sx={{
            background: `url(${portfolio})`,
            backgroundRepeat: 'no-repeat',
            mb: 5,
            textAlign: 'center',
          }}>
          <Typography
            variant='h4'
            sx={{
              textTransform: 'capitalize',
            }}>
            Creative
            <Typography variant='h4' component='span' sx={{ color: (theme) => theme.palette.primary.main }}>
              {' '}
              Portfolio
            </Typography>
          </Typography>

          <Divider
            sx={{
              height: 2,
              background: '#fff',
              width: 105,
              mx: 'auto',
              mt: 1,
              mb: 3,
            }}
          />
          {
            // <PortfolioTabs />
          }
          <SliderView />
          <Button
            variant='outlined'
            sx={{
              width: 180,
              mt: 5,
              fontSize: 20,
              mx: 'auto',
              '&:hover': {
                background: (theme) => theme.palette.primary.main,
                color: '#fff',
                fontWeight: 'bold',
              },
            }}>
            Heir Me
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
