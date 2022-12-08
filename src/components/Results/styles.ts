import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80rem;

  margin-top: 5rem;

  background: url('banner-results-1080.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;

  @media (max-width: 1440px) {
    background-image: url('/banner-results-1440.png');
  }

  @media (max-width: 1024px) {
    background-position: top;
  }

  @media (max-width: 768px) {
    background: #1c212f;
    height: auto;
    padding-bottom: 2rem;
  }

  .content {
    width: 100%;
    max-width: 1248px;
    padding: 8rem 2rem 0 2rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 3.75rem;

    @media (max-width: 768px) {
      align-items: center;
    }

    h2 {
      font-size: 2rem;
      font-weight: bold;
      line-height: 42px;
      color: #fff;

      margin-top: 3rem;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;

      li {
        padding: 1rem 0 1rem 0;
        max-width: 27rem;

        display: flex;
        align-items: center;
        gap: 2rem;

        .img {
          width: 55px;
          height: 40px;
        }

        span {
          font-size: 1rem;
          line-height: 19px;
          color: #bbbfc9;
        }
      }
    }
  }
`;
