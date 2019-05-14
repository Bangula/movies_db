import React from "react";
import "./sass/App.scss";
import { BrowserRouter, Route } from "react-router-dom";

// Components
import Main from "./components/dashboard/main/Main";
import Details from "./components/dashboard/details/Details";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Main} />
        <Route path="/details/:movieId" component={Details} />
      </div>
    </BrowserRouter>
  );
}

export default App;
