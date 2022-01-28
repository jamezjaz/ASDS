import React from 'react';
import logo from '../../../assets/images/logo2.png';
import facebook from '../../../assets/socials/facebook.svg';
import twitter from '../../../assets/socials/twitter.svg';
import instagram from '../../../assets/socials/instagram.svg';
import snapchat from '../../../assets/socials/snapchat.svg';
import linkedin from '../../../assets/socials/linkedin.svg';
import footerStyles from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <div className={footerStyles.socials}>
        <div>Please share and follow @African Society on Digital Science</div>
        <div>
          <a href='https://facebook.com' target='blank'><img src={facebook} alt='facebook' /></a>
          <a href='https://twitter.com' target='blank'><img src={twitter} alt='twitter' /></a>
          <a href='https://instagram.com' target='blank'><img src={instagram} alt='instagram' /></a>
          <a href='https://snapchat.com' target='blank'><img src={snapchat} alt='snapchat' /></a>
          <a href='https://linkedin.com' target='blank'><img src={linkedin} alt='linkedin' /></a>
        </div>
      </div>
      <div className={footerStyles.content}>
        <div className={footerStyles.top}>
          <img src={logo} alt='footer logo' />
        </div>
        <div className={footerStyles.hr}>
          <hr />
        </div>
        <div className={footerStyles.main}>
          <div>
            <div className={footerStyles.contacts}>Contact Details</div>
            <h5>USA Office</h5>
            <p>
              3645, Market Place blvd, suite 130
              <br />
              Box 538 East Point Toronto 30344. Canada
            </p>
            <span>Tel: <a href="tel:+12345678901">+12345678901</a></span>
            <br />
            <br />
            <span>Business Enquiries: <a href="mailto:enquiries@asds.com">enquiries@asds.com</a></span>
            <br />
            <span>Customer Care: <a href="mailto:support@asds.com">support@asds.com</a></span>
          </div>
          <div>
            <h5>Nigeria Office</h5>
            <p>
              Plot 121 Moore Street,
              <br />
              Ikoyi, Lagos, Nigeria.
            </p>
            <span>Tel: <a href="tel:+2348012345678">+2348012345678</a></span>
          </div>
        </div>
        <div className={footerStyles.bottom}>
          African Society on Digital Science®, Inc. Toronto, USA © 2022 | All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
