import React from 'react';
import { LocationOn, Phone, Email } from '@mui/icons-material'; 
import './InfoCard.css'; 

const InfoCard = () => {
  return (
    <div className="info-card container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 text-center">
          <h5>Informations de contact</h5>
          <p>
            <LocationOn /> Adresse: 123 Rue de la République, 75001 Paris
            <br />
            <Phone /> Téléphone: +33 1 23 45 67 89
            <br />
            <Email /> Email: contact@example.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
