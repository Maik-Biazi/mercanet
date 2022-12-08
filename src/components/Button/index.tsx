import Image from 'next/image';
import { ButtonHTMLAttributes } from 'react';

import {
  ButtonClientContainer,
  ButtonPrimaryContainer,
  ButtonContactContainer,
  ButtonSecondaryContainer,
  ButtonTertiaryContainer,
} from './styles';

import iconButton from '@/assets/icon-cad.svg';
import iconWork from '@/assets/icon-work.svg';
import iconSuport from '@/assets/Contato/icon-suport.svg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  fontSize?: string;
  bold?: boolean;
};

export const ButtonClient = ({ ...props }: ButtonProps) => {
  return (
    <ButtonClientContainer {...props}>
      <Image src={iconButton} width={15} height={15} alt="Area restrita" />
      {props.text}
    </ButtonClientContainer>
  );
};

export const ButtonSuport = ({ ...props }: ButtonProps) => {
  return (
    <ButtonContactContainer {...props}>
      <Image src={iconSuport} alt="Area restrita" />
      {props.text}
    </ButtonContactContainer>
  );
};

export const ButtonWork = ({ ...props }: ButtonProps) => {
  return (
    <ButtonContactContainer {...props}>
      <Image src={iconWork} alt="Area restrita" />
      {props.text}
    </ButtonContactContainer>
  );
};

export const ButtonPrimary = ({ ...props }: ButtonProps) => {
  return (
    <ButtonPrimaryContainer {...props}>{props.text}</ButtonPrimaryContainer>
  );
};

export const ButtonSecondary = ({ ...props }: ButtonProps) => {
  return (
    <ButtonSecondaryContainer {...props}>{props.text}</ButtonSecondaryContainer>
  );
};

export const ButtonTertiary = ({ ...props }: ButtonProps) => {
  return (
    <ButtonTertiaryContainer {...props}>{props.text}</ButtonTertiaryContainer>
  );
};
