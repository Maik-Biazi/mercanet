import Image from 'next/image';
import { Container } from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);
import 'swiper/css';

interface clientProps {
  data: {
    clients_items: [];
    title: string;
  };
}

interface itemProps {
  id: string;
  icon: {
    url: string;
    width: string;
    height: string;
  };
}

export const CarouselClients = ({ data }: clientProps) => {
  return (
    <Container>
      <h2>{data.title}</h2>
      <section className="section__images">
        <Swiper
          slidesPerView={6}
          breakpoints={{
            '320': {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            '640': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiperClients"
          autoplay={{ delay: 3000 }}
          grabCursor
          spaceBetween={30}
        >
          {data.clients_items.map((item: itemProps, index: number) => {
            const imageUrl = `${
              item.icon.url.startsWith(`/`)
                ? process.env.NEXT_PUBLIC_STRAPI_API_URL
                : ``
            }${item.icon.url}`;
            return (
              <SwiperSlide key={index}>
                <Image
                  src={imageUrl}
                  width={item.icon.width}
                  height={item.icon.height}
                  alt="Cliente"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </Container>
  );
};
