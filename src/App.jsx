
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
import { useState } from 'react';
function App() {
  let [X, setX] = useState();
  let [Y, setY] = useState();
  function handlecursor(e) {

    console.log(e);
    setX(e.pageX);
    setY(e.pageY);
  }

  return (

    <div className='w-screen flex justify-center items-center relative cursor-none'
      onMouseMove={(e) => {
        handlecursor(e);
      }}
    >
      <div className={`h-6 w-6  z-100 rounded-full  bg-white bg-opacity-50  absolute pointer-events-none `} style={{ top: `${Y + "px"}`, left: `${X + "px"}` }}

      >

      </div>

      <div className='max-w-[1250px] w-screen flex flex-col justify-center items-center '

      >


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