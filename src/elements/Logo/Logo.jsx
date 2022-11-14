import React from 'react';
import './_logo.scss';
const Logo = ({ textLogo, isHeader }) => {
  return (
    <a href="/" className={isHeader ? 'e-logo' : 'e-logo__footer'}>
      {textLogo}
    </a>
  );
};

export default Logo;
