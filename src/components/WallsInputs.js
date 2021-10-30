import { InputLabel, TextField } from '@material-ui/core';
import './WallsInputs.css';
import useStyles from './WallsInputStyles';

const WallsInputs = ({ quantityOfWalls }) => {
  const classes = useStyles();
  const amountOfWalls = Array(quantityOfWalls).fill(null);
  const minWallMeasures = 1;
  const maxWallMeasures = 15;
  const theInputs = amountOfWalls.map((_wallAmount, index) => {
    return (
      <div key={ `content-wrapper-${index}` } className='WallsInputs-content-wrapper'>
        <div className='WallsInputs-wrapper WallsInputs-height'>
          <InputLabel htmlFor={ `wall-height-${index + 1}` }>Altura Parede { index + 1 }
            <TextField id={ `wall-height-${index + 1}` }
              type='number'
              InputProps={ {
                inputProps: {
                  min: minWallMeasures,
                  max: maxWallMeasures,
                  step: 0.01
                }
              } }
              autoFocus={ true }
              required /> metros
          </InputLabel>
        </div>
        <div className='WallsInputs-wrapper WallsInputs-lenght'>
          <InputLabel htmlFor={ `wall-length-${index + 1}` }>Comprimento Parede { index + 1 }
            <TextField id={ `wall-length-${index + 1}` }
              type='number'
              InputProps={ {
                inputProps: {
                  min: minWallMeasures,
                  max: maxWallMeasures,
                  step: 0.01
                }
              } }
              required /> metros
          </InputLabel>
        </div>
        <div className='WallsInputs-wrapper WallsInputs-window'>
          <InputLabel htmlFor={ `wall-${index + 1}-has-window` }>Possui janela (medidas 2,00m (L) x 1,20m (A))
            <TextField id={ `wall-${index + 1}-has-window` } type='number' min={ 0 } />
          </InputLabel>
        </div>
        <div className='WallsInputs-wrapper WallsInputs-door'>
          <InputLabel htmlFor={ `wall-${index + 1}-has-door` }>Possui porta (medidas 0,80m (L) x 1,90m (A))
            <TextField id={ `wall-${index + 1}-has-door` } type='number' min={ 0 } />
          </InputLabel>
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