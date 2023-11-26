
const Hero = () => {
  return (
    <div className='mb-20 before:bg-gradient-to-b before:-z-10 before:h-screen before:w-full before:absolute before:top-0 before:left-0 before:from-transparent before:to-black '>
      <div className='before:h-screen before:w-full before:absolute before:top-0 before:left-0  before:bg-[url(https://c4.wallpaperflare.com/wallpaper/600/360/964/digital-art-landscape-forest-mountains-wallpaper-preview.jpg)] before:bg-no-repeat before:bg-cover before:bg-blend-overlay before:-z-20 flex justify-start items-center h-[80vh] gap-4  w-full '>
        <div className='grid pt-20 gap-7'>
          <p className='max-w-xl text-5xl font-semibold'>
            Tour around the world with the new destination
          </p>
          <p className='max-w-md text-base'>
            We believe in a travelling experience by providing our tour plan
            that suits your the best!
          </p>
          <div>
            <button className='bg-orange-600 px-4 py-2'>
              <a href='#'>Explore now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero