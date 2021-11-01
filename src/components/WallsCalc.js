import { useEffect, useState } from 'react';
import useStyles from '../styles/WallsInputStyles';
import ImgGenerator from './ImgGenerator';
import WallsInputGenerator from './WallsInputsGenerator';

const WallsCalc = ({ quantityOfWalls, wallMeasures }) => {
  const [wallsAreas, setWallsAreas] = useState({});
  const [totalAreas, setTotalAreas] = useState({});
  const [showCalc, setShowCalc] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);
  const [bucketsCount, setBucketsCount] = useState({ "18 L": 0, "3,6 L": 0, "2,5 L": 0, "0,5 L": 0 });
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

  useEffect(() => {
    if (finalTotal) {
      let divideToBucked = Number(finalTotal);
      let getBuckets = { "18 L": 0, "3,6 L": 0, "2,5 L": 0, "0,5 L": 0 };
      while (divideToBucked > 0) {
        if (divideToBucked >= 90) {
          getBuckets["18 L"] += 1;
          divideToBucked -= 90;
        }
        if (divideToBucked < 90 && divideToBucked >= 18) {
          getBuckets["3,6 L"] += 1;
          divideToBucked -= 18;
        }
        if (divideToBucked < 18 && divideToBucked >= 12.5) {
          getBuckets["2,5 L"] += 1;
          divideToBucked -= 12.5;
        }
        if (divideToBucked < 12.5 && divideToBucked > 0) {
          getBuckets["0,5 L"] += 1;
          divideToBucked -= 2.5;
        }
        console.log(divideToBucked, getBuckets);
      }
      setBucketsCount(getBuckets);
    }
  }, [finalTotal]);

  const verifyWorD = (WindOrDoor, currWHeight, currWLength, currWindowId, currDoorId) => {
    const currUseId = WindOrDoor === 'window' ? currWindowId : currDoorId;
    const currInput = document.getElementById(currUseId);
    const totalWallArea = wallsAreas[currWHeight] * wallsAreas[currWLength];
    const currOpositeTotalArea = wallsAreas[`${currUseId}-total-area`] || 0;
    const totalPlacefulArea = (totalWallArea * 0.5) - currOpositeTotalArea;
    const totalCurrArea = WindOrDoor === 'window' ? 2.4 /* 1.2 (A) x 2 (L) */ : 1.5; // 1.9 (A) x 0.8 (L)
    const initCalc = WindOrDoor === 'window' ? [1.2, 2] : [2.2, 1.6];
    if (wallsAreas[currWHeight] >= initCalc[0] && wallsAreas[currWLength] >= initCalc[1]) {
      if (totalPlacefulArea >= totalCurrArea) {
        let countWindows = 0;
        let areaDivision = totalPlacefulArea;
        for (let i = 0; (areaDivision / totalCurrArea) >= 1; i++) {
          countWindows += 1;
          areaDivision -= totalCurrArea;
        }
        currInput.placeholder = `max ${countWindows}`;
        currInput.max = countWindows;
      } else {
        currInput.value = '';
        currInput.max = 0;
      }
    } else {
      currInput.value = '';
      currInput.max = 0;
      blockField(true, currWindowId);
    }
  };

  const blockField = (block, fieldId) => {
    const currField = document.getElementById(fieldId);
    if (block) {
      currField.disabled = true;
      currField.placeholder = 'Block';
      currField.value = '';
    } else {
      currField.disabled = false;
      currField.placeholder = '';
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
      verifyWorD('window', wallHeightId, wallLengthId, currWindowId, currDoorId);
      verifyWorD('door', wallHeightId, wallLengthId, currWindowId, currDoorId);
      // verifyIfDoor(wallHeightId, wallLengthId, currWindowId, currDoorId);
      spanEl.innerText = '';
    } else {
      setWallsAreas(previous => ({ ...previous, [id]: '' }));
      verifyWorD('window', wallHeightId, wallLengthId, currWindowId, currDoorId);
      verifyWorD('door', wallHeightId, wallLengthId, currWindowId, currDoorId);
      // verifyIfDoor(wallHeightId, wallLengthId, currWindowId, currDoorId);
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

  const calculateBucketsNDisplay = () => {
    const displayBuckets = Object.entries(bucketsCount).map(([key, value], index) =>
      <li key={ index }>Balde { key } : { value }</li>
    );
    return (
      <>
        <h3> Área total das { quantityOfWalls } paredes: { finalTotal }m²</h3>
        { displayBuckets }
      </>
    );
  };

  const handleSubmit = () => {
    setShowCalc(true);
    let theFinalTotal = 0;
    for (let key in totalAreas) {
      theFinalTotal += totalAreas[key];
    }
    setFinalTotal(theFinalTotal.toFixed(2));
  };

  const classes = useStyles();
  const handleFuncObjs = { handleWallChange, handleWindowChange, handleDoorChange };
  return (
    <>
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
          <ul>
            { calculateBucketsNDisplay() }
          </ul>
          <button type='button' onClick={ () => setShowCalc(false) }>Voltar</button>
        </div> }
    </>);
};

export default WallsCalc;