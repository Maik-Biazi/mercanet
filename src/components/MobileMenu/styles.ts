import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  z-index: 10;

  .navbar {
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
  }

  .nav-menu {
    background-color: #1c212f;
    width: 250px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 850ms;
    opacity: 0;

    .container {
      height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 2rem;
      align-items: center;
    }
  }
  .nav-menu.active {
    opacity: 1;
    right: 0;
    transition: 500ms;
  }
  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    list-style: none;
    height: 60px;
    transition: color 0.3s;
  }
  .link-dropdown {
    display: flex;
    gap: 0.5rem;
  }
  .nav-dropdown {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .nav-text a,
  span {
    text-decoration: none;
    color: #bbbfc9;
    font-size: 1.1rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 0;
    cursor: pointer;
  }
  .nav-text a:hover {
    color: #ff7b39;
  }
  .nav-menu-items {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  .link-spacing {
    li:nth-child(4) {
      margin-top: 3rem;
      transition: 1s;
    }
  }
  .navbar-toggle {
    color: #bbbfc9;
    width: 15px;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 1rem;
    gap: 1rem;
    cursor: pointer;
  }
  span {
    margin-left: 16px;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
