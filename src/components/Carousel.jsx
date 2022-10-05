import { useState } from 'react'
import '../styles/carousel.scss'
import prev from "../data/arrow_backward.svg"
import next from '../data/arrow_forward.svg'

const Slider=({slides})=>{
    const [current,setCurrent]=useState(0)
    const length=slides.length
    const nextSlide=()=>{
        setCurrent(current=== length -1 ? 0: current + 1)
    }
    const prevSlide=()=>{
        setCurrent(current === 0 ? length - 1: current - 1)
    }
    return(
        <div>
        <button className="left-arrow"
        onClick={prevSlide}>{prev}</button>

        <button className="right-arrow"
          onClick={nextSlide}
        >{next}</button>

        {slides.map((slide, index) => {
          return (
            <div key={index}>
              {index === current && (
                <img src={slide} alt=""></img>
              )}
            </div>
          );
        })}
        </div>
    );
  };
  
  export default Slider;