import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
      light: '#534bae',
      dark: '#000051',
    },
    secondary: {
      main: '#4CAF50',
      light: '#80e27e',
      dark: '#087f23',
    },
    accent: {
      orange: '#ff9500',
      orangeDark: '#ff6b35',
      lightBlue: '#5eb8e6',
      sky: '#e3f2fd',
    },
    text: {
      primary: '#1a237e',
      secondary: '#37474f',
      disabled: '#546e7a',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 800,
      fontSize: '2.75rem',
      lineHeight: 1.2,
      color: '#1a237e',
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 800,
      fontSize: '2.25rem',
      lineHeight: 1.3,
      color: '#1a237e',
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: '1.75rem',
      lineHeight: 1.3,
      color: '#1a237e',
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: '1.5rem',
      color: '#1a237e',
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: '1.25rem',
      color: '#1a237e',
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '1.1rem',
      color: '#37474f',
    },
    body1: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '1rem',
      color: '#37474f',
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '0.875rem',
      color: '#546e7a',
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 16,
  },
})
