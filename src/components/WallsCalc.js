import { useState } from 'react';
import useStyles from '../styles/WallsInputStyles';
import WallsInputGenerator from './WallsInputsGenerator';

const WallsCalc = ({ quantityOfWalls }) => {
  const wallMeasures = { minWallMeasures: 1, maxWallMeasures: 15 };
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

  const classes = useStyles();
  const handleFuncObjs = { handleWallChange, handleWindowChange };
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
      <WallsInputGenerator
        wallCardsAmount={ quantityOfWalls }
        wallMeasures={ wallMeasures }
        handleFuncObjs={ handleFuncObjs } />
    </section >);
};

export default WallsCalc;