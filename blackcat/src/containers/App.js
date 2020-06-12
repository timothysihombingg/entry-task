import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
 
import Login from '../components/Login/Login';
import Home from './Home';
import Search from '../components/Search/Search'
import SearchResult from '../components/Search/SearchResult'
import Bar from '../components/Bar/Bar'
import Card from '../components/Home/Card'
 
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from '../utils/Common';

import './App.css'
 
function App() {
  const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
 
    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
 
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PublicRoute path="/login" component={Login} />
              <Route path="/cook" component={Card} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;