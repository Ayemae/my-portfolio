import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Menu />
        <Switch>
          <div className="post_column center">
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          </div>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
