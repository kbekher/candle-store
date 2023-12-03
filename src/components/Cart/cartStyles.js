import { makeStyles } from '@mui/styles';

//add theme as a param
export default makeStyles(() => ({
  toolbar: {
    marginTop: '100px',
  },
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    margin: '0 20px 5px',
    // [theme.breakpoints.down('xs')]: {
    //   marginBottom: '5px',
    // },
    // [theme.breakpoints.up('xs')]: {
    //   marginRight: '20px',
    // },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));