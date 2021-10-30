import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main
  },
  mainWrapper: {
    alignItems: 'center',
    background: theme.palette.primary.main,
    border: '5px solid blue',
    display: 'grid',
    flexFlow: 'row wrap',
    gap: '1em',
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'center space-between',
    margin: '0 auto',
    padding: '1em',
    width: '50%',
  }
}));

export default useStyles;