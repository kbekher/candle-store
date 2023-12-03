import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import logo from '../../assets/logo.webp';
import useStyles from './navbarStyles';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar
        position="fixed"
        className={classes.appBar}
        color="inherit"
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img 
              src={logo} 
              alt="Candle Store" 
              height="25px"
              className={classes.image}
            />
            Light Your Memory
          </Typography>

          <div className={classes.grow}></div>
          <div className={classes.button}>
            <IconButton aria-label='Show cart items' color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
