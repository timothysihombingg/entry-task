import * as React from 'react'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';

import Login from '../pages/Login/index'
import Home from '../pages/Home/index';
import Details from '../pages/Detail/index';
import Profile from '../pages/Profile/index';
import { getUserStorage } from '../data/storage';

function App() {
  const user = getUserStorage();
  const history = useHistory();

  if (!user.id) {
    history.push('/login');
    return null;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/activity/:id" component={Details} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;