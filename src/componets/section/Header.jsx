import React, { useState } from "react";

import Menu from "../header/Menu";

export const Header = ({ isActive, toggleHeader }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive); //반대로 넣어 줄 거임
  };

  return (
    // <header id='header' role='banner' className='side-menu' >
    <header
      id="header"
      role="banner"
      className={isActive ? "active" : "hidden"}
    >
      <Menu />
    </header>
  );
};

export default Header;
