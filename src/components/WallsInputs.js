import { InputLabel, TextField } from '@material-ui/core';
import { useState } from 'react';
import useStyles from '../styles/WallsInputStyles';

const WallsInputs = ({ quantityOfWalls }) => {
  const amountOfWalls = Array(quantityOfWalls).fill(null);
  // const height = 'height';
  // const length = 'length';
  const minWallMeasures = 1;
  const maxWallMeasures = 15;
  const [wallsAreas, setWallsAreas] = useState({});
  const handleWallChange = ({ target: { id, value } }) => {
    const spanEl = document.getElementById(`${id}-span`);
    const [wall, number, heightOrLength] = id.split('-');
    const currWindowId = [wall, number, 'window'].join('-');
    const currWindowInput = document.getElementById(currWindowId);
    if (Number(value) >= 1 && Number(value) <= 15) {
      setWallsAreas({ ...wallsAreas, [id]: Number(value) });
      spanEl.innerText = '';
      currWindowInput.style.backgroundColor = '#fef6e4';
      currWindowInput.disabled = false;
      currWindowInput.placeholder = '';
    } else {
      setWallsAreas({ ...wallsAreas, [id]: '' });
      currWindowInput.disabled = true;
      currWindowInput.value = '';
      currWindowInput.placeholder = 'Block';
      spanEl.innerText = value === '' ? 'Preencha este campo' : 'Valor incorreto ❌';
    }
  };
  const handleWindowChange = ({ target: { id, value } }) => {
    // const inputWindow = document.getElementById(id);
    // const [wall, number, theWindow] = id.split('-');
    // const currWallHeight = [wall, number, height].join('-');
    // const currWallLength = [wall, number, length].join('-');
    // if (wallsAreas[currWallHeight]) {
    //   inputWindow.disabled = true;
    // } else {
    //   inputWindow.disabled = false;
    // }
  };
  const inputPropsWalls = {
    inputProps: {
      min: minWallMeasures,
      max: maxWallMeasures,
      step: 0.01,
    }
  };
  const inputPropsWnD = { inputProps: { min: 0 } };
  const classes = useStyles();
  const theInputs = amountOfWalls.map((_wallAmount, index) => {
    return (
      <div key={ `all-content-wrapper-${index}` } className={ classes.allContentWrapper }>
        <div className={ classes.cardWrapper }>
          <InputLabel htmlFor={ `wall-${index + 1}-height` }>Altura Parede { index + 1 } :</InputLabel>
          <TextField id={ `wall-${index + 1}-height` }
            className={ classes.inputMeasures }
            type='number'
            placeholder='1-15'
            InputProps={ inputPropsWalls }
            autoFocus={ true }
            onChange={ handleWallChange }
            required /> metros
          <span id={ `wall-${index + 1}-height-span` }></span>
        </div>
        <div className={ classes.cardWrapper }>
          <InputLabel htmlFor={ `wall-${index + 1}-length` }>Comprimento Parede { index + 1 } :</InputLabel>
          <TextField id={ `wall-${index + 1}-length` }
            className={ classes.inputMeasures }
            type='number'
            placeholder='1-15'
            InputProps={ inputPropsWalls }
            onChange={ handleWallChange }
            required /> metros
          <span id={ `wall-${index + 1}-length-span` }></span>
        </div>
        <div className={ classes.cardWrapper }>
          <InputLabel htmlFor={ `wall-${index + 1}-window` }>Possui :</InputLabel>
          <TextField id={ `wall-${index + 1}-window` }
            className={ classes.inputMeasures }
            type='number'
            placeholder='Block'
            InputProps={ inputPropsWnD }
            onChange={ handleWindowChange }
          /> janela(s)
        </div>
        <div className={ classes.cardWrapper }>
          <InputLabel htmlFor={ `wall-${index + 1}-door` }>Possui :</InputLabel>
          <TextField id={ `wall-${index + 1}-door` }
            className={ classes.inputMeasures }
            type='number'
            placeholder='Block'
            InputProps={ inputPropsWnD }
            onChange={ handleWindowChange }
          /> porta(s)
        </div>
      </div >
    );
  });
  return (
    <section className={ classes.mainWrapper }>
      <div className={ classes.imageWrapper }>
        <figure>
          <img
            src='https://amgestoroutput.s3.amazonaws.com/jcmateriais/img_produtos/638265-14535830_thumb.png'
            alt='janela'
            style={ {
              background: 'white',
              border: '2px solid grey',
              padding: '0.5em',
              width: '10em'
            } } />
        </figure>
        <p >Medida da Janela: 2,00m (L) x 1,20m (A)</p>
      </div>
      <div className={ classes.imageWrapper }>
        <figure>
          <img
            src='https://mobileimages.lowes.com/productimages/b0196113-822f-4b05-ab2c-4b43b30e56ef/04744195.jpg?size=pdhi'
            alt='porta'
            style={ {
              background: 'white',
              border: '2px solid grey',
              padding: '0.5em',
              width: '10em'
            } } />
        </figure>
        <p >Medida da Porta: 0,80m (L) x 1,90m (A)</p>
      </div>
      { theInputs }
    </section >);
};

export default WallsInputs;