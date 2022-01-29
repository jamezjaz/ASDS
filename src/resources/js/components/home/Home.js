import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Header from '../../customs/header/Header';
import Footer from '../../customs/footer/Footer';
import Slider from '../slider/Slider';
import homeStyles from '../home/Home.module.css';

const Home = () => {
  return (
    <>
      <Header />
      <div className={`input-group ${homeStyles.input_group}`}>
        <input type='search' id='form1' className={`form-control ${homeStyles.form_control}`} placeholder='Search' />
        <button type='button' className={`btn btn-primary ${homeStyles.search_btn}`}>
          Search
        </button>
      </div>
      <div className={homeStyles.carousel}>
        <h2>Latest Posts</h2>
        <Slider />
      </div>
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default Home;