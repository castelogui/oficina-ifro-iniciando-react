import React from 'react';

import history from '../../config/history';
import AlunoForm from './AlunoForm';

export default props => {
  const inserir = async aluno => {
    try {
      const headers = new Headers();
      headers.append( "Content-Type", "application/json" );

      const response = await fetch( `http://localhost:3001/alunos`, {
        method: "POST",
        body: JSON.stringify( aluno ),
        headers
      } )

      if ( !response.ok ) {
        throw new Error( `Ocorreu um erro ${response.status} ao alterar!` )
      }

      alert( `${aluno.nome} inserido com sucesso!` );
      history.goBack();
    } catch ( error ) {
      alert( error )
    }
  }

  return <AlunoForm onSubmit={ inserir } />
}