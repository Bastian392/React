import React from 'react';
import { Carousel } from 'react-bootstrap';

function Carousel2() {
  return (
    <Carousel>
      <Carousel.Item className='Carousel-Item'>
        <img
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/thumbnails/024/889/564/small_2x/young-couple-walking-in-the-city-embracing-in-warm-clothing-generated-by-ai-photo.jpg"
          alt="Juntos crecemos"
        />
        <Carousel.Caption>
          <h3>Juntos crecemos</h3>
          <p>Ayudanos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='Carousel-Item'>
        <img
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/thumbnails/024/712/087/small_2x/young-women-shopping-for-fashionable-winter-clothing-generative-ai-free-photo.jpg"
          alt="Convencete"
        />
        <Carousel.Caption>
          <h3>Convencete</h3>
          <p>A elegir los mejores precios</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='Carousel-Item'>
        <img
          className="d-block w-100"
          src="https://d1ih8jugeo2m5m.cloudfront.net/2022/04/fotos-de-ropa.jpg"
          alt="Busca y compara"
        />
        <Carousel.Caption>
          <h3>Busca y compara</h3>
          <p>Precio y calidad</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel2;