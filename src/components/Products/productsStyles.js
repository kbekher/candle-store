import { makeStyles } from '@mui/styles';


//add theme as a param
export default makeStyles(() => ({
  toolbar: {
    marginTop: '100px',
  },
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    // padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));