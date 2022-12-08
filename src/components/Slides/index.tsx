import { Container } from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Slide } from '../Slide';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Autoplay, Navigation]);

export const Slides = () => {
  return (
    <>
      <Container>
        <div className="carousel">
          <Swiper slidesPerView={1} navigation className="mySwiper">
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </>
  );
};
