import styled from 'styled-components';

export const Container = styled.div`
  width: 43.4rem;
  height: 45.5rem;

  background: #ffffff;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  display: flex;
  justify-content: center;

  z-index: 1;

  @media (max-width: 1024px) {
    width: 30rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 2rem 2rem 2rem;
    height: auto;
  }

  .content {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding-top: 4rem;

    position: relative;

    @media (max-width: 768px) {
      align-items: center;
    }

    h2 {
      max-width: 25rem;
      font-weight: bold;
      font-size: 2rem;
      line-height: 42px;
      color: #454b5b;
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2.1rem;

      .input {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 6px;

        label {
          font-family: 'Assistant', sans-serif;
          font-size: 1rem;
          font-weight: bold;
          line-height: 21px;
          color: #5c6476;
        }

        input {
          width: 100%;
          height: 3.5rem;
          border: 1px solid #bbbfc9;
          border-radius: 8px;
          font-size: 1rem;
          transition: border 0.3s;

          padding-left: 1rem;

          &:focus {
            border: 1px solid #e8491e;
          }
        }

        .error {
          border: 1px solid red;
        }

        #mensagem {
          border: 1px solid #bbbfc9;
          border-radius: 8px;
          height: 10rem;
          resize: none;
          transition: border 0.3s;
          padding: 1rem 0 0 1rem;
          font-size: 1rem;

          &:focus {
            border: 1px solid #e8491e;
          }
        }
      }
      .button {
        width: 100%;
        display: flex;
        gap: 2rem;
        align-items: center;
        justify-content: flex-end;

        span {
          font-family: 'Assistant', sans-serif;
          font-size: 1rem;
          font-weight: bold;
          line-height: 21px;
          color: #5c6476;
        }

        @media (max-width: 768px) {
          justify-content: center;
        }

        button[type='submit'] {
          width: 9rem;
          height: 3.5rem;
          background: #e8491e;
          border-radius: 8px;
          border: 1px solid transparent;
          color: #fff;
          transition: all 0.3s;
          cursor: pointer;

          &:hover {
            background: transparent;
            color: #e8491e;
            border: 1px solid #e8491e;
          }
        }
      }
    }
  }
`;
