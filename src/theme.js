import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#F5F5F5',
    },
    secondary: {
      main: '#00000',
    },
    info: {
      main: '#1976D2'
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;