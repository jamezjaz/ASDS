import React from 'react';
import Header from '../../customs/header/Header';
import Footer from '../../customs/footer/Footer';
import Slider from '../slider/Slider';
import homeStyles from '../home/Home.module.css';
import Card from '../myCard/MyCard';

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
      <div id='news' className={homeStyles.card_container}>
        <h2 className={homeStyles.header}>Trending Posts</h2>
        <div className={homeStyles.card_sub_container}>
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;