import React from 'react';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className='flex-center gap-3'>
            <button>
                <img src="./public/search.svg" alt="Search"></img>
            </button>
            <button>
                <img src="./public/cart.svg" alt="Bag"></img>
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
