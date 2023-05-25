"use client";
import { useState } from 'react';
 import './navbar.css';
import Image from 'next/image';


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Image src="/logo.svg" alt="logo da Multiclinica" width={150} height={150} />
      </div>
      <button className="navbar__toggle" onClick={handleNavToggle}>
        {isNavOpen ? 'Fechar' : 'Menu'}
      </button>
      <ul className={`navbar__links ${isNavOpen ? 'open' : ''}`}>
        <li className="navbar__item itens">A Clinica</li>
        <li className="navbar__item itens">Serviços</li>
        <li className="navbar__item itens">Convênios</li>
        <li className="navbar__item itens itens__4">Contato</li>
      </ul>
    </nav>
  );
};

export default Navbar;