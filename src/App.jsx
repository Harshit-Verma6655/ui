
import Header from './components/Header';
import { HeroSection } from './components/Hero';
import Invest from './components/Invest';
import Card from './components/Card';
import Blog from './components/Blog';
import Explore from './components/Explore';
import Connect from './components/Connect';
import Testimonals from './components/Testimonals';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {


  return (
    <div className='w-full flex justify-center'>
      <div className='w-[1250px] flex flex-col justify-center items-center'>

        <Header />
        <HeroSection />
        <Invest />
        <Card />
        <Blog />
        <Explore />
        <Connect />
        <Testimonals />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App