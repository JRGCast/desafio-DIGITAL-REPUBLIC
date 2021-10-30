import { ThemeProvider } from '@material-ui/core';
import './App.css';
import Routes from './Routes/Routes';
import theme from './styles/themeStyles';

const App = () => {
  return (
    <ThemeProvider theme={ theme }>
      <div style={ { backgroundColor: theme.palette.background.default } }>
        <p>Uma aplicação web que ajude o usuário a calcular a quantidade de tinta necessária para pintar uma sala.</p>
        <p>Essa aplicação deve considerar que a sala é composta de 4 paredes e deve permitir que o usuário escolha qual a medida de cada parede e quantas janelas e portas possuem cada parede.</p>
        <p>Com base na quantidade necessária o sistema deve apontar tamanhos de lata de tinta que o usuário deve comprar.</p>
        <Routes />
      </div>
    </ThemeProvider>
  );
};

export default App;