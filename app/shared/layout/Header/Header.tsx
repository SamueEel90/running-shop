import React from 'react';
import Logo from './components/Logo';
import Dropdown from './components/Dropdown';
import menuItems from './data/menuItems';
import CartLink from './components/CartLink';
import SearchDropdown from './components/SearchDropdown';
import Link from 'next/link';
const Header: React.FC = () => {
  return (
    <div className="shadow-lg">
      <div className="justify-center items-center bg-gradient-to-r from-caribean to-caribean-light h-14 flex">
        <div className="flex justify-center items-center md:hidden">
          <Logo />
        </div>
        <ul className="hidden md:flex space-x-40 text-white font-light ">
          <li className="text-white-smoke font-semibold">Doprava zadarmo nad 100$</li>
          <li className="text-white-smoke font-semibold">Vrátenie do 30 dní zadarmo</li>
          <li className="text-white-smoke font-semibold">Záruka vratenia penazí</li>
        </ul>
      </div>

   <div className="flex items-center justify-between bg-dark-gray w-full shadow-md h-20">
  {/* Logo Section */}
  <div className="hidden md:flex w-24">
    <Logo />
  </div>

  {/* Search Section */}
  <div className=" flex mx-4">
    <SearchDropdown />
  </div>

  {/* Navigation Links */}
  <div className="hidden lg:flex text-white text-md  h-full py-4">
    <Link className='flex justify-center items-center hover:bg-medium-gray transition rounded-sm px-8' href="/support">Pomoc</Link>
    <Link className='flex justify-center items-center hover:bg-medium-gray transition rounded-sm px-8' href="/sale">Vypredaj</Link>
    <Link className='flex justify-center items-center hover:bg-medium-gray transition rounded-sm px-8' href="/profile">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block align-middle"
      >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    </Link>
    <Link className='flex justify-center items-center hover:bg-medium-gray transition rounded-sm px-8' href="/about">O nás</Link>
  </div>

  {/* Cart Section */}
  <div className="ml-4">
    <CartLink />
  </div>
</div>


      <div className="flex items-center bg-medium-gray shadow">
        <ul className="flex  text-lg">
          {menuItems.map((item) => (
            <div key={item.title}  className=' hover:bg-dark-gray transition rounded-sm'>
            <li className="font-semibold text-white hover:text-caribean transition my-4 mx-6">
              <Dropdown item={item} />
            </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
