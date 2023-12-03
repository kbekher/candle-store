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
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.webp';
import useStyles from './navbarStyles';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar
        position="fixed"
        className={classes.appBar}
        color="inherit"
      >
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Candle Store"
              height="25px"
              className={classes.image}
            />
            Light Your Memory
          </Typography>

          <div className={classes.grow}></div>

          {location.pathname === '/' && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label='Show cart items'
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
