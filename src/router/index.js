import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Menu from '../components/Menu';

//PAGES
import Login from '../pages/Login';
import Friends from '../pages/Friends';
import Map from '../pages/Map';

const AppRouter = () => {
  return (
    <Router basename='/'>
      <Menu />
      <main
        role="main"
        className="flex-shrink-0 main-container"
      >
        <Route path="/friends" component={Friends} />
        <Route path="/map" component={Map} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} exact>
          <Redirect to="/login" />
        </Route>
      </main>
      {/* FOOTER */}
    </Router>
  )
};

export default AppRouter;
