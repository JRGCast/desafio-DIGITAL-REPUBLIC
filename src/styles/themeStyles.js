import { orange } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f3d2c1'
    },
    secondary: {
      main: '#8bd3dd'
    },
    error: {
      main: orange[500]
    },
    text: {
      primary: '#001858',
      secondary: '#172c66',
    },
    background: {
      default: '#f3d2c1',
      paper: '#fef6e4'
    },
  },
  custom: {
    myOwnComponent: {
      margin: "10px 10px",
      backgroundColor: "lightgreen"
    },
    typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  }
});

export default theme;