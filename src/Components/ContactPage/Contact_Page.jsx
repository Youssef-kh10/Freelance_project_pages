import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormCard from './FormCard';
import InfoCard from './InfoCard';
import MapCard from './MapCard';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div>
      <div className="hero-section" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', height: '400px' }}>
  <h1 className="main-title pt-2 text-center">Contactez-nous</h1>

  <Container fluid>
        <Row>
          <Col md={12}>
            <MapCard />
          </Col>
        </Row>
      </Container>
</div>

      

      <Container className="mt-5">
        <Row className="d-flex">

        <Col md={6} className="flex-fill">
            <FormCard />
          </Col>

          <Col md={4} className="flex-fill">
            <InfoCard />
          </Col>
        </Row>
      </Container>

      <Container className="mt-4 mb-5 text-center">
        <Row>
          <Col lg={4} className="position-relative mb-3">
            <img
              src="data:image/png;base64,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"
              className="lazyload mb-3"
              alt=""
              width="75"
              height="85"
            />
            <h2 className="title mb-0">En savoir + sur Freelance Informatique</h2>
            <a className="btn btn-light stretched-link" href="/presentation-freelance-informatique">
              Qui sommes-nous ?
            </a>
          </Col>

          <Col lg={4} className="position-relative mb-3">
            <img
              src="data:image/png;base64,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"
              className="lazyload mb-3"
              alt="https://cdn4.iconfinder.com/data/icons/business-teamwork-1/100/teamwork-29-256.png"
              width="75"
              height="85"
            />
            <h2 className="title mb-0">Fonctionnement de notre plateforme</h2>
            <a className="btn btn-light stretched-link" href="/emploi-freelance-informatique-fonctionnement">
              Notre fonctionnement
            </a>
          </Col>

          <Col lg={4} className="position-relative mb-3">
            <img
              src="data:image/png;base64,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"
              className="lazyload mb-3"
              alt=""
              width="75"
              height="85"
            />
            <h2 className="title mb-0">Devenez l'un de nos partenaires</h2>
            <a className="btn btn-light stretched-link" href="/partenaires">
              Nos partenaires
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
