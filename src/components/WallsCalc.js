import { useState } from 'react';
import useStyles from '../styles/WallsInputStyles';
import ImgGenerator from './ImgGenerator';
import WallsInputGenerator from './WallsInputsGenerator';

const WallsCalc = ({ quantityOfWalls, wallMeasures }) => {
  const heightStr = 'height';
  const lengthStr = 'length';
  const windowStr = 'window';
  const doorStr = 'door';
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

  const verifyIfWinOrDoor = (currWHeight, currWLength, currWindowId, currDoorId) => {
    const currWindowInput = document.getElementById(currWindowId);
    const currDoorInput = document.getElementById(currDoorId) || 0;
    const totalWallArea = wallsAreas[currWHeight] * wallsAreas[currWLength];
    const totalPlacefulArea = totalWallArea * 0.5;
    const totalWindowArea = 2.4; // 1.2 (A) x 2 (L)
    console.log(currDoorInput);
    if (wallsAreas[currWHeight] >= 1.2 && wallsAreas[currWLength] >= 2) {
      if (totalPlacefulArea >= totalWindowArea) {
        let countWindows = 0;
        let dividing = totalPlacefulArea;
        for (let i = 0; dividing / totalWindowArea >= 1; i++) {
          countWindows += 1;
          dividing -= totalWindowArea;
        }
        console.log('d:', dividing, 'counter:', countWindows);
        currWindowInput.max = countWindows;
      }
    }
  };
  const blockWindow = (block, fieldId) => {
    const currWInput = document.getElementById(fieldId);
    if (block) {
      currWInput.disabled = true;
      currWInput.placeholder = 'Block';
      currWInput.value = '';
    } else {
      currWInput.disabled = false;
      currWInput.placeholder = '';
    }
  };
  const handleWallChange = ({ target: { id, value } }) => {
    const spanEl = document.getElementById(`${id}-span`);
    const [wall, number, _heigthOrLenght] = id.split('-');
    const wallLengthId = [wall, number, lengthStr].join('-');
    const wallHeightId = [wall, number, heightStr].join('-');
    const currWindowId = [wall, number, windowStr].join('-');
    const currDoorId = [wall, number, doorStr].join('-');
    console.log(wall, number);
    if (Number(value) >= 1 && Number(value) <= 15) {
      setWallsAreas({ ...wallsAreas, [id]: Number(value) });
      verifyIfWinOrDoor(wallHeightId, wallLengthId, currWindowId, currDoorId);
      blockWindow(false, currWindowId);
      spanEl.innerText = '';
    } else {
      setWallsAreas({ ...wallsAreas, [id]: '' });
      blockWindow(true, currWindowId);
      spanEl.innerText = value === '' ? 'Preencha este campo' : 'Valor incorreto ❌';
    }
  };
  const handleWindowChange = ({ target: { id, value } }) => {
    const inputWindow = document.getElementById(id);
    const windowTotalArea = 2.4; // 1.2 (A) * 2 (L);
    setWallsAreas({ ...wallsAreas, [`${id}-total-area`]: Number(value * windowTotalArea) });
    console.log(wallsAreas, windowTotalArea);
  };

  const handleDoorChange = ({ target: { id, value } }) => {
    const inputDoor = document.getElementById(id);
    const doorTotalArea = 1.52; // 1.9 (A) * 0.8 (L);
    setWallsAreas({ ...wallsAreas, [`${id}-total-area`]: Number((value * doorTotalArea).toFixed(2)) });
    console.log(wallsAreas, doorTotalArea);
  };

  const handleSubmit = () => {
    console.log('enviou');
  };

  const classes = useStyles();
  const handleFuncObjs = { handleWallChange, handleWindowChange, handleDoorChange };
  return (
    <section className={ classes.mainWrapper }>
      <ImgGenerator imgObj={ imgWindowObj } />
      <ImgGenerator imgObj={ imgDoorObj } />
      <WallsInputGenerator
        wallCardsAmount={ quantityOfWalls }
        wallMeasures={ wallMeasures }
        handleFuncObjs={ handleFuncObjs } />
      <div>
        <button type='button'
          className={ classes.button }
          onClick={ handleSubmit }>CALCULAR</button>
      </div>
    </section >);
};

export default WallsCalc;