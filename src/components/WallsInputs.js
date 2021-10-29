import { useState } from "react";

const WallsInputs = ({ quantityOfWalls }) => {
  const amountOfWalls = Array(quantityOfWalls).fill(null);
  const minWallMeasures = 1;
  const maxWallMeasures = 15;
  const [doorChecked, setDoorChecked] = useState(false);
  const theInputs = amountOfWalls.map((_wallNumber, index) => {
    const handleCheck = (e) => console.log(e.target.checked);
    return (
      <div>
        <label htmlFor={ `wall-height-${index}` }>Altura Parede { index }
          <input id={ `wall-height-${index}` }
            type='number'
            min={ minWallMeasures }
            max={ maxWallMeasures }
            step={ 0.1 }
            required />
        </label>
        <label htmlFor={ `wall-length-${index}` }>Comprimento Parede { index }
          <input id={ `wall-length-${index}` }
            type='number'
            min={ minWallMeasures }
            max={ maxWallMeasures }
            step={ 0.01 }
            required />
        </label>
        <label htmlFor={ `wall-${index}-has-window` }>Possui janela
          <input id={ `wall-${index}-has-window` } type='checkbox' onChange={ handleCheck } />
        </label>
        <label htmlFor={ `wall-${index}-has-door` }>Possui porta
          <input id={ `wall-${index}-has-door` } type='checkbox' onChange={ handleCheck } />
        </label>
        { console.log(amountOfWalls) }
      </div>
    );
  });
  return (
    <div>
      { theInputs }
      {/* { document.getElementById(`wall-${2}-has-door`).checked ? <h1>Ou</h1> : '' }
      { document.getElementById(`wall-${3}-has-window`).checked ? <h1>Ou</h1> : '' } */}
    </div>);
};

export default WallsInputs;