import React from "react";
import "./sass/App.scss";
import { BrowserRouter, Route } from "react-router-dom";

import { ContextProvider } from "./context/ContextProvider";

// Components
import Main from "./components/dashboard/main/Main";
import Details from "./components/dashboard/details/Details";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Main} />
          <Route path="/details/:movieId" component={Details} />
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
