import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button } from '@mui/material';

// import { Label } from "@mui/icons-material";

const StyledInput = styled(TextField)(({ theme }) => ({
  '& input': {
    color: '#fff !important',
    width: '100%',
    borderRadius: 1,
    fontFamily: 'Lato, sans-serif',
  },
  '& label': {
    color: '#fff',
    alignItems: 'center',
    display: 'flex',
  },
  '& label.Mui-focused': {
    // color: theme.palette.primary.main,
    // borderBottomColor: "#fff",
  },
  '& .MuiInput-underline:after': {
    color: '#fff !important',

    // borderBottomColor: 'red',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'none',
      color: '#fff !important',
      // background: theme.palette.primary.lighter,
    },
    '&:hover fieldset': {
      // borderColor: 'white',
      color: '#fff !important',
      // background: theme.palette.primary.lighter,
    },
    '&.Mui-focused fieldset': {
      // borderColor: '#fff',
      color: '#fff',
      // background: theme.palette.primary.lighter,
    },
  },
}));

const StyledTextArea = styled(TextareaAutosize)(({ theme }) => ({
  width: '100%',
  background: '#101417',
  color: '#fff',
  // height: 200,
  outline: 'none',
  border: 'none',
  padding: '10px',
  borderRadius: '8px',
  fontSize: '16px',
  fontFamily: 'Lato, sans-serif',
}));

export default function GetInTouchForm() {
  return (
    <Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
          gap: { xs: 2, sm: 4 },
          textAlign: 'left',
        }}>
        <Box>
          <Box component='label' sx={{ ml: 1 }}>
            Name
          </Box>
          <StyledInput
            id='name'
            placeholder='Enter you name'
            // label="Enter you name"
            fullWidth
            variant='outlined'
            sx={{
              background: (theme) => theme.palette.primary.lighter,
              borderRadius: 1,
              color: '#fff !important',
              mt: 1,
            }}
          />
        </Box>
        <Box>
          <Box component='label' sx={{ ml: 1 }}>
            Email
          </Box>
          <StyledInput
            id='email'
            placeholder='Enter you email'
            // label="Enter you email"
            fullWidth
            variant='outlined'
            sx={{
              background: (theme) => theme.palette.primary.lighter,
              borderRadius: 1,
              mt: 1,
            }}
          />
        </Box>
      </Box>
      <Box sx={{ textAlign: 'left', mt: 4 }}>
        <Box component='label' sx={{ ml: 1, mt: 2 }}>
          Message
        </Box>
        <br />
        <StyledTextArea aria-label='minimum height' minRows={6} placeholder='Write message...' />
        <Typography
          variant='h6'
          sx={{
            textAlign: 'right',
            color: '#6C757D',
            fontWeight: 'normal',
            textStyle: 'italic',
            textTransform: 'capitalize',
          }}>
          0/500 Words
        </Typography>
      </Box>

      <Button
        variant='contained'
        sx={{ fontSize: { xs: 18, md: 22 }, width: { xs: 160, md: 200 }, py: { xs: 1, md: 1.5 } }}>
        {' '}
        Submit
      </Button>
    </Box>
  );
}
