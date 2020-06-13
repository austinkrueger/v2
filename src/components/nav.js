import React from 'react';

function Nav() {
  return (
    <nav className='text-sm font-bold uppercase text-widest hidden mt-72 md:block'>
      <ul className='flex flex-row md:flex-col md:-my-16'>
        <li className='md:my-16'>
          <a href='#skills' className='inline-flex items-center nav-link'>
            <span className='text-xs tracking-widest uppercase'>Skills</span>
          </a>
        </li>
        <li className='md:my-16'>
          <a href='#projects' className='inline-flex items-center nav-link'>
            <span className='text-xs tracking-widest uppercase'>Projects</span>
          </a>
        </li>
        <li className='md:my-16'>
          <a href='#contact' className='inline-flex items-center nav-link'>
            <span className='text-xs tracking-widest uppercase'>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
