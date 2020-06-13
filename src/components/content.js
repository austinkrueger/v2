import React from 'react';

function Content() {
  return (
    <div className='static p-32 md:max-w-536 lg:max-w-736 md:absolute md:right-0 lg:py-88 lg:pr-88 md:pl-0'>
      <div id='feature-projects' className='md:pt-88 md:-mt-96'>
        <div className='-my-8 group pt-32 pb-40 md:py-0'>
          <article className='transition md:group-hover:opacity-50 md:hover:opacity-important md:hover:scale-11/10x my-8'>
            <a className='block p-40'>
              <p className='text-xs font-bold tracking-widest uppercase'>
                JavaScript
              </p>
              <h3 className='mt-8 text-lg font-semibold leading-tight'>
                JavaScriptyX
              </h3>
              <p className='mt-8'>
                An item in the list of my featured projects.
              </p>
            </a>
          </article>
          <article className='transition md:group-hover:opacity-50 md:hover:opacity-important md:hover:scale-11/10x my-8'>
            <a className='block p-40'>
              <p className='text-xs font-bold tracking-widest uppercase'>
                Python
              </p>
              <h3 className='mt-8 text-lg font-semibold leading-tight'>
                Pythonerism
              </h3>
              <p className='mt-8'>
                Another item in my list of featured projects; this one is in
                python.
              </p>
            </a>
          </article>
        </div>
      </div>
      <div id='projects'></div>
      <div id='contact'></div>
    </div>
  );
}

export default Content;
