import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    alignItems: 'center',
    background: theme.palette.primary.light,
    border: '5px solid blue',
    display: 'grid',
    flexFlow: 'row wrap',
    gap: '1em',
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'center space-between',
    margin: '0 auto',
    padding: '1em',
    width: '50%',
  },
  contentWrapper: {
    border: '1px solid black',
    color: theme.palette.text.primary,
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'space-between',
    margin: '0 auto',
    padding: '0.5em',
    width: 'min-content',
  }
}));

export default useStyles;