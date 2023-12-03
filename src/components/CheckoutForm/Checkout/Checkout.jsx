import React, { useState } from 'react';
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from '@mui/material';

import AdressForm from '../AdressForm';
import PaymentForm from '../PaymentForm';
import useStyles from './checkoutStyles';

const steps = ['Shipping adress', 'Payment details'];

const Checkout = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const Confirmation = () => (
    <div>Confirmation</div>
  );

  const Form = () => activeStep === 0 ? <AdressForm /> : <PaymentForm />

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant='h4' align='center'>Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(step => (
              <Step kay={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
