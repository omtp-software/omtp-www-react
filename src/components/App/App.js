import React from "react";
import "./App.css";
import Header from "../Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './Home'
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <hr className="header__bottom-border"></hr>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='*' component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
