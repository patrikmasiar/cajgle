import React from 'react';
import {Form, Container, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import style from './LoginForm.module.css'

const LoginForm = ({name, onNameChange}) => (
  <Container style={{ marginTop: 25, marginBottom: 25 }}>
    <Form.Group>
      <Form.Label>Tvoje meno</Form.Label>
      <Form.Control
        type="text"
        placeholder="Meno..."
        value={name}
        onChange={onNameChange}
        required
      />
      <Form.Text className="text-muted">
        Napíš Tvoje meno, aby Ťa vedeli nájsť kamaráti
      </Form.Text>
    </Form.Group>

    <Form.Group>
      <Form.Label>Adresa školy</Form.Label>
      <Form.Control type="text" placeholder="Drieňová 72/16, 831 04 Ružinov" disabled />
    </Form.Group>

    <Form.Group>
      <Form.Label>Adresa krúžku</Form.Label>
      <Form.Control type="text" placeholder="Drieňová 72/16, 831 04 Ružinov" disabled />
    </Form.Group>

    <Link
      to='/map'
    >
      <Button
        type="button"
        className={style.button}
        size='lg'
      >
        Pokračovať
      </Button>
    </Link>
  </Container>
);

export default LoginForm;
