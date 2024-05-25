import React from 'react'
import Formulario from './Formulario'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Contacto = () => {
  return (
    <Container>
      <Row>
        <Col>
            <div className='contacto'>
                <h1>Cuéntanos ¿en qué te podemos ayudar?</h1>
                <Formulario/>
            </div>
        </Col>
      </Row>
    </Container>
   
  )
}
