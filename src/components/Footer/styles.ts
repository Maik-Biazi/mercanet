import styled from 'styled-components';

type props = {
  margin?: boolean;
};

export const Container = styled.footer<props>`
  width: 100%;
  height: 41rem;

  position: relative;

  margin-top: ${(props) => (props.margin ? `-9rem` : ``)};

  .container__one {
    width: 100%;
    max-width: 1248px;
    height: 19.5rem;
    padding: 0 2rem 0 2rem;

    position: absolute;
    top: 0;
    left: 50%;

    transform: translateX(-50%);

    background: linear-gradient(86.81deg, #373c4c -12.3%, #1c212f 104.88%);
    border-radius: 10px;

    -webkit-box-shadow: 0px 0px 11px -2px #000000;
    box-shadow: 0px 0px 11px -2px #000000;

    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .content__top {
      width: 100%;
      max-width: 1013px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .container__line {
      width: 100%;
      max-width: 1013px;
      height: 3px;
      background: linear-gradient(
        90deg,
        #e8491e 0%,
        #d7811b 50.07%,
        #c71919 98.09%
      );
    }

    .content__info {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;

      h2 {
        color: #fff;
        font-size: 2.5rem;
        line-height: 52px;
        max-width: 30rem;
      }

      ul {
        display: flex;
        gap: 1rem;

        list-style: none;

        li {
          color: #fff;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;

          &:before {
            content: '';
            width: 7px;
            height: 7px;
            background: #e8491e;
            display: inline-block;
            border-radius: 50%;
          }
        }
      }
    }

    .content__avaliar {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      h2 {
        font-weight: 600;
        font-size: 1.5rem;
        color: #fc5e33;
      }
    }
  }

  .container__two {
    width: 100%;
    height: 32rem;

    position: absolute;
    bottom: 0;
    left: 0;

    background: linear-gradient(90deg, #e8491e 0%, #c71919 98.09%);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    .content {
      width: 100%;
      max-width: 1248px;
      padding: 5rem 2rem 0 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-top: 3.5rem;

      .section__one {
        display: flex;
        align-items: flex-start;
        gap: 1.5rem;

        .section__one__item {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .sociais {
          display: flex;
          gap: 0.5rem;
        }
      }

      .section__two {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .mail {
          display: flex;
          align-items: center;
          gap: 1rem;

          a {
            color: #fff;
            font-size: 0.8rem;
          }
        }

        .phone {
          display: flex;
          align-items: center;
          gap: 1rem;

          .phones {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            a {
              color: #fff;
              font-size: 0.8rem;
            }
          }
        }
      }
    }
    .line__two {
      width: 100%;
      max-width: 1258px;
      border: 1px solid rgba(255, 255, 255, 0.4);
    }

    .macaw {
      transition: transform 0.3s;

      :hover {
        transform: scale(1.1);
      }
    }
  }

  @media (max-width: 768px) {
    height: 60rem;
    .container__one {
      height: auto;
      padding: 2rem 0 2rem 0;
      width: 95%;

      .content__top {
        justify-content: center;
        text-align: center;
        gap: 2rem;

        .content__info {
          align-items: center;
        }
      }

      .container__line {
        display: none;
      }
    }

    .container__two {
      height: 45rem;
      .content {
        flex-direction: column;
        gap: 3rem;

        .section__one .section__one__item {
          align-items: center;
        }

        .section__two {
          .mail a {
            font-size: 1rem;
          }
          .phone .phones {
            flex-direction: row;
            a {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
  @media (max-width: 320px) {
    height: 68rem;
  }
`;
