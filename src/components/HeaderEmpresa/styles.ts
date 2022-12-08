import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 53rem;

  background: url('/banner-header.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    padding-bottom: 2rem;
  }

  .content {
    width: 100%;
    max-width: 1248px;
    padding: 0 2rem 0 2rem;

    display: flex;
    align-items: flex-end;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 5rem;
      padding-top: 10rem;
      text-align: center;
    }

    .dir {
      width: 55%;

      @media (max-width: 425px) {
        width: 100%;
      }

      .title {
        display: flex;
        flex-direction: column;

        margin-bottom: 5rem;

        span {
          font-size: 2rem;
          font-weight: 400;
          font-family: 'Assistant', sans-serif;
          color: #fff;
        }

        h1 {
          font-family: 'Assistant', sans-serif;
          font-weight: 800;
          font-size: 4.5rem;
          letter-spacing: 0.03em;
          color: #fff;
        }
      }
      .p {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p {
          font-size: 1.1rem;
          color: #fff;
          line-height: 27px;
        }
      }
    }

    .esq {
      width: 45%;

      @media (max-width: 768px) {
        order: 2;
      }

      @media (max-width: 425px) {
        width: 100%;
      }

      .h2 {
        display: flex;
        flex-direction: column;

        margin-bottom: 4rem;

        font-family: 'Assistant', sans-serif;

        h2 {
          font-size: 2rem;
          font-weight: 400;

          color: #fff;
        }

        span {
          font-size: 2rem;
          font-weight: 700;
          opacity: 1;
          color: #fff;
        }
      }

      .links {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        @media (max-width: 768px) {
          align-items: center;
        }

        a {
          width: fit-content;
          height: 3rem;
          font-size: 1.1rem;
          font-weight: bold;
          font-family: 'Assistant', sans-serif;

          padding: 1rem;

          border-radius: 8px;
          border: 1px solid transparent;

          background: #fff;
          color: #fc5e33;

          cursor: pointer;

          transition: all 0.3s;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;

          &:hover {
            filter: brightness(0.8);
          }

          :hover {
            color: #fc5e33;
          }
        }
      }
    }
  }
`;
