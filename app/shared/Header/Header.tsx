import React from 'react';
import Logo from './components/Logo';
import PortfolioLink from './components/PortfolioLink';
import Link from 'next/link';

import Dropdown from './components/Dropdown'; 

import menuItems from './data/menuItems';
import CartLink from './components/CartLink';
import SearchInput from './components/SearchInput';

const Header = () => {
  return (
    <div className="shadow-lg">
      <div className="justify-center items-center bg-gradient-to-r from-caribean to-caribean-light h-14 flex">
        <div className='flex justify-center items-center md:hidden'>
          <Logo />
        </div>
        <ul className="hidden md:flex space-x-30 text-white font-light tracking-wide">
          <li className="text-white-smoke font-semibold">Doprava zadarmo nad 100$</li>
          <li className="text-white-smoke font-semibold">Vrátenie do 30 dní zadarmo</li>
          <li className="text-white-smoke font-semibold">Záruka vratenia penazí</li>
          <li className="text-white-smoke font-semibold">Kontakt</li>
        </ul>
      </div>

      <div className="flex items-center bg-dark-gray w-full shadow-md h-20">
        <div className="w-24 justify-start hidden md:flex ">
          <Logo />
        </div>
        <div className="flex-1 flex justify-center">
          <SearchInput />
        </div>
        <CartLink />
        <div className="flex-shrink-0 w-32 hidden md:flex ">
          <PortfolioLink />
        </div>
      </div>

      <div className="flex justify-center items-center bg-medium-gray px-6 py-2 shadow">
        <ul className="flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Dropdown item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;