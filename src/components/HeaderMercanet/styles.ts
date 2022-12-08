import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 76rem;

  background: url('/banner-mercanet-1080.png');
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1440px) {
    background-image: url('/banner-mercanet-1440.png');
  }

  @media (max-width: 1024px) {
    background-position: center;
  }

  @media (max-width: 768px) {
    background: linear-gradient(180deg, #1c212f 19.94%, #e8491e 121.87%);
    margin-bottom: 5rem;
  }

  @media (max-width: 375px) {
    height: auto;
    padding-bottom: 2rem;
  }

  .content {
    width: 100%;
    max-width: 1248px;
    padding: 10rem 2rem 0 2rem;
    margin: 0 auto;

    .title {
      display: flex;
      flex-direction: column;

      @media (max-width: 768px) {
        align-items: center;
      }

      span {
        font-size: 2rem;
        letter-spacing: 0.03em;
        color: #fff;

        font-weight: 400;

        font-family: 'Assistant', sans-serif;
      }

      h1 {
        letter-spacing: 0.03em;
        color: #ffffff;
        font-size: 4.5rem;
        font-weight: 800;
      }

      .tags ul {
        display: flex;
        gap: 2rem;
        list-style: none;

        li {
          font-size: 0.8rem;
          color: #fff;

          display: flex;
          align-items: center;
          gap: 1rem;

          &:before {
            content: '';
            width: 7px;
            height: 7px;
            background: #e8491e;
            display: inline-block;
            border-radius: 50%;
          }
        }
      }
    }
    .links {
      margin-top: 5rem;

      @media (max-width: 768px) {
        display: flex;
        justify-content: center;
      }

      ul {
        display: flex;
        gap: 2rem;

        list-style: none;

        @media (max-width: 425px) {
          flex-direction: column;
          align-items: center;
        }

        li {
          a {
            font-size: 1.1rem;
            color: #fc5e33;
          }
        }
      }
    }

    .text {
      padding: 2rem 0 2rem 0;
      height: auto;
      width: 36rem;

      display: flex;
      flex-direction: column;
      gap: 2.75rem;

      @media (max-width: 768px) {
        align-items: center;
        text-align: center;
        width: 100%;
      }

      h2 {
        width: 25rem;
        font-weight: 700;
        font-size: 2rem;
        color: #fff;
        line-height: 42px;
      }

      .p {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p {
          font-size: 1.1rem;
          color: #fff;
          opacity: 0.9;
          line-height: 27px;
        }
      }
    }
  }
`;
