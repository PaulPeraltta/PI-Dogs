import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router";
import "./App.css";

import Detail from "./visual/Detail";
import Landing from "./visual/Landing";
import Home from "./visual/Home";
import Form from "./visual/Form";
import AboutMe from "./visual/AboutMe";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home/dogs/:id">
            <Detail />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/add">
            <Form />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
