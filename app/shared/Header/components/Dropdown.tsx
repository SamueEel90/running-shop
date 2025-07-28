import React from 'react';
import Link from 'next/link';
import { MenuItem } from '../data/menuItems';

interface Props {
  item: MenuItem;
}

export default function Dropdown({ item }: Props) {
  const menuItems = item?.children ? item.children : [];

  return (
    <div className="relative group">
      <Link href={item.route || '#'} className="hover:text-blue-400 text-white-smoke px-2 py-1">
        {item.title}
      </Link>

      {menuItems.length > 0 && (
        <div
          className="absolute left-0 top-full z-30 w-[450px] min-h-[100px] flex-col py-4 bg-white-smoke rounded-md shadow-lg
          hidden group-hover:flex group-focus-within:flex"
        >
          {menuItems.map(child => (
            <Link
              key={child.route}
              className=" hover:text-dark-gray px-4 py-1"
              href={child?.route || ''}
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
