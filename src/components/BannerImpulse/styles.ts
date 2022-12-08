import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 64rem;

  background: url('/background-impulse.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    background: #1c212f;
    height: 55rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1248px;
    padding: 0 2rem 0 2rem;
    margin: 0 auto;

    @media (max-width: 768px) {
      align-items: center;
      text-align: center;
    }

    h2 {
      margin-top: 13px;
      font-size: 2rem;
      font-weight: bold;
      color: #fff;
      max-width: 20rem;
    }

    p {
      margin-top: 2.1rem;
      color: #bbbfc9;
      font-size: 1rem;
      max-width: 26rem;
    }

    .button {
      margin-top: 3.25rem;
    }
  }
`;
