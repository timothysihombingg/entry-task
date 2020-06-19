import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
// import Login from '../components/Login/Login';
import Login from '../pages/Login/index'
import Home from './Home';
import Search from '../components/Search/Search'
import SearchResult from '../components/Search/SearchResult'
import Card from '../components/Home/Card'
import Details from '../components/Details/Details'

import './App.css'
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/details" component={Details} />
              <Route path="/search" component={Search} />
              <Route path="/searchresult" component={SearchResult} />
              <Route path="/card" component={Card} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;