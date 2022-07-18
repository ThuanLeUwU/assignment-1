import React from 'react'
import Carousel from 'better-react-carousel'

const Gallery = () => {
  return (
    <Carousel cols={1} rows={1} gap={1} loop autoplay={3000}>
      <Carousel.Item>
        <img width="100%" src="/assets/images/kizuna.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="/assets/images/tieunhu.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="/assets/images/saraphine.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="/assets/images/mine.jpg" />
      </Carousel.Item>
    </Carousel>
  )
}

export default Gallery;