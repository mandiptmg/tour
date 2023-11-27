import im1 from '../assets/img/im1.jpg'
import im2 from '../assets/img/im2.jpg'
import im3 from '../assets/img/im3.jpg'
import im4 from '../assets/img/im4.jpg'
import im5 from '../assets/img/im5.jpg'
import im6 from '../assets/img/im6.jpg'
import im7 from '../assets/img/im7.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

//import required modules
import { FreeMode, Navigation, Mousewheel, Keyboard } from 'swiper/modules'
import { useEffect, useState } from 'react'

const data = [
  { img: im1 },
  { img: im2 },
  { img: im3 },
  { img: im4 },
  { img: im5 },
  { img: im6 },
  { img: im7 },
]

const info = [
  { title: 'Various Destinations' },
  { title: ' Everything is included' },
  { title: 'Affordable prices' },
]

const Explore = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setShow(window.innerWidth >= 640)
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div id='discover' className='my-20'>
      <div data-aos='fade-right'>
        <p className='text-4xl max-w-sm font-semibold'>
          Explore place around the world
        </p>
      </div>
      <div className='mt-16'>
        <Swiper
          slidesPerView={show ? 3 : 1}
          spaceBetween={30}
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          freeMode={true}
          modules={[Navigation, FreeMode, Mousewheel, Keyboard]}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide>
                <img
                  data-aos='fade-left'
                  key={index}
                  src={item.img}
                  className='md:aspect-[3/4] aspect-square hover:opacity-70 cursor-pointer relative object-cover'
                />
                <h1
                  data-aos='fade-up'
                  className='absolute text-left md:px-5 px-3 font-medium md:text-4xl text-lg bottom-4 w-full left-auto'
                >
                  Perfect place for adventure
                </h1>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className='my-20'>
        <div data-aos='fade-up' className='max-w-sm  mx-auto'>
          <h1 className='md:text-4xl text-2xl text-center'>
            What can we offer for you
          </h1>
        </div>
        <div
          data-aos='fade-up'
          className='grid md:grid-cols-3 items-center gap-10 mt-7 '
        >
          {info.map((item) => {
            return (
              <article className='rounded-2xl aspect-auto bg-[#111] py-5 px-10'>
                <h1 className='text-4xl text-orange-600 font-semibold '>
                  {item.title}
                </h1>
                <p className='mt-5'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid exercitationem deserunt cumque reiciendis.
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Explore
