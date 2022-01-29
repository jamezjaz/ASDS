import React from 'react';
import { Card, Button } from 'react-bootstrap';
import cardData from '../../constants/cardData';
import cardStyles from '../myCard/MyCard.module.css';

const MyCard = () => {
  return (
    <>
      {cardData.map((data, i) => (
        <Card style={{ width: '18rem' }} key={i} className={cardStyles.card}>
          <Card.Img variant="top" src={data.image} />
          <Card.Body>
            <Card.Title>
              <h3>{data.title}</h3>
            </Card.Title>
            <Card.Text>
              {data.description}
            </Card.Text>
            <Button variant="primary">Read more ➡️</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default MyCard;