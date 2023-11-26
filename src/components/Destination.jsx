import img1 from '../assets/destination/pokhara.jpg'
import img2 from '../assets/destination/Dubai,UAE.jpg'
import img3 from '../assets/destination/Italy.jpg'
import img4 from '../assets/destination/Sydney, Australia.jpg'
import img5 from '../assets/destination/tokyo.jpg'
import img6 from '../assets/destination/Majestic Peru.jpg'
import { useState } from 'react'

const data = [
 {title:'Pokhara, Nepal', price:200, img:img1},
 {title:'Dubai, UAE', price:700, img:img2},
 {title:'Venice,Italy', price:800, img:img3},
 {title:'Sydney, Australia', price:900, img:img4},
 {title:'Tokyo, Japan', price:1000, img:img5},
 {title:'Majestic Peru', price:1200, img:img6}
 
]

const Destination = () => {
 const [visit,setVisit] = useState(false);
  return (
    <div className='my-20'>
      <div className='flex items-end mb-10 justify-between'>
        <h1 className='text-4xl font-semibold'>
          We provide top <span className='block'>Destination</span>
        </h1>
        <button
          onClick={() => setVisit(!visit)}
          className='capitalize p-1 text-sm bg-orange-600'
        >
          visit {visit ? 'none' : 'all'}
        </button>
      </div>
      <div className='grid md:grid-cols-3 items-center gap-4'>
        {visit
          ? data
              .map((item) => {
                return (
                  <article className='w-ful h-full hover:opacity-50 cursor-pointer'>
                    <img
                      src={item.img}
                      alt={item.title}
                      className='aspect-[1/1.2] object-cover'
                    />
                    <h2 className='text-2xl mt-1 font-medium'>{item.title}</h2>
                    <p className='text-lg font-medium text-orange-600'>
                      ${item.price}
                    </p>
                  </article>
                )
              })
             
          : data
              .map((item) => {
                return (
                  <article className='w-ful h-full hover:opacity-50 cursor-pointer'>
                    <img
                      src={item.img}
                      alt={item.title}
                      className='md:aspect-[1/1.2] object-cover aspect-square'
                    />
                    <h2 className='text-2xl mt-1 font-medium'>{item.title}</h2>
                    <p className='text-lg font-medium text-orange-600'>
                      ${item.price}
                    </p>
                  </article>
                )
              })
              .slice(0, 3)}
      </div>
    </div>
  )
}

export default Destination