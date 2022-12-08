import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1248px;
  padding: 5rem 2rem 0 2rem;
  margin: -8rem auto 7.5rem auto;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  h2 {
    font-weight: bold;
    font-size: 2rem;
    line-height: 42px;
    color: #454b5b;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .content {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 2rem;

    @media (max-width: 768px) {
      align-items: center;
      justify-content: center;
    }

    .box {
      width: 36rem;
      height: 6.6rem;
      background: #f9f9f9;
      border-radius: 10px;

      display: flex;
      align-items: center;
      gap: 2.5rem;

      padding: 0 1rem 0 3rem;

      @media (max-width: 1024px) {
        width: 29rem;
      }

      .infos {
        display: flex;
        flex-direction: column;

        h3 {
          font-size: 1.1rem;
          color: #5c6476;
          line-height: 24px;
          font-weight: bold;
        }

        span {
          font-size: 0.875rem;
          color: #8991a4;
        }
      }
    }
  }

  @media (max-width: 425px) {
    margin-top: 0;
  }
`;
