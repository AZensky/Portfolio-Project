/* eslint-disable react/no-array-index-key */

import { Box, Button, Drawer, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import useResponsive from '../hooks/useResponsive';

import CloseIcon from '@mui/icons-material/Close';
import { Divider } from '@mui/material';
import Scrollbar from '../components/Scrollbar';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 290;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    // width: DRAWER_WIDTH,
  },
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ handleSideBar, open, isActive, handleBackClick }) {
  const isDesktop = useResponsive('up', 'lg');

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}>
      <Box sx={{ textAlign: 'right', py: 2 }}>
        <IconButton aria-label='' onClick={handleSideBar}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button
          variant='text'
          onClick={() => {
            handleBackClick('home');
          }}
          sx={{
            color: isActive === 'home' ? 'primary' : '#fff',
            fontSize: 18,
            mx: 'auto',
            width: '90%',
            '&:hover': {
              background: (theme) => theme.palette.primary.main,
              color: '#fff',
            },
          }}>
          Home
        </Button>
        <br />
        <Button
          variant='text'
          onClick={() => {
            handleBackClick('about');
          }}
          sx={{
            color: isActive === 'about' ? 'primary' : '#fff',
            fontSize: 18,
            width: '90%',
            '&:hover': {
              background: (theme) => theme.palette.primary.main,
              color: '#fff',
            },
          }}>
          About
        </Button>{' '}
        <br />
        <Button
          variant='text'
          onClick={() => {
            handleBackClick('portfolio');
          }}
          sx={{
            color: isActive === 'portfolio' ? 'primary' : '#fff',
            fontSize: 18,
            width: '90%',
            '&:hover': {
              background: (theme) => theme.palette.primary.main,
              color: '#fff',
            },
          }}>
          Portfolio
        </Button>
        <br />
        <Button
          variant='text'
          onClick={() => {
            handleBackClick('blog');
          }}
          sx={{
            color: isActive === 'blog' ? 'primary' : '#fff',
            fontSize: 18,
            width: '90%',
            '&:hover': {
              background: (theme) => theme.palette.primary.main,
              color: '#fff',
            },
          }}>
          Blog
        </Button>
        <br />
        <Button
          variant='text'
          onClick={() => {
            handleBackClick('contact');
          }}
          sx={{
            color: isActive === 'contact' ? 'primary' : '#fff',
            fontSize: 18,
            width: '90%',
            '&:hover': {
              background: (theme) => theme.palette.primary.main,
              color: '#fff',
            },
          }}>
          contact
        </Button>
        <br />
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={open}
          onClose={handleSideBar}
          // onClick={handleSideBar}
          hideBackdrop
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: '#000',
              boxShadow: 0,
            },
          }}>
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
