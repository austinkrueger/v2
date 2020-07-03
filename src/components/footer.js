import React from 'react';
import * as github from '../images/github.svg';
function Footer() {
  return (
    <div className='flex items-center w-full mt-32 md:mt-72'>
      <ul className='flex -mx-16'>
        <li className='mx-16'>
          <a
            href='https://github.com/austinkrueger'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center'>
            <img src={github} className='w-16 h-16 mr-16 fill-current' />
            <span className='mt-px'>GitHub</span>
          </a>
        </li>
        <li className='mx-16'>
          <a
            href={'../resume.pdf'}
            target='_blank'
            rel='noopener noreferrer nofollow'
            className='flex items-center'>
            <span className='mt-px'>Resume</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
