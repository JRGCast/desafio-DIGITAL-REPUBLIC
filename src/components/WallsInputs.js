import { InputLabel, TextField } from '@material-ui/core';
import { useState } from 'react';
import useStyles from '../styles/WallsInputStyles';
import './WallsInputs.css';

const WallsInputs = ({ quantityOfWalls }) => {
  const amountOfWalls = Array(quantityOfWalls).fill(null);
  const minWallMeasures = 1;
  const maxWallMeasures = 15;
  const [wallsAreas, setWallsAreas] = useState({});
  const handleWallChange = ({ target: { id, value } }) => {
    const spanEl = document.getElementById(`${id}-span`);
    if (Number(value) >= 1 && Number(value) <= 15) {
      setWallsAreas({ ...wallsAreas, [id]: value });
      spanEl.innerText = '';
    } else {
      spanEl.innerText = value === '' ? 'Preencha o campo ⭕' : 'Valor incorreto ❌';
    }
  };
  const handleWindow = ({ target: { id, value } }) => {

  };
  const inputPropsWalls = {
    inputProps: {
      min: minWallMeasures,
      max: maxWallMeasures,
      step: 0.01,
    }
  };
  const inputPropsWnD = { min: 0 };
  const classes = useStyles();
  const theInputs = amountOfWalls.map((_wallAmount, index) => {
    return (
      <div key={ `all-content-wrapper-${index}` } className={ classes.allContentWrapper }>
        <div className={ classes.cardWrapper }>
          <InputLabel htmlFor={ `wall-${index + 1}-height` }>Altura Parede { index + 1 } :</InputLabel>
          <TextField id={ `wall-${index + 1}-height` }
            className={ classes.inputMeasures }
            type='number'
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
            InputProps={ inputPropsWnD }
            onChange={ handleWallChange }
          /> janela(s)
        </div>
        <div className={ classes.cardWrapper }>
          <InputLabel htmlFor={ `wall-${index + 1}-door` }>Possui :</InputLabel>
          <TextField id={ `wall-${index + 1}-door` }
            className={ classes.inputMeasures }
            type='number'
            InputProps={ inputPropsWnD }
            onChange={ handleWallChange }
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
            src='https://4.imimg.com/data4/NF/SF/MY-16570734/wooden-window-500x500.jpg'
            alt='janela'
            style={ {
              background: 'white',
              border: '2px solid brown',
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