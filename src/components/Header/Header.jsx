import React from 'react';
import Logo from '../../elements/Logo/Logo';
import './_header.scss';
const Header = () => {
  return (
    <header className="c-header">
      <div className="c-header__wrapper">
        <Logo textLogo={'AppCo'} isHeader={true} />
      </div>
    </header>
  );
};

export default Header;
