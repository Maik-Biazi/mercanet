import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1248px;
  padding: 0 2rem 0 2rem;
  margin: 3rem auto 5rem auto;
  height: 50rem;

  position: relative;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    height: auto;
  }

  .header {
    position: absolute;
    top: 0;
    left: 2rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    @media (max-width: 768px) {
      position: relative;
      align-items: center;
      left: 0;
      margin-bottom: 5rem;
    }

    h2 {
      font-weight: bold;
      font-size: 1.1rem;
      line-height: 24px;
      color: #e8491e;

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
  }

  .info__depoimento {
    position: absolute;
    width: 30rem;
    height: auto;
    bottom: 0;
    left: 6rem;

    background: #ffffff;
    box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1);
    border-radius: 16px;

    z-index: 1;

    padding: 7.1rem 2.1rem 2rem 2.1rem;

    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @media (max-width: 768px) {
      position: relative;
      align-items: center;
      text-align: center;
      top: 0;
      left: 0;
    }

    @media (max-width: 320px) {
      width: 100%;
      height: auto;
      padding-bottom: 2rem;
    }

    .depoimento__title {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      p:nth-child(1) {
        font-weight: bold;
        font-size: 1rem;
        line-height: 150%;
        color: #5c6476;
      }

      p:nth-child(2) {
        font-size: 1rem;
        line-height: 150%;
        color: #5c6476;
      }
    }

    .text {
      font-size: 1.3rem;
      line-height: 150%;
      color: #5c6476;
    }

    .aspas {
      position: absolute;
      top: -56px;
      left: 2rem;

      @media (max-width: 768px) {
        width: 6rem;
        top: -3rem;
      }
    }
  }

  .img__depoimento {
    position: absolute;
    top: 2rem;
    right: 10%;

    @media (max-width: 768px) {
      position: relative;
      left: 0;
      top: 0;
    }
  }
`;
