import { InputLabel, TextField } from '@material-ui/core';
import useStyles from '../styles/WallsInputStyles';
import './WallsInputs.css';

const WallsInputs = ({ quantityOfWalls }) => {
  const amountOfWalls = Array(quantityOfWalls).fill(null);
  const minWallMeasures = 1;
  const maxWallMeasures = 15;
  const inputPropsWalls = {
    inputProps: {
      min: minWallMeasures,
      max: maxWallMeasures,
      step: 0.01
    }
  };
  const inputPropsWnD = { min: 0 };
  const classes = useStyles();
  const theInputs = amountOfWalls.map((_wallAmount, index) => {
    return (
      <div key={ `all-content-wrapper-${index}` } className={ classes.allContentWrapper }>
        <div className={ classes.cardWrapper }>
          <InputLabel htmlFor={ `wall-height-${index + 1}` }>Altura Parede { index + 1 }</InputLabel> <br />
          <TextField id={ `wall-height-${index + 1}` }
            className={ classes.inputMeasures }
            type='number'
            InputProps={ inputPropsWalls }
            autoFocus={ true }
            required /> metros
        </div>
        <div className={ classes.cardWrapper }>
          <InputLabel htmlFor={ `wall-length-${index + 1}` }>Comprimento Parede { index + 1 }</InputLabel>
          <TextField id={ `wall-length-${index + 1}` }
            className={ classes.inputMeasures }
            type='number'
            InputProps={ inputPropsWalls }
            required /> metros
        </div>
        <div className={ classes.cardWrapper }>
          <InputLabel htmlFor={ `wall-${index + 1}-has-window` }>Possui janela (medidas 2,00m (L) x 1,20m (A))</InputLabel>
          <TextField id={ `wall-${index + 1}-has-window` }
            type='number'
            InputProps={ inputPropsWnD }
          />
        </div>
        <div className={ classes.cardWrapper }>
          <InputLabel htmlFor={ `wall-${index + 1}-has-door` }>Possui porta (medidas 0,80m (L) x 1,90m (A))</InputLabel>
          <TextField id={ `wall-${index + 1}-has-door` }
            type='number'
            InputProps={ inputPropsWnD } />
        </div>
      </div>
    );
  });
  return (
    <section className={ classes.mainWrapper }>
      { theInputs }
    </section>);
};

export default WallsInputs;