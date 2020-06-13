import PropTypes from 'prop-types';
import React from 'react';

function Layout({ children }) {
  return (
    <div>
      <div className='relative flex flex-col w-screen mx-auto font-sans text-base max-w-1440 md:flex-row'>
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
