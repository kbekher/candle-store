import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  appBar: {
    position: 'relative',
  },
  toolbar: {
    marginTop: '100px',
  },
  layout: {
    marginTop: '5%',
    width: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  paper: {
    marginTop: '1px',
    marginBottom: '1px',
    padding: '30px',
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