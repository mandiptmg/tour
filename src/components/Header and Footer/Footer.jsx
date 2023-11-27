import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer data-aos='fade-up' className='my-20 w-[90vw] md:w-[80vw] mx-auto'>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-10 items-start'>
        <div>
          <h1>
            {' '}
            <a href='home' className='text-2xl font-semibold'>
              Toury
            </a>
          </h1>
          <div className='mt-7'>
            <ul className='text-sm font-medium'>
              <li>
                {' '}
                <p>1920 Holden Street San Deigo, LA</p>
              </li>
              <li>
                {' '}
                <p className='mt-2'>Call us: 1-800-323-3829 </p>
              </li>
            </ul>
          </div>
          <div>
            <ul className='flex gap-x-4 text-xs mt-4'>
              <li>
                <a href='#'>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href='#'>
                  <FaFacebook />
                </a>
              </li>{' '}
              <li>
                <a href='#'>
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='md:text-center'>
          <h1 className='text-2xl font-semibold'>Tour</h1>
          <div className='mt-7'>
            <ul className='grid gap-y-2'>
              <li>Nepal</li>
              <li>Japan</li>
              <li>Maldives</li>
              <li>Korea</li>
            </ul>
          </div>
        </div>
        <div className='md:text-center'>
          <h1 className='text-2xl font-semibold'>Company</h1>
          <div className='mt-7'>
            <ul className='grid gap-y-2'>
              <li>About us</li>
              <li>Blog</li>
              <li>Media</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className='md:text-center'>
          <h1 className='text-2xl font-semibold'>Resources</h1>
          <div className='mt-7'>
            <ul className='grid gap-y-2'>
              <li>Blog</li>
              <li>Review</li>
              <li>Help Center</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='text-center mt-20'>
        <p>
          © {new Date().getFullYear()} Travel. All rights reserved | Made with{' '}
          {'Mandip Tamang '}
        </p>
      </div>
    </footer>
  )
}

export default Footer
