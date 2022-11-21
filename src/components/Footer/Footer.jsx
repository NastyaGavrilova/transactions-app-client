import React from 'react';
import Logo from '../../elements/Logo/Logo';
import './_footer.scss';
const Footer = () => {
  return (
    <div className="c-footer">
      <div className="c-footer__wrapper">
        <div className="c-footer__container">
          <Logo isHeader={false} textLogo="AppCo" />
          <p className="c-footer__rights">All rights reserved by ThemeTags</p>
          <p className="c-footer__rights">Copyrights &#169; 2019. </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
