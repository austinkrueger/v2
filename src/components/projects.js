import React from 'react';
function Projects() {
  return (
    <div id='projects' className='md:pt-88'>
      <h2 className='sticky top-0 z-40 pt-24 text-sm font-bold tracking-widest uppercase md:sr-only'>
        Projects
      </h2>
      <div className='-my-8 group pt-32 pb-40 md:py-0'>
        <article className='transition md:group-hover:opacity-50 md:hover:opacity-important rounded bg-zenith md:hover:scale-11/10x my-8'>
          <a className='block p-40'>
            <p className='text-xs font-bold tracking-widest uppercase'>
              JavaScript
            </p>
            <h3 className='mt-8 text-lg font-semibold leading-tight'>
              JavaScriptyX
            </h3>
            <p className='mt-8'>An item in the list of my featured projects.</p>
          </a>
        </article>
        <article className='transition md:group-hover:opacity-50 md:hover:opacity-important rounded bg-zenith md:hover:scale-11/10x my-8'>
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
        <article className='transition md:group-hover:opacity-50 md:hover:opacity-important rounded bg-zenith md:hover:scale-11/10x my-8'>
          <a className='block px-40 py-24'>
            <p className='text-xs my-10 font-bold tracking-widest uppercase'>
              Load More
            </p>
          </a>
        </article>
      </div>
    </div>
  );
}

export default Projects;
