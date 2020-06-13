import React from 'react';
import * as headshot from '../images/headshot.jpg';
function Intro() {
  return (
    <div className='static flex flex-col justify-between w-full p-32 md:max-w-408 lg:max-w-496 md:fixed md:h-screen lg:py-88 lg:pl-88 md:pr-0'>
      <div className='flex flex-col'>
        <div>
          <h1 className='text-2xl font-bold leading-tight lg:text-3xl lg:leading-none'>
            Hello there!{' '}
            <span role='img' aria-label='waving-hand'>
              👋🏻
            </span>
            <br />
            I&apos;m Austin Krueger.
          </h1>
          <div className='leading-loose'>
            <p className='mt-32'>
              I&apos;m a Software Engineer currently working full-stack on web
              applications at{' '}
              <a
                href='https://www.wildcardcorp.com'
                target='_blank'
                rel='noopener noreferrer'
                className='highlight-link'>
                Wildcard
              </a>
              . I specialize in creating user-focused interfaces and speedy
              APIs. Although my expertise is in{' '}
              <a
                href='https://angular.io'
                target='_blank'
                rel='noopener noreferrer'
                className='highlight-link'>
                Angular
              </a>{' '}
              and{' '}
              <a
                href='https://www.python.org'
                target='_blank'
                rel='noopener noreferrer'
                className='highlight-link'>
                Python
              </a>
              , I&apos;ve been writing more tests and trying new languages and
              frameworks.
            </p>
          </div>
        </div>
        <nav className='text-sm font-bold uppercase text-widest hidden mt-72 md:block'>
          <ul className='flex flex-row md:flex-col md:-my-16'>
            <li className='md:my-16'>
              <a
                href='#feature-projects'
                className='inline-flex items-center nav-link'>
                Feature Projects
              </a>
            </li>
            <li className='md:my-16'>
              <a href='#projects' className='inline-flex items-center nav-link'>
                More Projects
              </a>
            </li>
            <li className='md:my-16'>
              <a href='#contact' className='inline-flex items-center nav-link'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='flex items-center w-full mt-32 md:mt-72'>
        {/* <Image /> */}
        <img
          src={headshot}
          className='w-48 h-48 mr-32 rounded-full g-image g-image--lazy g-image--loaded'
        />
        <ul className='flex -mx-16'>
          <li className='mx-16'>
            <a
              href='https://github.com/austinkrueger'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                aria-hidden='true'
                className='w-16 h-16 mr-16 fill-current'>
                <title>GitHub icon</title>
                <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'></path>
              </svg>
              <span className='mt-px'>GitHub</span>
            </a>
          </li>
          <li className='mx-16'>
            <a
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center'>
              <span className='mt-px'>Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Intro;
