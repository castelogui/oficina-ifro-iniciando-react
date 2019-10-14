import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row, Table } from 'reactstrap';
import history from '../../config/history';

const ListaAlunos = ( { alunos, onDelete } ) => {
  const editar = _id => history.push( `/alunos/editar/${_id}` )

  const deletar = async ( e, aluno ) => {
    try {
      e.stopPropagation();

      if ( !window.confirm( `Tem certeza que deseja deletar ${aluno.nome}?` ) ) {
        return
      }

      const response = await fetch( `http://localhost:3001/alunos/${aluno._id}`, { method: "DELETE" } );

      if ( !response.ok ) {
        throw new Error( `Ocorreu um erro ${response.status} ao deletar!` )
      }

      onDelete()
      alert( `Registro deletado com sucesso!` );

    } catch ( error ) {
      alert( error )
    }
  }

  const listarAlunos = () => alunos.map( ( aluno, index ) => (
    <tr key={ `tr-${index}` } style={ { cursor: "pointer" } } onClick={ () => editar( aluno._id ) }>
      <td>{ aluno._id }</td>
      <td>{ aluno.nome }</td>
      <td>{ aluno.email }</td>
      <td>
        <div className="d-flex justify-content-center">
          <Button onClick={ async e => await deletar( e, aluno ) } color="danger">Del</Button>
        </div>
      </td>
    </tr>
  ) )

  return (
    <React.Fragment>
      <Container>
        <Row className="my-2">
          <Col>
            <Button to="alunos/novo" color="success" tag={ Link }>Novo</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered >
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                { listarAlunos() }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

class Alunos extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {
      alunos: [ { nome: "Igor", idade: 20, email: "igor@gmail.com" } ]
    }
  }

  async componentDidMount() {
    await this.listarAlunos();
  }

  async listarAlunos() {
    try {
      debugger
      const response = await fetch( "http://localhost:3001/alunos" );

      if ( !response.ok ) {
        throw new Error( `Ocorreu um erro ${response.status} na busca de alunos!` )
      }

      const alunos = await response.json();

      await this.setState( { alunos } );
    } catch ( error ) {
      alert( error )
    }
  }

  render() {
    const { alunos } = this.state;

    return <ListaAlunos alunos={ alunos || [] } onDelete={ () => this.listarAlunos() } />
  }
}

export default Alunos;
