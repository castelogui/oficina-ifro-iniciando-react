import './App.css';

import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';

import AlunoRouter from './components/alunos/AlunoRouter';
import Navbar from './components/Navbar';
import history from './config/history';

const App = props => {
  return (
    <React.Fragment>
      <Navbar />
      <BrowserRouter>
        <Router history={ history }>
          <AlunoRouter />
        </Router>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
