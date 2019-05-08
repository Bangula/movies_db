import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import {ContextProvider} from './context/ContextProvider';

// Components
import Main from './components/dashboard/main/Main';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <div className="App">
            <Navbar />
            <Route path='/' component={Main} />
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
