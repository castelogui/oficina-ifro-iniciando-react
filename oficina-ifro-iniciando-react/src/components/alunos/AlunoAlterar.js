import React from 'react';

import history from '../../config/history';
import AlunoForm from './AlunoForm';

export const t = ( { match } ) => {


  const alterar = aluno => {
    alert( JSON.stringify( aluno ) )
  }

  return <AlunoForm onSubmit={ alterar } />
}

export default class AlunoAlterar extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {
      aluno: null
    }
  }
  async componentDidMount() {
    try {
      const { match } = this.props;
      if ( !match || !match.params ) {
        return;
      }
      debugger
      const { id } = match.params;
      const response = await fetch( `http://localhost:3001/alunos/${id}` )

      if ( !response.ok ) {
        throw new Error( `Ocorreu um erro ${response.status} na busca do aluno!` )
      }

      const aluno = await response.json();

      await this.setState( { aluno } )
    } catch ( error ) {
      alert( error.message )
    }
  }

  async alterar( aluno ) {
    try {
      const headers = new Headers();
      headers.append( "Content-Type", "application/json" );

      const response = await fetch( `http://localhost:3001/alunos/${aluno._id}`, {
        method: "PUT",
        body: JSON.stringify( aluno ),
        headers
      } )

      if ( !response.ok ) {
        throw new Error( `Ocorreu um erro ${response.status} ao alterar!` )
      }

      alert( `${aluno.nome} alterado com sucesso!` );
      history.goBack();
    } catch ( error ) {
      alert( error )
    }
  }

  render() {
    const { aluno } = this.state;
    return <AlunoForm aluno={ aluno } onSubmit={ this.alterar.bind( this ) } />
  }
}