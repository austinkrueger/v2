import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/intro';
import Content from '../components/content';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          'austin',
          'krueger',
          'portfolio',
          'software',
          'engineer',
          'frontend',
          'backend',
          'fullstack',
          'developer',
          'programmer',
          'resume',
        ]}
        title='Austin Krueger'
      />
      <div className='md:hidden'>
        <div className='fixed top-0 left-0 z-30 w-full h-64 transition bg-lightgrey -shift-y-64'></div>
        <div className='fixed top-0 left-0 z-50 w-full h-64 transition -shift-y-64'>
          <div className='absolute top-0 w-full h-24 gradient-y-lightgrey-transparent'></div>
          <div className='absolute bottom-0 w-full h-24 gradient-y-transparent-lightgrey'></div>
        </div>
        <div className='fixed top-0 left-0 z-50 w-full h-32 mt-64 transition gradient-y-nearblack-transparent -shift-y-96'></div>
      </div>
      <Intro />
      <Content />
      <div className='fixed bottom-0 left-0 z-20 w-full h-32 pointer-events-none gradient-y-transparent-lightgrey'></div>
      <div className='fixed top-0 left-0 z-20 w-full h-32 pointer-events-none gradient-y-lightgrey-transparent'></div>
    </Layout>
  );
}

export default IndexPage;
