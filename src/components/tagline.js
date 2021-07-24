import React from 'react';
function Tagline() {
  return (
    <div>
      <h1 className='text-2xl font-bold leading-tight lg:text-3xl lg:leading-none'>
        Hello there!{' '}
        <span role='img' aria-label='waving-hand'>
          👋
        </span>
        <br />
        I&apos;m Austin.
      </h1>
      <div className='leading-loose'>
        <p className='mt-32'>
          I&apos;m a Software Engineer currently working full-stack on web
          applications at{' '}
          <a
            href='https://www.expertinstitute.com'
            target='_blank'
            rel='noopener noreferrer'
            className='highlight-link'>
            Expert Institute
          </a>
          . I specialize in creating user-focused interfaces and speedy APIs.
          Although my expertise is in{' '}
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
          , I&apos;ve been learning more about testing tools and trying new
          languages and frameworks.
        </p>
      </div>
    </div>
  );
}

export default Tagline;
