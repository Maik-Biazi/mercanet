import styled from 'styled-components';

type ButtonProps = {
  width?: string;
  fontSize?: string;
  bold?: boolean;
};

export const ButtonClientContainer = styled.button<ButtonProps>`
  width: ${(props) => props.width || `11rem`};
  height: 3rem;
  padding: 1rem;

  font-size: 0.8rem;

  border: 1px solid #fff;
  border-radius: 10px;

  background: transparent;

  color: #fff;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const ButtonContactContainer = styled.button<ButtonProps>`
  width: ${(props) => props.width || `13.438rem`};
  height: 3rem;

  font-size: 1.1rem;
  font-weight: bold;
  font-family: 'Assistant', sans-serif;

  border-radius: 8px;
  border: 1px solid transparent;

  background: #fff;
  color: #fc5e33;

  cursor: pointer;

  transition: all 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const ButtonPrimaryContainer = styled.button<ButtonProps>`
  width: ${(props) => props.width || `19rem`};
  height: 3rem;
  padding: 1rem;

  font-size: ${(props) => props.fontSize || `0.8rem`};
  font-family: 'Roboto', sans-serif;
  font-weight: ${(props) => (props.bold ? `bold` : `normal`)};
  line-height: 15px;
  letter-spacing: 0.03em;

  border-radius: 10px;
  border: 1px solid transparent;

  background: #e8491e;
  color: #fff;

  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    background: #ea3200;
    border: 1px solid #ea3200;
  }
`;

export const ButtonSecondaryContainer = styled.button<ButtonProps>`
  width: ${(props) => props.width || `19rem`};
  height: 3rem;
  padding: 1rem;

  font-size: 0.8rem;
  font-family: 'Roboto', sans-serif;
  font-weight: ${(props) => (props.bold ? `bold` : `normal`)};

  border-radius: 10px;
  border: 1px solid transparent;

  background: #2e3546;
  color: #fff;

  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    background: #e8491e;
    border: 1px solid #e8491e;
    color: #fff;
  }
`;

export const ButtonTertiaryContainer = styled.button<ButtonProps>`
  width: ${(props) => props.width || `19rem`};
  height: 3rem;
  padding: 1rem;

  font-size: 0.8rem;
  font-family: 'Roboto', sans-serif;
  font-weight: ${(props) => (props.bold ? `bold` : `normal`)};

  border-radius: 10px;
  border: 1px solid transparent;

  background: #fff;
  color: #e8491e;

  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    background: #e8491e;
    color: #ffffff;
  }
`;
