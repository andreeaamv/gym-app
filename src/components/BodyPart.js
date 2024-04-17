import React from 'react';
import Card from 'react-bootstrap/Card';

const BodyPart = ({ item, img, setBodyPart, bodyPart }) => {
  return (
    <Card
      as="button"
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
      border={bodyPart === item ? 'danger' : 'light'}
      className="shadow p-3 rounded-4 my-3"
      style={{
        margin: 'auto auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        backgroundColor: '#fafafa',
        width: '250px',
        height: '300px',
        justifyContent: 'center',
        borderRadius: '9px',
        padding: '1rem 2rem',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
      }}
    >
      <div className="image">
        <img src={img} alt="arms.png" loading="lazy" style={{ width: '100%', opacity: '0.9' }} />
      </div>
      <h2 className="fw-bold text-capitalize mt-2 text-dark">{item}</h2>
    </Card>
  );
};

export default BodyPart;
