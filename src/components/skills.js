import React from 'react';
import Languages from './languages';
import Frameworks from './frameworks';
function Skills() {
  return (
    <div id='skills' className='md:pt-88 md:-mt-96'>
      <h2 className='sticky top-0 z-40 pt-24 text-sm font-bold tracking-widest uppercase md:sr-only'>
        Skills
      </h2>
      <p className='text-xs tracking-widest uppercase mt-24 mb-16 p-16'>
        Programming Languages
      </p>
      <Languages />
      <p className='text-xs tracking-widest uppercase mt-24 mb-16 p-16'>
        Tools &amp; Frameworks
      </p>
      <Frameworks />
    </div>
  );
}

export default Skills;
