import { MenuOpenOutlined } from '@mui/icons-material';
import { AppBar, Box, Button, Container, IconButton, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import Logo from '../components/Logo';

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 83;

//import Moralis from "moralis/types";
const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  // position: 'relative',
  // background: 'transparent !important',
  // zIndex: theme.zIndex.drawer + 1,
  // position: 'relative',
  background: theme.palette.primary.dark,

  [theme.breakpoints.down('sm')]: {},
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, max-content)',
  flexGrow: 1,
  justifyContent: 'space-between',
  background: '#fff0 !important',
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    // padding: theme.spacing(0, 5),
    background: '#fff0 !important',
  },
}));

export default function DashboardNavbar({ handleBackClick, isActive, handleSideBar }) {
  return (
    <RootStyle>
      <Container maxWidth={'xl'} sx={{ px: { xs: '0px !important', md: '24px !important' } }}>
        <ToolbarStyle>
          <Logo />

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button
              variant='text'
              onClick={() => handleBackClick('home')}
              sx={{
                color: isActive === 'home' ? 'primary' : '#fff',
                fontSize: 18,
              }}>
              Home
            </Button>
            <Button
              variant='text'
              onClick={() => handleBackClick('about')}
              sx={{
                color: isActive === 'about' ? 'primary' : '#fff',
                fontSize: 18,
              }}>
              About
            </Button>
            <Button
              variant='text'
              onClick={() => handleBackClick('portfolio')}
              sx={{
                color: isActive === 'portfolio' ? 'primary' : '#fff',
                fontSize: 18,
              }}>
              Portfolio
            </Button>
            <Button
              variant='text'
              onClick={() => handleBackClick('blog')}
              sx={{
                color: isActive === 'blog' ? 'primary' : '#fff',
                fontSize: 18,
              }}>
              Blog
            </Button>
            <Button
              variant='text'
              onClick={() => handleBackClick('contact')}
              sx={{
                color: isActive === 'contact' ? 'primary' : '#fff',
                fontSize: 18,
              }}>
              contact
            </Button>
          </Box>

          <IconButton onClick={handleSideBar} sx={{ display: { xs: 'block', md: 'none' } }}>
            <MenuOpenOutlined />
          </IconButton>
        </ToolbarStyle>
      </Container>
    </RootStyle>
  );
}
