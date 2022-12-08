import styled from 'styled-components';

export const ContentCarousel = styled.div`
  width: 100%;
  height: 35rem;

  display: flex;

  padding-left: 22.5rem;
  position: relative;

  @media (max-width: 1366px) and (max-height: 768px) {
    padding-left: 6.5rem;
  }

  @media (max-width: 1440px) {
    padding-left: 8rem;
  }

  @media (max-width: 1024px) {
    padding-left: 2rem;
    gap: 5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    text-align: center;
    max-width: 1248px;
    padding: 0 2rem 0 2rem;
  }

  &:before {
    content: '';
    background: url('great.svg');
    width: 74px;
    height: 125px;
    display: block;
    position: absolute;
    top: 50%;
    left: 55.3%;
    transform: translate(-50%, -50%);
    z-index: 9999999999;

    @media (max-width: 1366px) and (max-height: 768px) {
      left: 49.2%;
    }

    @media (max-width: 1440px) {
      left: 49.9%;
    }

    @media (max-width: 1024px) {
      left: 46.7%;
    }

    @media (max-width: 768px) {
      top: 5rem;
      left: 3rem;
    }

    @media (max-width: 425px) {
      display: none;
    }
  }

  .infos {
    width: 45%;

    margin-top: 8%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.1rem;

    @media (max-width: 768px) {
      align-items: center;
      width: 100%;
    }

    h2 {
      color: #454b5b;
      font-size: 2rem;
    }

    p {
      max-width: 28rem;
      color: #5c6476;
      font-size: 1.1rem;
      line-height: 27px;

      @media (max-width: 768px) {
        max-width: 100%;
      }
    }
  }

  .carousel {
    width: 55%;
    height: 100%;

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  .swiper {
    width: 100%;
    height: 100%;

    .swiper-wrapper {
      @media (max-width: 768px) {
        height: 35rem;
      }
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    width: 30rem !important;
    height: 30rem !important;
    background: transparent;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    z-index: -1;
  }
`;
