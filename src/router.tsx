import * as React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { HelloComponent, Login } from './components';
import { Provider } from 'react-redux';
import { store } from './store';
import './components/main.css';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='main-container '>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/hello' component={HelloComponent} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};
