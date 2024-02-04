import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './FormCard.css'; 

const FormCard = () => {
  return (
    <Card className="contact-card">
      <Card.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Entrez votre nom" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Entrez votre email" />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Entrez votre message" />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Envoyer
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormCard;
