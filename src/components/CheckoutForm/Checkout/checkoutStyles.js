import { makeStyles } from '@mui/styles';

//theme
export default makeStyles(() => ({
  appBar: {
    position: 'relative',
  },
  toolbar: {
    marginTop: '100px',
  },
  layout: {
    marginTop: '5%',
    width: 'auto',
    marginLeft: '240px',
    marginRight: '240px',
    // [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
    //   width: 600,
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    // },
  },
  paper: {
    marginTop: '1px',
    marginBottom: '1px',
    padding: '30px',
    // [theme.breakpoints.down('xs')]: {
    //   width: '100%',
    //   marginTop: 60,
    // },
    // [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
    //   marginTop: theme.spacing(6),
    //   marginBottom: theme.spacing(6),
    //   padding: theme.spacing(3),
    // },
  },
  stepper: {
    padding:'40px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: '50px',
    marginLeft: '50px',
  },
  divider: {
    margin: '20px 0',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));