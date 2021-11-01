import { makeStyles } from '@material-ui/core';
// {
//   xs: 0,
//   sm: 600,
//   md: 900,
//   lg: 1200,
//   xl: 1536,
// },
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
    height: '80%',
    [theme.breakpoints.down('md')]: {
      gap: '0.8em',
      padding: '0.5em',
      width: '70%'
    },
    [theme.breakpoints.down('sm')]: {
      gap: '0.3em',
      width: 'fit-content'
    }
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
    width: '80%',
    [theme.breakpoints.down('md')]: {
      width: '80%',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'fit-content',
    }
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
    marginLeft: '0.2em',
    width: '4em'
  },
  imageWrapper: {
    alignContent: 'center',
    alignItems: 'center',
    background: theme.palette.background.paper,
    border: '3px solid #001858',
    color: theme.palette.text.primary,
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    margin: '0 auto',
    padding: '0.5em',
    width: '90%',
    [theme.breakpoints.down('md')]: {
      width: '60%',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'fit-content',
    }
  },
  button: {
    backgroundColor: '#001858',
    borderRadius: '40px',
    color: 'white',
    fontSize: '1.5em',
    position: 'relative',
    left: '50%',
    width: '100%',
    height: '5vh',
  }
}));

export default useStyles;