import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Make sure the file is correctly named and imported

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the scroll value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header_logo">
      <div className="header__content__logo">
        <h1 className="header__name__logo">
          <span className="header__name--first">DR</span> <span className="header__name--last">Nabil</span>
        </h1>
        <a href="#contact" className={`header__button ${isScrolled ? 'transparent' : ''}`}>Work with me</a>
      </div>
    </header>
  );
};

export default Header;