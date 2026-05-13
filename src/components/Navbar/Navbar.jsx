import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="logo">
        <span className="brand-logo">Coffee Time</span>
      </a>

      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#menu" onClick={() => setIsOpen(false)}>Coffee Menu</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a>
        <button className="btn" onClick={() => setIsOpen(false)}>Coffee Shop</button>
      </nav>

      <div className="icons">
        <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
