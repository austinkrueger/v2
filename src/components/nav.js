import React from 'react';
import { Link } from 'react-scroll';
function Nav() {
  return (
    <nav className='text-sm font-bold uppercase text-widest hidden mt-72 md:block'>
      <ul className='flex flex-row md:flex-col md:-my-16'>
        <li className='md:my-16'>
          <Link
            className='inline-flex items-center nav-link'
            to='skills'
            spy={true}
            smooth={true}
            duration={500}>
            <span className='text-xs tracking-widest uppercase'>Skills</span>
          </Link>
        </li>
        <li className='md:my-16'>
          <Link
            className='inline-flex items-center nav-link'
            to='projects'
            spy={true}
            smooth={true}
            duration={500}>
            <span className='text-xs tracking-widest uppercase'>Projects</span>
          </Link>
        </li>
        <li className='md:my-16'>
          <Link
            className='inline-flex items-center nav-link'
            to='contact'
            spy={true}
            smooth={true}
            duration={500}>
            <span className='text-xs tracking-widest uppercase'>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
