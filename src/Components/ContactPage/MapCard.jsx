import React from 'react';
import { Card } from 'react-bootstrap';

const MapCard = () => {
  return (
    <Card className="map-card">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.3397675069978!2d-6.73055550321041!3d33.98380559999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7406c402501ad%3A0x8c27f36f5c2f5a6c!2sInternational%20University%20of%20Rabat!5e0!3m2!1sen!2sma!4v1706870225229!5m2!1sen!2sma"
        width="100%"
        height="400"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Card>
  );
};

export default MapCard;
