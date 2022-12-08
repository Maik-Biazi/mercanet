import { GetStaticProps } from 'next';
import Image from 'next/image';

import { HeaderEmpresa } from '@/components/HeaderEmpresa';
import { ContentCarousel } from '@/styles/empresa';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import SwiperCore, { Pagination } from 'swiper';
import { Diferentials } from '@/components/Diferentials';
import { MissionValues } from '@/components/MissionValues';
import { Footer } from '@/components/Footer';
import { getAbout, getInformation, getSeo } from '@/lib/api';
import { Seo } from '@/components/Seo';

SwiperCore.use([Pagination]);

export default function Empresa({ dataInformation, dataAbout, seo }: any) {
  const { information } = dataInformation.data;
  const { about } = dataAbout.data;

  const pagination = {
    clickable: true,
  };

  return (
    <>
      <Seo seo={seo} />
      <HeaderEmpresa data={about.textAbout} client={information.linkClient} />
      <ContentCarousel>
        <div className="infos">
          <h2>{about.carouselTitle}</h2>
          <p>{about.carouselText}</p>
        </div>
        <div className="carousel">
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            slidesPerView={2}
            spaceBetween={31}
            loop
            className="mySwiper"
          >
            {about.imagesCarousel.map((image: any, index: number) => {
              const imageUrl = `${
                image.url.startsWith(`/`)
                  ? process.env.NEXT_PUBLIC_STRAPI_API_URL
                  : ``
              }${image.url}`;
              return (
                <>
                  <SwiperSlide key={index}>
                    <Image
                      src={imageUrl}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      alt="Mercanet"
                    />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </ContentCarousel>
      <Diferentials />
      <MissionValues />
      <Footer data={information} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const dataInformation = (await getInformation()) || [];
  const dataAbout = (await getAbout()) || [];
  const seo = (await getSeo(`/empresa`)) || [];

  return {
    props: { dataInformation, dataAbout, seo },
    revalidate: 10,
  };
};
