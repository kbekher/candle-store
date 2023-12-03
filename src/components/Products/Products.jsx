import React from 'react';
import { Grid } from '@mui/material';

import Product from './Product/Product';
import useStyles from './productsStyles';

const products = [
  {id: 1, name: 'Candle', description: 'Christmas candle.', price: '$5', image: 'https://yrstudio.co.uk/cdn/shop/products/IMG_3030_1024x1024@2x.jpg?v=1659091914'},
  {id: 2, name: 'Candle', description: 'Aromatic candle.', price: '$10', image: 'https://theenglishsoapcompany.com/wp-content/uploads/2022/12/generic_lit_candle.jpg'},
]

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
