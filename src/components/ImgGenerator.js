import PropTypes from 'prop-types';
import useStyles from '../styles/WallsInputStyles';
const ImgGenerator = ({ imgObj }) => {
  const { src, alt, textInfo } = imgObj;
  const classes = useStyles();
  return (
    <>
      <div className={ classes.imageWrapper }>
        <figure>
          <img
            src={ src }
            alt={ alt }
            style={ {
              background: 'white',
              border: '2px solid grey',
              padding: '0.5em',
              width: '10em'
            } } />
        </figure>
        <p>{ textInfo }</p>
      </div>
    </>);
};

ImgGenerator.propTypes = {
  imgObj: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    textInfo: PropTypes.string,
  }),
};

export default ImgGenerator;