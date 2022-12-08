import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1210px;
  margin: -1rem auto 8rem auto;
  padding: 0 2rem 0 2rem;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    color: #454b5b;
    font-size: 2rem;
    line-height: 2.1rem;
    font-weight: bold;
    width: 100%;
    text-align: left;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .section__images {
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    .mySwiperClients {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  @media (max-width: 425px) {
    margin-top: 5rem;
  }
`;
