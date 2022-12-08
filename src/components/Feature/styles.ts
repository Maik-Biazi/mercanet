import styled from 'styled-components';

export const Container = styled.div`
  .box {
    width: 25rem;
    height: 8.4rem;

    background: #ffffff;
    box-shadow: 0px 4px 40px rgba(67, 69, 87, 0.1);
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1.8rem;
    gap: 2rem;
    cursor: pointer;
    transition: all 0.3s;

    @media (max-width: 768px) {
      width: 100%;
      justify-content: flex-start;
      gap: 3.5rem;
      text-align: center;
    }

    @media (max-width: 425px) {
      flex-direction: column;
      height: auto;
      padding: 2rem 0 2rem 0;
    }

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 375px) {
      &:hover {
        transform: scale(1);
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      max-width: 15rem;
      gap: 0.3rem;

      @media (max-width: 768px) {
        max-width: 100%;
        width: 30rem;
      }

      @media (max-width: 425px) {
        width: 95%;
      }

      h2 {
        font-size: 1.1rem;
        font-weight: bold;
        color: #e8491e;
      }

      p {
        font-size: 1rem;
        font-weight: 400;
        color: #6d6e75;
        line-height: 19px;
      }
    }
  }
`;
