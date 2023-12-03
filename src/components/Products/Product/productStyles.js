import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    // height: '500px',
  },
  media: {
    height: 0,
    // paddingTop: '56.25%', // 16:9z
    paddingTop: '76.25%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

