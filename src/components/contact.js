import React from 'react';
import * as headshot from '../images/headshot.jpg';
import socials from '../data/socials.json';

function Contact() {
  return (
    <div id='contact' className='md:pt-88'>
      <h2 className='top-0 z-40 pt-24 text-sm font-bold tracking-widest uppercase md:sr-only'>
        Contact
      </h2>
      <div className='-my-8 group pt-32 pb-40 md:py-0'>
        <article className='rounded bg-white my-8'>
          <div className='block p-40'>
            <div className='flex items-center'>
              <img src={headshot} className='headshot-image' />
              <h3 className='mx-24 text-lg font-semibold leading-tight'>
                Austin Krueger
              </h3>
            </div>
            <span className='my-16 text-sm block leading-loose'>
              Thank you for taking the time to look at my personal site! I had a
              difficult time deciding how I wanted it to look, and eventually
              came to the conclusion that I shouldn&apos;t reinvent the wheel.
            </span>
            <span className='my-16 text-sm block leading-loose'>
              The personal sites of both{' '}
              <a className='highlight-link' href='https://sarahdayan.com'>
                Sarah Dayan
              </a>{' '}
              and{' '}
              <a className='highlight-link' href='https://brittanychiang.com'>
                Brittany Chiang
              </a>{' '}
              were huge sources of inspiration, so please check those out as
              well.
            </span>
            <h4 className='my-16 text-base font-semibold'>
              Here are some ways you can contact me:
            </h4>
            <div className='flex flex-wrap justify-center -my-4 md:-m-4 group pt-32 pb-40 md:py-0'>
              {socials.map((social, index) => {
                return (
                  <article
                    className='flex-none w-full my-4 md:m-4 md:w-160 md:min-h-64 lg:w-160 lg:min-h-64'
                    key={`social_item_${index}`}
                    onClick={() => window.open(social.link, '_blank')}>
                    <div className='flex justify-center items-center rounded bg-white w-full h-full p-8 min-h-inherit md:group-hover:opacity-50 md:hover:opacity-important transition'>
                      <div className='flex justify-center'>
                        <img
                          src={social.icon}
                          className='w-16 h-16 mr-16 mt-2'
                        />
                        <p className='card-item-text'>{social.name}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Contact;
