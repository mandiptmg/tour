import React from 'react'

const blog = () => {
  return (
    <div id='blog' className='my-20 bg-[#111]'>
      <h1
        data-aos='fade-up'
        className='p-20 text-3xl md:text-4xl font-semibold'
      >
        Read awesome blog
      </h1>
      <div data-aos='fade-up' className='grid gap-7'>
        <div className='grid md:grid-cols-[1fr,2fr,1fr] px-20 gap-y-4 items-start'>
          <div className='flex justify-start items-start'>
            <h1 className='text-center text-3xl font-bold'>
              10 <span className='block font-light text-base'>April 2023</span>
            </h1>
          </div>
          <p className='text-2xl font-medium'>
            Tips and tools for hosting in multiple languages
          </p>
          <div className='md:text-center'>
            <button className='text-orange-600 font-medium'>Read More</button>
          </div>
        </div>
        <div className='grid md:grid-cols-[1fr,2fr,1fr] px-20 gap-y-4 items-start'>
          <div className='flex justify-start items-start'>
            <h1 className='text-center text-3xl font-bold'>
              08 <span className='block font-light text-base'>April 2023</span>
            </h1>
          </div>
          <p className='text-2xl font-medium'>
            Staging your home environment for your online experience
          </p>
          <div className='md:text-center'>
            <button className='text-orange-600 font-medium'>Read More</button>
          </div>
        </div>{' '}
        <div className='grid md:grid-cols-[1fr,2fr,1fr] px-20 gap-y-4 items-start'>
          <div className='flex justify-start items-start'>
            <h1 className='text-center text-3xl font-bold'>
              03 <span className='block font-light text-base'>April 2023</span>
            </h1>
          </div>
          <p className='text-2xl font-medium'>
            Writing a clear and specific experience itinerary
          </p>
          <div className='md:text-center'>
            <button className='text-orange-600 font-medium'>Read More</button>
          </div>
        </div>
      </div>
      <div data-aos='fade-up' className='px-20'>
        <button className='text-xl bg-orange-500 px-4 py-2 mt-10 capitalize mb-20'>
          see all move
        </button>
      </div>
    </div>
  )
}

export default blog