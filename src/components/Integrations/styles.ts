import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1248px;
  margin: 4.6rem auto 0 auto;
  padding: 0 2rem 0 2rem;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  > h2 {
    color: #454b5b;
    font-size: 1.5rem;
    line-height: 2.1rem;
    font-weight: bold;
  }

  .section__images {
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;

    @media (max-width: 768px) {
      gap: 4rem;
    }

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
`;
