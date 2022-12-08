import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Autoplay, Pagination } from 'swiper';
SwiperCore.use([Autoplay, Pagination]);
import 'swiper/css';
import 'swiper/css/pagination';

import { Container } from './styles';

interface IntegrationProps {
  data: {
    integrations_items: [];
    title: string;
  };
}

interface itemProps {
  id: number;
  icon: {
    url: string;
    width: string;
    height: string;
  };
}

export const Integrations = ({ data }: IntegrationProps) => {
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
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          className="mySwiperClients"
          pagination={{ clickable: true }}
          spaceBetween={30}
        >
          {data.integrations_items.map((item: itemProps, index: number) => {
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
        {/* {data.integrations_items.map((item: itemProps) => {
          const imageUrl = `${
            item.icon.url.startsWith(`/`)
              ? process.env.NEXT_PUBLIC_STRAPI_API_URL
              : ``
          }${item.icon.url}`;
          return (
            <div key={item.id}>
              <Image
                src={imageUrl}
                width={item.icon.width}
                height={item.icon.height}
                alt="Oracle"
              />
            </div>
          );
        })} */}
      </section>
    </Container>
  );
};
