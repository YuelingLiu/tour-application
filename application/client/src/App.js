import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MyNavbar from './components/MyNavbar';

function App() {
  return (
    <>
      <Router basename="/">
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
