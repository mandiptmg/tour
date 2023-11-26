
const About = () => {
  return (
    <div id="about" className='my-40'>
      <div className='before:bg-[#111] before:absolute before:w-[92vw] before:top-0 before:min-h-[60vh] before:-left-40 before:-z-10 relative h-full w-full'>
        <div className='md:flex w-full grid place-items-center gap-7 md:text-left pt-10 justify-between items-start'>
          <h1 className='text-4xl font-semibold '>About Us</h1>
          <p className='md:max-w-[21rem] text-center mr-20 '>
            We believe in a travelling experience by providing our tour plan
            that suit you the best!{' '}
          </p>
        </div>
        <div className='mt-20 h-full'>
          <iframe
          className='md:aspect-[16/6] aspect-video w-full h-full'
            // width='94%'
            // height='100%'
            src='https://www.youtube.com/embed/EucvD2TJ6xQ?si=rsmp_lBpnNKb_U2G'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default About