import React from 'react'
import Carousel from 'better-react-carousel'

const Gallery = () => {
  return (
    <Carousel cols={1} rows={1} gap={1} loop={2000} autoplay={2000}>
      <Carousel.Item>
        <img width="100%" src="/assets/images/carousel1.png" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="/assets/images/carousel2.png" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="/assets/images/carousel3.png" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="/assets/images/carousel4.png" />
      </Carousel.Item>
    </Carousel>
  )
}

export default Gallery;