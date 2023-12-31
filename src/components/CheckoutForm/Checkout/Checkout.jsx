import React, { useState, useEffect } from 'react';
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  CssBaseline,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { commerce } from '../../../lib/commerce';

import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyles from './checkoutStyles';

const steps = ['Shipping adress', 'Payment details'];

const Checkout = ({
  cart,
  order,
  onCaptureCheckout,
  error,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

        setCheckoutToken(token);
      } catch {
        navigate('/');
      }
    }

    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveState) => prevActiveState + 1);
  const backStep = () => setActiveStep((prevActiveState) => prevActiveState - 1);

  const next = (data) => {
    setShippingData(data);

    nextStep();
  }

  const timeout  = () => {
    setTimeout(() => {
      setIsFinished(true);
    }, 3000);
  }

  let Confirmation = () => order.customer ? (
    <>
      <div>
        <Typography variant='h5'>
          Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!
        </Typography>
        <Divider className={classes.devider} />
        <Typography variant='subtitle2'>Order ref: {order.customer.reference}</Typography>
      </div>
      <br />
      <Button type='button' variant='outlined' component={Link} to='/'>
        Back to home
      </Button>
    </>
  ) : isFinished ? (
    <>
      <div>
        <Typography variant='h5'>Thank you for your purchase!</Typography>
        <Divider className={classes.devider} />
      </div>
      <br />
      <Button type='button' variant='outlined' component={Link} to='/'>
        Back to home
      </Button>
    </>
  ) : (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  );

  if (error) (
    <>
      <Typography variant='h5'>Error: {error}</Typography>
      <br />
      <Button type='button' variant='outlined' component={Link} to='/'>
        Back to home
      </Button> 
    </>
  )

  const Form = () => activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken} next={next} />
    : <PaymentForm
      checkoutToken={checkoutToken}
      shippingData={shippingData}
      backStep={backStep}
      onCaptureCheckout={onCaptureCheckout}
      nextStep={nextStep}
      timeout={timeout}
    />

  return (
    <>
    <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant='h4' align='center'>Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(step => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
