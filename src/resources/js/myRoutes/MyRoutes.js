import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from '../components/signIn/SignIn';
import ErrorBoundary from '../customs/errorBoundary/ErrorBoundary';
// import Footer from '../customs/footer/Footer';
// import Header from '../customs/header/Header';
import Spinner from '../customs/spinner/Spinner';
import Home from '../components/home/Home';

const MyRoutes = () => {
  return (
    <>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            {/* <Header /> */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signin' element={<SignIn />} />
            </Routes>
            {/* <Footer /> */}
          </Suspense>
        </ErrorBoundary>
      </Router>
    </>
  );
};

export default MyRoutes;
