
import useStyles from '../styles/AppStyles';

const AppInside = () => {
  const appClasses = useStyles();
  return (<>
    <header>
      <h1 className={ appClasses.title }>LOJA DE TINTAS
      </h1>
      <p className={ appClasses.subtitle }>Uma aplicação web que ajude o usuário a calcular a quantidade de tinta necessária para pintar uma sala.</p>
    </header>
    <p className={ appClasses.subtitle }>Essa aplicação deve considerar que a sala é composta de 4 paredes e deve permitir que o usuário escolha qual a medida de cada parede e quantas janelas e portas possuem cada parede.
      Com base na quantidade necessária o sistema deve apontar tamanhos de lata de tinta que o usuário deve comprar.</p>
    <hr />
  </>
  );
};

export default AppInside;