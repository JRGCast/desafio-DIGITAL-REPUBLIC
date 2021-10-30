import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    alignItems: 'center',
    background: theme.palette.primary.light,
    border: `5px solid #001858`,
    display: 'grid',
    flexFlow: 'row wrap',
    gap: '1em',
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'center space-between',
    margin: '0 auto',
    padding: '1em',
    width: '50%',
  },
  allContentWrapper: {
    background: theme.palette.background.paper,
    border: '3px solid #001858',
    color: theme.palette.text.primary,
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'space-between',
    margin: '0 auto',
    padding: '0.5em',
    width: 'fit-content',
  },
  cardWrapper: {
    alignItems: 'center',
    alignContent: 'center',
    border: '1px solid #001858',
    padding: '0.3em',
    margin: '0.5em auto',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  },
  inputMeasures: {
    textAlign: 'center',
    width: '4em'
  },
}));

export default useStyles;