import PropTypes from 'prop-types';
import React from 'react';

function Layout({ children }) {
  return (
    <div>
      <main className='overflow-x-hidden'>
        <div className='flex flex-col w-screen mx-auto font-sans text-base max-w-1440 md:flex-row'>
          {children}
        </div>
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
