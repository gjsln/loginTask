import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './main.css';

export const LoginForm = () => {
  return (
    <div className='formContainer'>
      <TextField label='UserName' margin='normal' value='' />
      <TextField label='Password' type='password' margin='normal' value='' />
      <Button variant='contained' color='primary'>
        Login
      </Button>
      <div className='divider' />
      <Button variant='contained' color='primary'>
        Sign Up
      </Button>
    </div>
  );
};
