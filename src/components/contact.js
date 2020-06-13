import React from 'react';
import * as headshot from '../images/headshot.jpg';
function Contact() {
  return (
    <div id='contact' className='md:pt-88'>
      <h2 className='sticky top-0 z-40 pt-24 text-sm font-bold tracking-widest uppercase md:sr-only'>
        Contact
      </h2>
      <div className='-my-8 group pt-32 pb-40 md:py-0'>
        <article className='rounded bg-zenith my-8'>
          <div className='block p-40'>
            <div className='flex items-center'>
              <img src={headshot} className='headshot-image' />
              <h3 className='mx-24 text-lg font-semibold leading-tight'>
                Austin Krueger
              </h3>
            </div>
            <span className='my-16 text-sm block leading-loose'>
              Thank you for taking the time to look at my personal site! I had a
              difficult time deciding how I wanted it too look, and eventually
              came to the conclusion that I shouldn&apos;t reinvent the wheel.
            </span>
            <span className='my-16 text-sm block leading-loose'>
              The personal sites of both{' '}
              <a className='highlight-link'>Sarah Dayan</a> and{' '}
              <a className='highlight-link'>Brittany Chiang</a> were huge
              sources of inspiration, so please check those out as well.
            </span>
            <h4 className='my-16 text-base font-semibold'>
              Here are some ways you can contact me:
            </h4>
            <div className='flex justify-around items-center p-24'>
              <a>LinkedIn</a>
              <a>Messenger</a>
              <a>Email</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Contact;
