import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { LoginForm } from './LoginForm';
import './main.css';

interface Props {}

export class Login extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <>
          <Card className='card'>
            <CardHeader title='Login' />
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>
        </>
        <Link className='nav-link' to='/hello'>
          {' '}
          Hello{' '}
        </Link>
      </div>
    );
  }
}
