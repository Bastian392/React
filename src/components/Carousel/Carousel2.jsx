import React from 'react';
import { Carousel } from 'react-bootstrap';

function Carousel2() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/thumbnails/024/889/564/small_2x/young-couple-walking-in-the-city-embracing-in-warm-clothing-generated-by-ai-photo.jpg"
          alt="Primera diapositiva"
        />
        <Carousel.Caption>
          <h3>Primera Diapositiva</h3>
          <p>Descripción de la primera diapositiva.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/thumbnails/024/712/087/small_2x/young-women-shopping-for-fashionable-winter-clothing-generative-ai-free-photo.jpg"
          alt="Segunda diapositiva"
        />
        <Carousel.Caption>
          <h3>Segunda Diapositiva</h3>
          <p>Descripción de la segunda diapositiva.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d1ih8jugeo2m5m.cloudfront.net/2022/04/fotos-de-ropa.jpg"
          alt="Tercera diapositiva"
        />
        <Carousel.Caption>
          <h3>Tercera Diapositiva</h3>
          <p>Descripción de la tercera diapositiva.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel2;