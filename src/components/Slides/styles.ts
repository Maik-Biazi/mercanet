import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 61rem;

  position: relative;

  @media (max-width: 768px) {
    height: 150vh;
  }

  .carousel {
    width: 100%;
    height: 100%;
  }

  .swiper {
    width: 100%;
    height: 100%;

    .swiper-button-prev {
      border: 1px solid #868686;
      width: 50px;
      height: 50px;
      top: 52%;
      left: 19%;
      border-radius: 50%;

      &:after {
        content: '';
        background-image: url('arrow-left.png');
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 100%;
        display: block;
      }

      @media (max-width: 1440px) {
        left: 9%;
      }

      @media (max-width: 1024px) {
        left: 4%;
      }

      @media (max-width: 425px) {
        top: 85%;
      }
    }

    .swiper-button-next {
      background: #2e3546;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      top: 52%;
      left: 22.5%;

      &:after {
        content: '';
        background-image: url('arrow-right.png');
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 100%;
        display: block;
      }

      @media (max-width: 1440px) {
        left: 13.5%;
      }

      @media (max-width: 1024px) {
        left: 10%;
      }

      @media (max-width: 768px) {
        left: 12%;
      }

      @media (max-width: 425px) {
        top: 85%;
        left: 18%;
      }
    }
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
  }
`;
