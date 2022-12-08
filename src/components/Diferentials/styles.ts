import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1248px;
  height: 25rem;
  padding: 0 2rem 0 2rem;
  margin: 6rem auto 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  flex-wrap: wrap;

  @media (max-width: 768px) {
    height: auto;
  }

  .box {
    width: 17.5rem;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    span {
      color: #5c6476;
      font-size: 1rem;
      text-align: center;
      max-width: 80%;
    }
  }
`;
