import { useState } from 'react';
import useStyles from '../styles/WallsInputStyles';
import ImgGenerator from './ImgGenerator';
import WallsInputGenerator from './WallsInputsGenerator';

const WallsCalc = ({ quantityOfWalls, wallMeasures }) => {
  const heightStr = 'height';
  const lengthStr = 'length';
  const imgWindowObj = {
    src: 'https://amgestoroutput.s3.amazonaws.com/jcmateriais/img_produtos/638265-14535830_thumb.png',
    alt: 'imagem-janela',
    textInfo: 'Medida da Janela: 2,00m (L) x 1,20m (A)'
  };
  const imgDoorObj = {
    src: 'https://mobileimages.lowes.com/productimages/b0196113-822f-4b05-ab2c-4b43b30e56ef/04744195.jpg?size=pdhi',
    alt: 'imagem-porta',
    textInfo: 'Medida da Porta: 0,80m (L) x 1,90m (A)'
  };
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
    const inputWindow = document.getElementById(id);
    const [wall, number, theWindowStr] = id.split('-');
    const currWallHeight = [wall, number, heightStr].join('-');
    const currWallLength = [wall, number, lengthStr].join('-');
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
      <ImgGenerator imgObj={ imgWindowObj } />
      <ImgGenerator imgObj={ imgDoorObj } />
      <WallsInputGenerator
        wallCardsAmount={ quantityOfWalls }
        wallMeasures={ wallMeasures }
        handleFuncObjs={ handleFuncObjs } />
    </section >);
};

export default WallsCalc;