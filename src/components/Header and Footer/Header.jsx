
const Header = () => {
  return (
    <div className=''>
      <nav className='flex h-20 justify-between items-center'>
        <div>
          <a href='#home' className='text-2xl  font-semibold'>
            Toury
          </a>
        </div>
        <div>
          <ul className='capitalize flex items-center gap-4'>
            <li>
              <a href='#discover'>discover</a>
            </li>
            <li>
              <a href='#about'>about us</a>
            </li>
            <li>
              <a href='#blog'>blog</a>
            </li>{' '}
          </ul>
        </div>
        <div>
          <button className='bg-white/50 p-2'>Login</button>
        </div>
      </nav>
    </div>
  )
}

export default Header