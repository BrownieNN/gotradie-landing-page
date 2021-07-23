import React, { useState } from "react"
import styled from "styled-components"

export const CarouselItem = ({ children, width }) => {
  return (
    <CarouselItemWrapper style={{ width: width }}>
      {children}
    </CarouselItemWrapper>
  )
}

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = newIndex => {
    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1
    }

    setActiveIndex(newIndex)
  }

  return (
    <CarouselWrapper>
      <CarouselInner
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" })
        })}
      </CarouselInner>

      <Indicators>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index)
              }}
            >
              {index + 1}
            </button>
          )
        })}
      </Indicators>
    </CarouselWrapper>
  )
}

export default Carousel

const CarouselItemWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: green;
  color: white;
`

const CarouselWrapper = styled.div`
  overflow: hidden;
`

const CarouselInner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`
const Indicators = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 5px;

    :hover {
      background-color: pink;
    }
  }

  button.active {
    background-color: green;
    color: white;
  }
`
