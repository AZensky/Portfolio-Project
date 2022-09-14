import { Box, Container, Divider, Typography } from '@mui/material';
import React from 'react';
import { blog } from '../assets';
import BlogCard from '../components/Card/BlogCard';

export default function BlogSection() {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.primary.dark,
        py: 16,
        zIndex: 9,
        position: 'relative',
        px: { md: 2 },
      }}>
      <Container maxWidth='xl' sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            background: `url(${blog})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 0',
            mb: 5,
            textAlign: 'center',
          }}>
          <Typography
            variant='h4'
            sx={{
              textTransform: 'capitalize',
            }}>
            My{' '}
            <Typography variant='h4' component='span' sx={{ color: (theme) => theme.palette.primary.main }}>
              Blog
            </Typography>
          </Typography>

          <Divider
            sx={{
              height: 2,
              background: '#fff',
              width: 105,
              mx: 'auto',
              mt: 1,
            }}
          />

          <Typography variant='h6' sx={{ mt: 4, mb: 8 }}>
            This is a collection of some of my most viewed articles. Feel free to read through them <br /> and reach out
            to me with topic ideas!
          </Typography>
          <BlogCard />
        </Box>
      </Container>
    </Box>
  );
}
