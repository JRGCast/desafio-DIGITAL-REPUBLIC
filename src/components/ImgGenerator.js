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
      {/*<div className={ classes.imageWrapper }>
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
      </div> */}
    </>);
};

export default ImgGenerator;