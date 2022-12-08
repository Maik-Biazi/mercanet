import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: 1248px;
  height: 50px;
  padding: 20px 2rem 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  z-index: 1;

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 6.5rem;

    .logo {
      position: relative;
      width: 15rem;
      height: 4rem;
    }

    .nav__links {
      display: flex;
      align-items: center;
      gap: 2rem;

      list-style: none;

      @media (max-width: 768px) {
        display: none;
      }

      .links > a {
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 0.03em;
        color: #fff;
        transition: color 0.3s;
        font-family: 'Assistant', sans-serif;

        &:hover {
          color: #e8491e;
        }
      }
      .active {
        font-size: 1rem;
        font-weight: bold;
        letter-spacing: 0.03em;
        color: #e8491e;
        transition: color 0.3s;
      }
    }
  }

  .button {
    @media (max-width: 960px) {
      display: none;
    }
  }
`;
