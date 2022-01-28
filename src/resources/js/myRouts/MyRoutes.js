import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
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
      </Router>
    </>
  );
};

export default MyRoutes;
