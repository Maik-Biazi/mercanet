import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1248px;
  height: 19.5rem;
  padding: 0 2rem 0 2rem;
  margin: 5rem auto -9.75rem auto;
  border-radius: 10px;

  box-shadow: 0px 4px 40px rgba(67, 69, 87, 0.1);

  background: url('/mask-banner.png'),
    radial-gradient(104.44% 1586.46% at 1.36% 100%, #e8491e 0%, #b02300 100%);
  background-repeat: no-repeat;
  background-position: top left;

  display: flex;
  align-items: center;
  gap: 9rem;

  position: relative;

  @media (max-width: 1024px) {
    gap: 0rem;
  }

  @media (max-width: 768px) {
    margin-bottom: -8.75rem;
    height: auto;
    padding: 2rem;
    flex-direction: column;
    gap: 4rem;
    background: radial-gradient(
      104.44% 1586.46% at 1.36% 100%,
      #e8491e 0%,
      #b02300 100%
    );
  }

  .solucoes__title {
    display: flex;
    align-items: center;
    gap: 1rem;

    padding-left: 5rem;

    @media (max-width: 1024px) {
      padding-left: 0;
      width: 40rem;
    }

    @media (max-width: 768px) {
      text-align: center;
      justify-content: center;
      width: 100%;
    }

    h2 {
      max-width: 14rem;
      font-size: 1.5rem;
      line-height: 30px;
      font-weight: bold;
      color: #fff;
    }
  }

  .solucoes__container {
    width: 40rem;
    height: 90%;

    @media (max-width: 1024px) {
      width: auto;
    }

    @media (max-width: 768px) {
      height: 20rem;
    }

    @media (max-width: 425px) {
      display: flex;
      gap: 5rem;
      height: auto;
    }

    .solucoes__container__box {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;

      align-items: center;
      justify-content: center;
      gap: 3rem;

      @media (max-width: 425px) {
        width: 100%;
      }

      .solucoes__box {
        width: 88px;
        height: 27px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        @media (max-width: 425px) {
          width: 100px;
          height: 60px;
        }

        p {
          color: #fff;
          font-size: 0.8rem;
          font-weight: normal;
          text-align: center;
        }
      }
    }
  }
`;
