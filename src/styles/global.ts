import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    text-decoration: none;
  }

  html, body {
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;

    @media(max-width: 1024px){
      font-size: 93.75%;
    }
     @media(max-width: 720px){
      font-size: 87.5%;
    }
    @media(max-width: 600px){
      font-size: 81.25%;
    }
    @media(max-width: 320px){
      font-size: 75%;
    }

    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Assistant', sans-serif;
    font-weight: 700;
  }

  .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    background:#E8491E;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active{
    width: 18px;
    border-radius: 4px;
    background: #E8491E;
    opacity: 1;
  }

.react-modal-overlay{
    background: rgba(55, 60, 76, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:999999
  }

  .react-modal-content{
    width: 100%;
    max-width: 54rem;
    height: 31rem;
    background: #FFFFFF;
    box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    padding: 5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    @media (max-width: 768px) {
      align-items: center;
      height: auto;
    }



    .react-modal-info {
      width: 100%;
      display: flex;
      gap: 2.5rem;

      @media (max-width: 768px) {
        align-items: center;
        justify-content:center;
        flex-direction: column;
      }

      .img {
        width: 106px;
        height: 106px;
        position: relative;
      }

      .react-modal-text {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2.3rem;

        @media (max-width: 768px) {
          align-items: center;
        }

        h2 {
          font-weight: bold;
          font-size: 24px;
          line-height: 31px;
          color: #E8491E;
        }
        p {
          max-width: 95%;
          font-weight: normal;
          font-size: 1.1rem;
          line-height: 150%;
          color: #5C6476;
        }
      }
    }
  }
  .close__modal{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    cursor: pointer;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
