import WallsCalc from "../components/WallsCalc";
import theme from "../styles/themeStyles";

const LandingPage = () => {
  const giantString = `Nenhuma parede pode ter menos de 1 metro nem mais de 15 metros, mas podem possuir alturas e larguras diferentes;
   O total de área das portas e janelas deve ser no máximo 50 % da área de parede;
  A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta;
   Cada janela possui as medidas: 2, 00 x 1, 20 mtos;
   Cada porta possui as medidas: 0, 80 x 1, 90;
   Cada litro de tinta é capaz de pintar 5 metros quadrados;
   Não considerar teto nem piso.;
   As variações de tamanho das latas de tinta são:
  -> 0, 5 L,
  -> 2, 5 L,
  -> 3, 6 L,
  -> 18 L `.split(';').map((item, index) => <li key={ index }
    style={ { color: theme.palette.text.primary, textAlign: 'center', padding: '0.2em 1em 0 0' } }>{ item }</li>);
  const wallMeasures = { minWallMeasures: 1, maxWallMeasures: 15 };
  return (
    <div>
      <h2 style={ {
        color: theme.palette.text.primary, textAlign: 'center'
      } }>Regras de negócio</h2>
      <summary>
        <div style={ { width: '80%', textAlign: 'start', margin: '0 auto' } }>
          <ul style={ { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1em' } }>{ giantString }</ul>
        </div>
      </summary>
      <WallsCalc
        quantityOfWalls={ 4 }
        wallMeasures={ wallMeasures }
      />
    </div>);
};

export default LandingPage;