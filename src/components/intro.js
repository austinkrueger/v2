import React from 'react';
import Footer from './footer';
import Tagline from './tagline';
import Nav from './nav';
function Intro() {
  return (
    <div className='static flex flex-col justify-between w-full p-32 md:max-w-408 lg:max-w-496 md:fixed md:h-screen lg:py-88 lg:pl-88 md:pr-0'>
      <div className='flex flex-col'>
        <Tagline />
        <Nav />
      </div>
      <Footer />
    </div>
  );
}

export default Intro;
