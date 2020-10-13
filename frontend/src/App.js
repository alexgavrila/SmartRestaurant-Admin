import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

import Paper from "@material-ui/core/Container";

// import logo from './logo.svg';
import "./App.css";

// views
import Home from "./views/Home.jsx";
import Restaurants from "./views/Restaurants.jsx";
import RestaurantsNew from "./views/RestaurantsNew.jsx";

// components
import Navbar from "./components/Navbar.jsx";

// style
const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(10),
  },
});

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    exact: true,
    sidebar: true
  }, {
    path: '/restaurants',
    component: Restaurants,
    name: 'My Restaurants',
    exact: true,
    sidebar: true
  },{
    path: '/restaurants/add',
    component: RestaurantsNew,
    name: 'Add Restaurants',
    exact: true,
    sidebar: false
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className={this.props.classes.root}>
          <Navbar routes={routes} />
          <Paper className={this.props.classes.content}>
            <Switch>
              {routes.map((item) =>
                <Route exact={item.exact} path={item.path} component={item.component} />
              )}
              {/* <Route path="/contact" component={Contact} /> */}
            </Switch>
          </Paper>
        </div>
      </Router>
    );
  }
}


export default withStyles(styles)(App);
