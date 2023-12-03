import React from "react";
import "./App.css";
import Header from "../Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="content">
        <p className="content__blurb">
          Welcome to our little public piece of internet. This site is currently
          undergoing a massive refit so that timely information relating to
          various project will be easily accessible to all who desire it. We
          hope that you will enjoy your sojourn with us and return in the future
          when our latest project nears release.
        </p>
        <p className="content__blurb">Regardless of the ongoing sitewide changes, we welcome you.</p>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
