import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1248px;
  padding: 5rem 2rem 0 2rem;
  margin: -6rem auto 0 auto;

  header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      text-align: center;
    }

    .esq {
      max-width: 35rem;

      h2 {
        font-size: 2rem;
        line-height: 2.6rem;
        color: #454b5b;
      }

      > span {
        font-family: 'Assistant', sans-serif;
        font-weight: 400;
        font-size: 1.1rem;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: #e8491e;
      }
    }

    .dir > a {
      color: #e8491e;
    }
  }
`;

export const FeatureContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;

  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }

  .feature__div {
    @media (max-width: 768px) {
      width: 100%;
    }

    @media (max-width: 375px) {
      height: auto;
    }
  }

  .svg__features {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    z-index: -1;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .col__features {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
