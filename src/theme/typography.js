// ----------------------------------------------------------------------

import { fontFamily } from '@mui/system';

function pxToRem(value) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ sm, md, lg, }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}
const FONT_PRIMARY = "LEMON MILK Pro FTR";
const FONT_SECONDARY = "Lato, sans-serif";
// const FONT_PRIMARY = 'Inter, sans-serif';

const typography = {

  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    lineHeight: 80 / 64,
    fontSize: pxToRem(42),
    ...responsiveFontSizes({ sm: 42, md: 58, lg: 64, xl: 70 }),
  },
  h2: {
    fontWeight: 700,
    fontFamily: FONT_SECONDARY,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 32, md: 40, lg: 40, }),
  },
  h3: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: 20,
    ...responsiveFontSizes({ sm: 20, md: 30, lg: 32, xl: 36 }),
  },
  h4: {
    fontWeight: 700,
    fontFamily: FONT_SECONDARY,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24, }),
  },
  h5: {
    fontWeight: 400,
    fontFamily: FONT_SECONDARY,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 16, md: 18, lg: 20, xl: 20 }),
  },
  h6: {
    fontWeight: 400,
    fontFamily: FONT_SECONDARY,
    lineHeight: 28 / 18,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 16, md: 16, lg: 16, }),
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 18, md: 20, lg: 24, }),

  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
    fontFamily: FONT_SECONDARY,
  },
};

export default typography;
