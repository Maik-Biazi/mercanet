import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 76%;

  background: url('bg_mercanet.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;

  @media (max-width: 768px) {
    background: url('bg_mercanet_mobile.jpg');
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    align-items: flex-start;

    height: 80%;
  }

  @media (max-width: 375px) {
    /* background: url('banner-375.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover; */
  }

  .content_image {
    position: absolute;

    bottom: -27.3%;
    left: 50%;

    transform: translateX(-30%);

    width: 769px;
    height: 874px;

    @media (max-width: 1024px) {
      width: 669px;
      height: 774px;

      bottom: -25.45%;
    }

    @media (max-width: 768px) {
      width: 469px;
      height: 574px;

      bottom: -13.9%;

      transform: translateX(-50%);
    }

    @media (max-width: 425px) {
      width: 500px;
      bottom: -14.25%;
    }
  }

  .content {
    width: 100%;
    max-width: 1248px;
    padding: 12rem 2rem 0 2rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    gap: 2.2rem;

    @media (max-width: 768px) {
      text-align: center;
      align-items: center;

      padding-top: 10rem;
      padding-bottom: 2rem;
    }

    @media (max-width: 600px) {
      h1 {
        text-align: center;
      }

      .buttons {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    .h1 {
      max-width: 35rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      span:nth-child(1) {
        font-family: 'Assistant', sans-serif;
        font-weight: 700;
        font-size: 1.1rem;
        line-height: 24px;
        letter-spacing: 0.2em;
        color: #e8491e;
        text-transform: uppercase;
      }

      span:nth-child(2) {
        font-family: 'Assistant', sans-serif;
        font-weight: 700;
        font-size: 3.5rem;
        line-height: 73px;
        letter-spacing: -0.02em;

        color: #ffffff;

        @media (max-width: 425px) {
          line-height: 52px;
        }
      }
    }

    .buttons {
      display: flex;
      gap: 1rem;
    }

    .img {
      width: 27rem;
      display: none;
      position: relative;

      @media (max-width: 768px) {
        display: none;
        height: 30rem;
      }
    }
  }
`;
