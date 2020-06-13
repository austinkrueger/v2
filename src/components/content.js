import React from 'react';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';

function Content() {
  return (
    <div className='static p-32 md:max-w-536 lg:max-w-736 md:absolute md:right-0 lg:py-88 lg:pr-88 md:pl-0'>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Content;
