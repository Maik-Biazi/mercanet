import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 27.5rem;

  background-image: url('/banner-cases.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  h1 {
    padding: 12rem 2rem 0 2rem;

    display: flex;
    flex-direction: column;

    max-width: 1248px;
    margin: 0 auto;

    span:nth-child(1) {
      font-weight: normal;
      font-size: 2rem;
      line-height: 42px;

      letter-spacing: 0.03em;

      color: #ffffff;
    }

    span:nth-child(2) {
      font-weight: 800;
      font-size: 4.4rem;
      line-height: 94px;
      letter-spacing: 0.03em;

      color: #ffffff;

      text-transform: lowercase;
    }
  }
`;
