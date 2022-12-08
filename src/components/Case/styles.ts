import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1248px;
  padding: 0 2rem 0 2rem;
  margin: 6.8rem auto 0 auto;

  height: 28rem;

  @media (max-width: 768px) {
    height: auto;
    margin-bottom: 10rem;
  }

  .about__case {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    gap: 6.5rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    .esq {
      width: 35rem;

      padding-bottom: 3.5rem;

      display: flex;
      flex-direction: column;
      gap: 3.75rem;

      @media (max-width: 768px) {
        align-items: center;
        text-align: center;
        width: 100%;
      }

      .p {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p {
          font-size: 1.1rem;
          line-height: 150%;
          color: #8991a4;
        }
      }
    }

    .dir {
      display: flex;
      flex-direction: column;
      gap: 4.25rem;

      > span {
        font-size: 1.1rem;
        color: #5c6476;
      }

      .one {
        display: flex;
        align-items: center;
        gap: 2rem;

        .info {
          display: flex;
          flex-direction: column;

          span:nth-child(1) {
            font-size: 1.1rem;
            color: #5c6476;
          }

          span:nth-child(2) {
            font-weight: bold;
            font-size: 2rem;
            color: #e8491e;
          }

          span:nth-child(3) {
            font-size: 1.1rem;
            color: #5c6476;
          }
        }
      }

      .two {
        display: flex;
        align-items: center;
        gap: 2rem;

        .info {
          display: flex;
          flex-direction: column;

          span:nth-child(1) {
            font-size: 1.1rem;
            color: #5c6476;
          }

          span:nth-child(2) {
            font-weight: bold;
            font-size: 2rem;
            color: #e8491e;
          }

          span:nth-child(3) {
            font-weight: bold;
            font-size: 2rem;
            color: #e8491e;
          }
        }
      }
    }
  }
`;
