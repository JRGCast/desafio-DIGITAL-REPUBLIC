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
    background: theme.palette.background.default
  },
  title: {
    color: theme.palette.text.primary,
    margin: '0 auto',
    paddingTop: '0.5em',
    textAlign: 'center'
  },
  subtitle: {
    color: theme.palette.text.secondary,
    margin: '0 auto',
    textAlign: 'center',
    width: '50%'
  }
}));

export default useStyles;