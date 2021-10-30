import { useState } from "react";
import './WallsInputs.css';

const WallsInputs = ({ quantityOfWalls }) => {
  const amountOfWalls = Array(quantityOfWalls).fill(null);
  const minWallMeasures = 1;
  const maxWallMeasures = 15;
  const [doorChecked, setDoorChecked] = useState(false);
  const theInputs = amountOfWalls.map((_wallNumber, index) => {
    const handleCheck = (e) => console.log(e.target.checked);
    return (
      <div className='WallsInputs-content-wrapper'>
        <div className='WallsInputs-wrapper WallsInputs-height'>
          <label htmlFor={ `wall-height-${index + 1}` }>Altura Parede { index + 1 }
            <input id={ `wall-height-${index + 1}` }
              type='number'
              min={ minWallMeasures }
              max={ maxWallMeasures }
              step={ 0.1 }
              required /> metros
          </label>
        </div>
        <div className='WallsInputs-wrapper WallsInputs-lenght'>
          <label htmlFor={ `wall-length-${index + 1}` }>Comprimento Parede { index + 1 }
            <input id={ `wall-length-${index + 1}` }
              type='number'
              min={ minWallMeasures }
              max={ maxWallMeasures }
              step={ 0.01 }
              required /> metros
          </label>
        </div>
        <div className='WallsInputs-wrapper WallsInputs-window'>
          <label htmlFor={ `wall-${index + 1}-has-window` }>Possui janela (medidas 2,00m (L) x 1,20m (A))
            <input id={ `wall-${index + 1}-has-window` } type='number' min={ 0 } onChange={ handleCheck } />
          </label>
        </div>
        <div className='WallsInputs-wrapper WallsInputs-door'>
          <label htmlFor={ `wall-${index + 1}-has-door` }>Possui porta (medidas 0,80m (L) x 1,90m (A))
            <input id={ `wall-${index + 1}-has-door` } type='number' min={ 0 } onChange={ handleCheck } />
          </label>
        </div>
        { console.log(amountOfWalls) }
      </div>
    );
  });
  return (
    <section className='WallsInputs-main-wrapper'>
      { theInputs }
      {/* { document.getElementById(`wall-${2}-has-door`).checked ? <h1>Ou</h1> : '' }
      { document.getElementById(`wall-${3}-has-window`).checked ? <h1>Ou</h1> : '' } */}
    </section>);
};

export default WallsInputs;