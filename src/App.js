import './App.css';
import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from 'react';
import images from "./images";

function App() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(()=>{
    console.log(carousel, carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[]);

  return (    
    <div className="App">
      <motion.div ref={carousel} className="carousel">
        <motion.div drag="x" dragConstraints={{right:0, left: -width }} className='inner-carousel' whileTap={{cursor:"grabbing"}}>
          {images.map((image)=>{
            return(
              <motion.div className='item' key={image}>
                <img src={image} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
