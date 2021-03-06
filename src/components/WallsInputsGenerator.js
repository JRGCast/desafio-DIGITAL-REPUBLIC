import { InputLabel, TextField } from "@material-ui/core";
import PropTypes from 'prop-types';
import useStyles from '../styles/WallsInputStyles';

const WallsInputGenerator = ({ wallCardsAmount, wallMeasures, handleFuncObjs }) => {
  const classes = useStyles();
  const { minWallMeasures, maxWallMeasures } = wallMeasures;
  const { handleWallChange, handleWindowChange, handleDoorChange, } = handleFuncObjs;
  const { allContentWrapper, cardWrapper, inputMeasures } = classes;
  const inputPropsWalls = {
    inputProps: {
      min: minWallMeasures,
      max: maxWallMeasures,
      step: 0.01,
    }
  };
  const inputPropsWnD = { inputProps: { min: 0, max: 0 } };
  const theInputs = Array(wallCardsAmount).fill('').map((_amount, index) => {
    return (
      <div key={ `all-content-wrapper-${index}` } className={ allContentWrapper }>
        <div className={ cardWrapper }>
          <InputLabel htmlFor={ `wall-${index + 1}-height` }>Altura Parede { index + 1 } :</InputLabel>
          <TextField id={ `wall-${index + 1}-height` }
            className={ inputMeasures }
            type='number'
            placeholder='1-15'
            InputProps={ inputPropsWalls }
            autoFocus={ index < 1 ? true : false }
            onChange={ handleWallChange }
            onKeyUp={ handleWallChange }
            required /> metros
          <span id={ `wall-${index + 1}-height-span` }></span>
        </div>
        <div className={ cardWrapper }>
          <InputLabel htmlFor={ `wall-${index + 1}-length` }>Comprimento Parede { index + 1 } :</InputLabel>
          <TextField id={ `wall-${index + 1}-length` }
            className={ inputMeasures }
            type='number'
            placeholder='1-15'
            InputProps={ inputPropsWalls }
            onChange={ handleWallChange }
            onKeyUp={ handleWallChange }
            required /> metros
          <span id={ `wall-${index + 1}-length-span` }></span>
        </div>
        <div className={ cardWrapper }>
          <InputLabel htmlFor={ `wall-${index + 1}-window` }>Possui :</InputLabel>
          <TextField id={ `wall-${index + 1}-window` }
            className={ inputMeasures }
            type='number'
            placeholder='Block'
            InputProps={ inputPropsWnD }
            onChange={ handleWindowChange }
          /> janela(s)
        </div>
        <div className={ cardWrapper }>
          <InputLabel htmlFor={ `wall-${index + 1}-door` }>Possui :</InputLabel>
          <TextField id={ `wall-${index + 1}-door` }
            className={ inputMeasures }
            type='number'
            placeholder='Block'
            InputProps={ inputPropsWnD }
            onChange={ handleDoorChange }
          /> porta(s)
        </div>
      </div >
    );
  });
  return (<>{ theInputs }</>);
};

WallsInputGenerator.propTypes = {
  quantityOfWalls: PropTypes.number,
  wallMeasures: PropTypes.shape({
    minWallMeasures: PropTypes.number,
    maxWallMeasures: PropTypes.number,
  }),
  handleFuncObjs: PropTypes.shape({
    handleWallChange: PropTypes.func,
    handleWindowChange: PropTypes.func,
    handleDoorChange: PropTypes.func,
  })
};

export default WallsInputGenerator;