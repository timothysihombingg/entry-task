import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/index'
import Home from '../pages/Home/index';
import Details from '../pages/Detail/index'
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/activity/:id" component={Details} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;