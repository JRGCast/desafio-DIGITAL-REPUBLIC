import { makeStyles, ThemeProvider } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
import './App.css';
import Routes from './Routes/Routes';

const App = () => {
  const theme = createTheme({
    pallete: {
      primary: {
        main: '#f3d2c1'
      },
      secondary: {
        main: '#8bd3dd'
      },
      error: {
        main: orange[500]
      }
    },
  });
  return (
    <ThemeProvider theme={ theme }>
      <div className="App">
        <p>Uma aplicação web que ajude o usuário a calcular a quantidade de tinta necessária para pintar uma sala.</p>
        <p>Essa aplicação deve considerar que a sala é composta de 4 paredes e deve permitir que o usuário escolha qual a medida de cada parede e quantas janelas e portas possuem cada parede.</p>
        <p>Com base na quantidade necessária o sistema deve apontar tamanhos de lata de tinta que o usuário deve comprar.</p>
        <Routes />
      </div>
    </ThemeProvider>
  );
};

export default App;
