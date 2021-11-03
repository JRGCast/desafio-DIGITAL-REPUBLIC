import { LinearProgress, ThemeProvider } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import AppInside from './components/AppInside';
// import Routes from './Routes/Routes';
import theme from './styles/themeStyles';
const Routes = lazy(() => import('./Routes/Routes'));

const App = () => {
  return (
    <ThemeProvider theme={ theme }>
      <div style={
        {
          background: theme.palette.background.default,
          height: '100%',
          width: '100%'
        }
      }>
        <AppInside />
        <Suspense fallback={ <LinearProgress /> }>
          <Routes />
        </Suspense>
      </div>
    </ThemeProvider >
  );
};

export default App;
