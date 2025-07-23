// Header.tsx
import React from 'react';
import Logo from './components/Logo/Logo';
import PortfolioLink from './components/PortfolioLink/PortfolioLink';
const Header = () => {
  return (
    <div className="shadow-lg">
      <div className="justify-center items-center bg-gradient-to-r from-caribean to-caribean-light py-2 flex">
        <div className='flex justify-center items-center md:hidden'>
          <Logo />
        </div>
        <ul className="hidden md:flex space-x-14 text-white font-light tracking-wide">
          <li><a href="#" className="text-white-smoke hover:text-yellow-300 transition">Doprava zadarmo nad 100$</a></li>
          <li><a href="#" className="text-white-smoke hover:text-yellow-300 transition">Vrátenie do 30 dní zadarmo</a></li>
          <li><a href="#" className="text-white-smoke hover:text-yellow-300 transition">Záruka vratenia penazí</a></li>
          <li><a href="#" className="text-white-smoke hover:text-yellow-300 transition">Kontakt</a></li>
        </ul>
      </div>

     <div className="flex items-center bg-dark-gray w-full shadow-md">

      <div className="w-32 justify-start hidden md:flex">
        <Logo />
      </div>
      
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-xs">
          <input
            type="text"
            placeholder="Hľadať..."
            className="w-full text-center text-2xl px-4 py-2 rounded-lg bg-medium-gray text-amber-50 placeholder-amber-100 focus:outline-none focus:ring-2 focus:ring-caribean transition shadow-inner"
          />
        </div>
      </div>
      
      <div className="flex-shrink-0 w-32 hidden md:flex ">
        <PortfolioLink />
      </div>
    </div>

      <div className="flex justify-center items-center bg-medium-gray px-6 py-2 shadow">
        <ul className="flex space-x-6">
          <li><a href="#" className="text-white font-medium hover:text-yellow-300 transition">Obuv</a></li>
          <li><a href="#" className="text-white font-medium hover:text-yellow-300 transition">Oblečenie</a></li>
          <li><a href="#" className="text-white font-medium hover:text-yellow-300 transition">Vybavenie</a></li>
          <li><a href="#" className="text-white font-medium hover:text-yellow-300 transition">Výživa</a></li>
          <li><a href="#" className="text-white font-medium hover:text-yellow-300 transition">Bazár</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
