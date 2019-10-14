import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AlunoAlterar from './AlunoAlterar';
import AlunoInserir from './AlunoInserir';
import Alunos from './Alunos';

const BASE_ROUTE = "/alunos"

export default props => (
  <Switch>
    <Route exact path={ `${BASE_ROUTE}/novo` } component={ AlunoInserir } />
    <Route exact path={ `${BASE_ROUTE}/editar/:id` } component={ AlunoAlterar } />
    <Route path={ BASE_ROUTE } component={ Alunos } />
    <Redirect to={ BASE_ROUTE } />
  </Switch>
)