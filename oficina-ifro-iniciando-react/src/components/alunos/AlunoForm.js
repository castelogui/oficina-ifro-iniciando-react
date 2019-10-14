import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

import history from '../../config/history';

const INITIAL_FORM = {
  nome: "",
  idade: "",
  email: ""
}

export default ( { aluno, onSubmit } ) => {
  const [ alunoEdit, setAlunoEdit ] = useState( INITIAL_FORM );

  useEffect( () => {
    if ( aluno ) {
      setAlunoEdit( { ...aluno } )
    }
  }, [ aluno ] )

  const submitAluno = e => {
    e.preventDefault();
    onSubmit( alunoEdit )
  }

  const alterarCampo = ( e, campo ) => setAlunoEdit( { ...alunoEdit, [ campo ]: e.target.value } )

  return <Form onSubmit={ submitAluno }>
    <Container>
      <Row className="my-2">
        <Col>
          <Button color="secondary" onClick={ () => history.goBack() }>Voltar</Button>
        </Col>
      </Row>
      <Row>
        <Col xl="12">
          <FormGroup>
            <Label>Nome</Label>
            <Input name="nome" type="text" required value={ alunoEdit.nome } onChange={ e => alterarCampo( e, "nome" ) } />
          </FormGroup>
        </Col>
        <Col xl="12">
          <FormGroup>
            <Label>Idade</Label>
            <Input name="idade" type="number" required value={ alunoEdit.idade } onChange={ e => alterarCampo( e, "idade" ) } />
          </FormGroup>
        </Col>
        <Col xl="12">
          <FormGroup>
            <Label>E-mail</Label>
            <Input name="email" type="email" required value={ alunoEdit.email } onChange={ e => alterarCampo( e, "email" ) } />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end">
          <Button className="mx-2" type="button" onClick={ () => setAlunoEdit( INITIAL_FORM ) }>Limpar</Button>
          <Button color="success" type="submit">Salvar</Button>
        </Col>
      </Row>
    </Container>
  </Form>
}