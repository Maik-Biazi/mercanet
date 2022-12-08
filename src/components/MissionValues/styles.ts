import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1248px;
  padding: 0 2rem 0 2rem;
  margin: 8rem auto 8rem auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .box {
    width: 24rem;
    height: 17rem;

    background: #fff;
    box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1);
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;

    padding: 3rem 2rem 3rem 2rem;

    @media (max-width: 1024px) {
      height: 20rem;
    }

    @media (max-width: 1024px) {
      align-items: center;
      text-align: center;
    }

    h2 {
      font-size: 2rem;
      color: #e8491e;
      line-height: 42px;
    }

    span {
      max-width: 80%;
      color: #8991a4;
      line-height: 24px;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      li {
        color: #8991a4;
        font-size: 1rem;

        display: flex;
        align-items: center;
        gap: 1rem;

        :before {
          content: '';
          background: url('icon-list.svg');
          width: 13px;
          height: 9px;
          display: inline-block;
        }
      }
    }
  }
`;
