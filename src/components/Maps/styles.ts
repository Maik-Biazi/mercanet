import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 48rem;

  position: relative;

  .content {
    width: auto;
    height: 100%;

    position: relative;

    .box {
      background: #ffffff;
      box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1);
      border-radius: 16px;

      width: 32.5rem;
      height: 11.5rem;

      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 50%;
      left: 20%;
      transform: translateY(-50%);

      z-index: 1;

      @media (max-width: 1366px) and (max-height: 768px) {
        left: 5%;
      }

      @media (max-width: 768px) {
        top: -5.5rem;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
      }

      span {
        text-align: center;
        max-width: 18rem;

        font-size: 1rem;

        line-height: 19px;

        color: #6d6e75;
      }
    }
  }

  iframe {
    width: 71rem;
    height: 100%;

    border: none;

    position: absolute;
    right: 0;
    top: 0;

    @media (max-width: 1440px) {
      width: 60rem;
    }

    @media (max-width: 1024px) {
      width: 45rem;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
