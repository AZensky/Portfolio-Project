import React from 'react';
import { code, creative, productive } from '../../assets';
import { Box, Typography } from '@mui/material';
import { Button } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const BLOG_CARDS = [
  {
    id: 0,
    title: 'How To Code Better',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget.',
    image: code,
    subTitle: 'development',
  },
  {
    id: 1,
    title: 'Think Creative',
    image: creative,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget.',
    subTitle: 'creative',
  },
  {
    id: 2,
    title: 'Be More Productive',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget.',
    image: productive,
    subTitle: 'Work',
  },
];

export default function BlogCard() {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: { xs: 6, lg: 3 },
        gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
      }}>
      {BLOG_CARDS.map((card, idx) => {
        return (
          <Box
            key={idx}
            sx={{
              mx: 'auto',
              maxWidth: 400,
              width: '100%',
              background: (theme) => theme.palette.primary.darker,
              boxShadow: '0px 6px 16px rgba(255, 255, 255, 0.04)',
              borderRadius: '20px',
              textAlign: 'left',
            }}>
            <Box component='img' src={card.image} />

            <Box sx={{ p: 2.5 }}>
              <Box
                sx={{
                  mb: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '& svg': {
                    fill: (theme) => theme.palette.primary.main,
                  },
                }}>
                <AccessTimeIcon />
                <Typography variant='h6' sx={{ color: (theme) => theme.palette.primary.main }}>
                  24 Aug, 2022{' '}
                </Typography>

                <Typography
                  variant='h1'
                  sx={{ color: 'rgba(255, 255, 255, 0.25)', height: '10px', lineHeight: '0px', mt: -4 }}>
                  .
                </Typography>
                <Typography variant='h6' sx={{ textTransform: 'capitalize' }}>
                  {card.subTitle}
                </Typography>
              </Box>

              <Typography variant='h5' sx={{ textAlign: 'left', fontWeight: 'bold' }}>
                {card.title}
              </Typography>
              <Typography variant='h6' sx={{ textAlign: 'left', fontWeight: 'normal' }}>
                {card.desc}
              </Typography>

              <Button
                variant='outlined'
                sx={{
                  width: 120,
                  mt: 2,
                  fontSize: 16,
                  '&:hover': {
                    background: (theme) => theme.palette.primary.main,
                    color: '#fff',
                    fontWeight: 'bold',
                  },
                }}>
                Read more
              </Button>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
