import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './main.css';

const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <Link innerRef={ref as any} to='/signup' {...props} />
);

export const LoginForm = () => {
  return (
    <div className='formContainer'>
      <TextField label='UserName' margin='normal' value='' />
      <TextField label='Password' type='password' margin='normal' value='' />
      <Button variant='contained' color='primary'>
        Login
      </Button>
      <div className='divider' />
      <Button variant='contained' color='primary' component={AdapterLink}>
        Sign Up
      </Button>
    </div>
  );
};
