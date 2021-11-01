import { useEffect, useState } from 'react';
import useStyles from '../styles/WallsInputStyles';
import ImgGenerator from './ImgGenerator';
import WallsInputGenerator from './WallsInputsGenerator';

const WallsCalc = ({ quantityOfWalls, wallMeasures }) => {
  const [wallsAreas, setWallsAreas] = useState({});
  const [totalAreas, setTotalAreas] = useState({});
  const [showCalc, setShowCalc] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);
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

  useEffect(() => {
    const setTheTotalArea = (wallNumber) => {
      const theWallH = wallsAreas[`wall-${wallNumber}-${heightStr}`];
      const theWallL = wallsAreas[`wall-${wallNumber}-${lengthStr}`];
      if (theWallH && theWallL) {
        const totalWallArea = theWallH * theWallL;
        setTotalAreas(previous => ({ ...previous, [`wall-${wallNumber}-total-area`]: totalWallArea }));
      }
    };
    for (let i = 1; i <= quantityOfWalls; i++) {
      setTheTotalArea(i);
    }
  }, [wallsAreas, quantityOfWalls]);

  const verifyIfWindow = (currWHeight, currWLength, currWindowId, currDoorId) => {
    const currWindowInput = document.getElementById(currWindowId);
    const totalWallArea = wallsAreas[currWHeight] * wallsAreas[currWLength];
    const currDoorTotalArea = wallsAreas[`${currDoorId}-total-area`] || 0;
    const totalPlacefulArea = (totalWallArea * 0.5) - currDoorTotalArea;
    const totalWindowArea = 2.4; // 1.2 (A) x 2 (L)
    if (wallsAreas[currWHeight] >= 1.2 && wallsAreas[currWLength] >= 2) {
      if (totalPlacefulArea >= totalWindowArea) {
        let countWindows = 0;
        let areaDivision = totalPlacefulArea;
        for (let i = 0; (areaDivision / totalWindowArea) >= 1; i++) {
          countWindows += 1;
          areaDivision -= totalWindowArea;
        }
        currWindowInput.placeholder = countWindows;
        currWindowInput.max = countWindows;
      } else {
        currWindowInput.value = '';
        currWindowInput.max = 0;
      }
    } else {
      currWindowInput.value = '';
      currWindowInput.max = 0;
    }
  };

  const verifyIfDoor = (currWHeight, currWLength, currWindowId, currDoorId) => {
    const currDoorInput = document.getElementById(currDoorId);
    const totalWallArea = wallsAreas[currWHeight] * wallsAreas[currWLength];
    const currWindowTotalArea = wallsAreas[`${currWindowId}-total-area`] || 0;
    const totalPlacefulArea = (totalWallArea * 0.5) - currWindowTotalArea;
    const totalDoorArea = 1.5; // 1.9 (A) x 0.8 (L)
    if (wallsAreas[currWHeight] >= 2.2 && wallsAreas[currWLength] >= 1.6) {
      if (totalPlacefulArea >= totalDoorArea) {
        let countDoors = 0;
        let areaDivision = totalPlacefulArea;
        for (let i = 0; (areaDivision / totalDoorArea) >= 1; i++) {
          countDoors += 1;
          areaDivision -= totalDoorArea;
        }
        currDoorInput.placeholder = countDoors;
        currDoorInput.max = countDoors;
      } else {
        currDoorInput.value = '';
        currDoorInput.max = 0;
      }
    } else {
      currDoorInput.value = '';
      currDoorInput.max = 0;
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
    if (Number(value) >= 1 && Number(value) <= 15) {
      setWallsAreas(previous => ({ ...previous, [id]: Number(value) }));
      blockWindow(false, currWindowId);
      verifyIfWindow(wallHeightId, wallLengthId, currWindowId, currDoorId);
      verifyIfDoor(wallHeightId, wallLengthId, currWindowId, currDoorId);
      spanEl.innerText = '';
    } else {
      setWallsAreas(previous => ({ ...previous, [id]: '' }));
      blockWindow(true, currWindowId);
      verifyIfWindow(wallHeightId, wallLengthId, currWindowId, currDoorId);
      verifyIfDoor(wallHeightId, wallLengthId, currWindowId, currDoorId);
      spanEl.innerText = value === '' ? 'Preencha este campo' : 'Valor incorreto ❌';
    }
  };
  const handleWindowChange = ({ target: { id, value } }) => {
    const windowTotalArea = 2.4; // 1.2 (A) * 2 (L);
    setWallsAreas({ ...wallsAreas, [`${id}-total-area`]: Number(value * windowTotalArea) });
  };

  const handleDoorChange = ({ target: { id, value } }) => {
    const doorTotalArea = 1.52; // 1.9 (A) * 0.8 (L);
    setWallsAreas(previous => ({ ...previous, [`${id}-total-area`]: Number((value * doorTotalArea).toFixed(2)) }));
  };

  const handleSubmit = () => {
    setShowCalc(true);
    let finalTotal = 0;
    for (let key in totalAreas) {
      finalTotal += totalAreas[key];
    }
    setFinalTotal(finalTotal.toFixed(2));
  };

  const classes = useStyles();
  const handleFuncObjs = { handleWallChange, handleWindowChange, handleDoorChange };
  return (<>
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
    </section >
    { !showCalc ? '' :
      <div className={ classes.mainWrapper }>
        <h3> Área total das { quantityOfWalls } paredes: { finalTotal }m²</h3>
        <button type='button' onClick={ () => setShowCalc(false) }>Voltar</button>
      </div> }
  </>);
};

export default WallsCalc;