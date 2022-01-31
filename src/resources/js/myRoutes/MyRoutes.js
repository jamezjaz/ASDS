import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from '../components/signin/Signin';
import ErrorBoundary from '../customs/errorBoundary/ErrorBoundary';
// import Footer from '../customs/footer/Footer';
// import Header from '../customs/header/Header';
import Spinner from '../customs/spinner/Spinner';

const MyRoutes = () => {
  return (
    <>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            {/* <Header /> */}
            <Routes>
              <Route path='/signin' element={<Signin />} />
            </Routes>
            {/* <Footer /> */}
          </Suspense>
        </ErrorBoundary>
      </Router>
    </>
  );
};

export default MyRoutes;
