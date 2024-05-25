import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Label>Descripción</Form.Label>
      <InputGroup>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Formulario;