import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/intro';
import Content from '../components/content';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Austin Krueger'
      />
      <Intro />
      <Content />
    </Layout>
  );
}

export default IndexPage;
