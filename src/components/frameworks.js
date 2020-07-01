import React from 'react';
import frameworks from '../data/frameworks.json';

function Frameworks() {
  return (
    <div className='flex flex-wrap justify-center -my-4 md:-m-4 group pt-32 pb-40 md:py-0'>
      {frameworks.map((framework, index) => {
        return (
          <article
            className='flex-none w-full my-4 md:m-4 md:w-160 md:min-h-64 lg:w-160 lg:min-h-64'
            key={`framework_item_${index}`}>
            <div className='flex justify-center items-center rounded bg-white w-full h-full p-8 min-h-inherit md:group-hover:opacity-50 md:hover:scale-11/10x md:hover:opacity-important transition'>
              <div className='flex justify-center'>
                <img
                  src={framework.icon}
                  className='w-16 h-16 mr-16 fill-current mt-2'
                />
                <p>{framework.name}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Frameworks;
