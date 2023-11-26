import Header from './components/Header and Footer/Header'
import Hero from './components/Hero'
import Blog from './components/Blog'
import About from './components/About'
import Destination from './components/Destination'
import Footer from './components/Header and Footer/Footer'
import Explore from './components/Explore'
const App = () => {
  return (
    <div>
      <div className='md:w-[80vw] w-[90vw] mx-auto max-w-7xl'>
        <Header />
        <div>
          <Hero />
          <Explore/>
          <About/>
          <Destination/>
          <Blog/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
