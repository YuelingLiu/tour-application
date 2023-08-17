import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Router basename="/">
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
