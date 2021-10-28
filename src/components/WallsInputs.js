const WallsInputs = ({ quantityOfWalls }) => {
  const amountOfWalls = Array(quantityOfWalls).fill(null);
  const minWallMeasures = 1;
  const maxWallMeasures = 15;
  const theInputs = amountOfWalls.map((_wallNumber, index) => {
    return (
      <div>
        <label htmlFor={ `wall-height-${index}` }>Altura Parede { index }
          <input id={ `wall-height-${index}` }
            type='number'
            min={ minWallMeasures }
            max={ maxWallMeasures }
            step={ 0.1 } />
        </label>
        <label htmlFor={ `wall-length-${index}` }>Comprimento Parede { index }
          <input id={ `wall-length-${index}` }
            type='number'
            min={ minWallMeasures }
            max={ maxWallMeasures }
            step={ 0.1 } />
        </label>
        {console.log(amountOfWalls)}
      </div>
    );
  });
  return (
    <div>
      { theInputs }
    </div>);
};

export default WallsInputs;