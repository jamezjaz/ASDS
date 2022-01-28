import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from '../customs/footer/Footer';
import Header from '../customs/header/Header';

const MyRoutes = () => {
  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<h5>Please wait...</h5>}>
          <Routes>
            
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
};

export default MyRoutes;
