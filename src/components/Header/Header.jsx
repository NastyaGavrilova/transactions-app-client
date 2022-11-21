import React from 'react';
import Logo from '../../elements/Logo/Logo';
import './_header.scss';
const Header = () => {
  return (
    <div className="c-header">
      <div className="c-header__wrapper">
        <div className="c-header__container">
          <Logo textLogo={'AppCo'} isHeader={true} />
        </div>
      </div>
    </div>
  );
};

export default Header;
