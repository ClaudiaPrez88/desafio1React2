import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
        <div className='home'>
          <h1>Bienvenido a Happy Cake</h1>
          <p>El lugar de los pasteles felices</p>
          <img src="/torta.png" alt="torta" className='torta' />
        </div>
        </Col>
      </Row>
    </Container>
    
  )
}
