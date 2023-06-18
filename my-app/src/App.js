import { useState, useEffect } from 'react'
import './App.scss'
import { items } from "./data";

function App() {

  const [prevHidenIndex, setPrevHidenIndex] = useState(items.length - 2)
  const [prevIndex, setPrevIndex] = useState(items.length - 1)
  const [activeIndex, setActiveIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [nextHidenIndex, setNextHidenIndex] = useState(2)
  
  const [changeClassPrev, setChangeClassPrev] = useState(false)
  const [changeClassNext, setChangeClassNext] = useState(false)

  
  const nextImage = () => {
      setChangeClassNext(true)
      setTimeout(() => {
          setPrevHidenIndex(prevHidenIndex < items.length - 1 ? prevHidenIndex + 1 : 0)
          setPrevIndex(prevIndex < items.length - 1 ? prevIndex + 1 : 0)
          setActiveIndex(activeIndex < items.length - 1 ? activeIndex + 1 : 0)
          setNextIndex(nextIndex < items.length - 1 ? nextIndex + 1 : 0)
          setNextHidenIndex(nextHidenIndex < items.length - 1 ? nextHidenIndex + 1 : 0)
          setChangeClassNext(false)
      }, 500)
  }

  const prevImage = () => {
      setChangeClassPrev(true)
      setTimeout(() => {
          setPrevHidenIndex(prevHidenIndex > 0 ? prevHidenIndex - 1 : items.length - 1)
          setPrevIndex(prevIndex > 0 ? prevIndex - 1 : items.length - 1)
          setActiveIndex(activeIndex > 0 ? activeIndex - 1 : items.length - 1)
          setNextIndex(nextIndex > 0 ? nextIndex - 1 : items.length - 1)
          setNextHidenIndex(nextHidenIndex > 0 ? nextHidenIndex - 1 : items.length - 1)
          setChangeClassPrev(false)
      }, 500)
  }

      useEffect(() => {
          const intervalCarousel = setTimeout(
              () => nextImage(),
              10000
          )
          return () => {
              clearTimeout(intervalCarousel)
          }
      });


return (
  <div id='carousel'>
      <div className="carousel">
          <ul className="carousel--list">
              <li className='carousel--list--item prevHiden'>
                  <img 
                  src={items[nextHidenIndex]?.image} 
                  alt="" 
                  className={`
                  carousel--list--item--picture 
                  animationHidenOpacity ${changeClassPrev ? 'animationNextPrevHiden' : ""}
                  animationHidenOpacity ${changeClassNext ? 'animationPrevPrevHiden' : ""}
                  `}
                  />
              </li>
              <li 
              className='carousel--list--item prev'
              onClick={nextImage}
              >
                  <img 
                  src={items[nextIndex]?.image} 
                  alt="" 
                  className={`
                  carousel--list--item--picture 
                  animationOpacity 
                  ${changeClassPrev ? 'animationNextPrev' : ""}
                  ${changeClassNext ? 'animationPrevPrev' : ""}
                  `}
                  />
              </li>
              <li className='carousel--list--item active'>
                  <img src={items[activeIndex]?.image} 
                  alt="" 
                  className={`
                  carousel--list--item--picture 
                  ${changeClassPrev ? 'animationNextActive' : ""}
                  ${changeClassNext ? 'animationPrevActive' : ""}
                  `} 
                  />
              </li>
              <li
              className='carousel--list--item next'
              onClick={prevImage}
              >
                  <img 
                  src={items[prevIndex]?.image} 
                  alt="" 
                  className={`
                  carousel--list--item--picture 
                  animationOpacity 
                  ${changeClassPrev ? 'animationNextNext' : ""}
                  ${changeClassNext ? 'animationPrevNext' : ""}
                  `}
                  />
              </li>
              <li className='carousel--list--item nextHiden'>
                  <img 
                  src={items[prevHidenIndex]?.image} 
                  alt="" 
                  className={`
                  carousel--list--item--picture 
                  animationHidenOpacity 
                  ${changeClassPrev ? 'animationNextNextHiden' : ""}
                  ${changeClassNext ? 'animationPrevNextHiden' : ""}
                  `}
                  />
              </li>
          </ul>
      </div>
  </div>
)
}

export default App;
