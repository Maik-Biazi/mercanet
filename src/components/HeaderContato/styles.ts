import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 53.4rem;

  background: url('/banner-contato.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right bottom;

  @media (max-width: 768px) {
    height: auto;
    padding-bottom: 10rem;
  }

  .container {
    width: 100%;
    max-width: 1248px;
    padding: 12rem 2rem 0 2rem;
    margin: 0 auto;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .infos {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4rem;

      @media (max-width: 768px) {
        margin-bottom: 5rem;
      }

      h1 {
        display: flex;
        flex-direction: column;

        @media (max-width: 768px) {
          width: 100%;
          align-items: center;
        }

        span:nth-child(1) {
          font-weight: 400;
          font-size: 2rem;
          line-height: 42px;
          letter-spacing: 0.03em;
          color: #fff;
        }

        span:nth-child(2) {
          font-weight: 800;
          font-size: 4.5rem;
          line-height: 42px;
          letter-spacing: 0.03em;
          color: #fff;
        }
      }

      .phones {
        display: flex;
        align-items: center;
        gap: 1.8rem;

        @media (max-width: 768px) {
          width: 100%;
          align-items: center;
        }

        @media (max-width: 320px) {
          flex-direction: column;
        }

        a {
          font-weight: bold;
          font-size: 1.5rem;
          line-height: 31px;
          color: #fff;
          font-family: 'Assistant', sans-serif;
        }
      }

      .mail {
        display: flex;
        align-items: center;
        gap: 1.8rem;

        @media (max-width: 768px) {
          width: 100%;
          align-items: center;
        }

        @media (max-width: 320px) {
          flex-direction: column;
        }

        a {
          font-weight: bold;
          font-size: 1.5rem;
          line-height: 31px;
          color: #fff;
          font-family: 'Assistant', sans-serif;
        }
      }

      .buttons {
        display: flex;
        flex-direction: column;
        gap: 2.1rem;

        @media (max-width: 768px) {
          width: 100%;
          align-items: center;
        }
      }
    }
  }
`;
