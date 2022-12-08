import Image from 'next/image';

import { Navbar } from '../Navbar';
import { Container } from './styles';

import iconMail from '@/assets/Contato/icon-mail-contato.svg';
import iconPhone from '@/assets/Contato/icon-phone-contato.svg';
import { ButtonWork, ButtonSuport } from '../Button';
import { Form } from '../Form';

export const HeaderContato = ({ ...props }: any) => {
  return (
    <>
      <Container>
        <Navbar client={props.data.linkClient} />
        <div className="container">
          <div className="infos">
            <h1>
              <span>Entre em</span>
              <span>contato</span>
            </h1>
            <div className="phones">
              <div className="img">
                <Image src={iconPhone} alt="Icons Phone" />
              </div>
              {props.data.phones.map((obj: any, index: number) => {
                return (
                  <a href={`tel:${obj.phone}`} key={index}>
                    {obj.phone}
                    {` `}
                  </a>
                );
              })}
            </div>
            <div className="mail">
              <div className="img">
                <Image src={iconMail} alt="Icons Phone" />
              </div>
              <a href={`mailto:${props.data.email}`}>{props.data.email}</a>
            </div>
            <div className="buttons">
              <a
                href="https://mercanet.kretos.cc/"
                target="_blank"
                rel="noreferrer"
              >
                <ButtonWork text="Trabalhe conosco" />
              </a>
            </div>
          </div>
          <Form />
        </div>
      </Container>
    </>
  );
};
