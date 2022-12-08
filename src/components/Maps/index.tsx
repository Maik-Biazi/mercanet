import Image from 'next/image';

import { Container } from './styles';

import iconLocation from '@/assets/Contato/icon-localization.svg';

export const Maps = () => {
  return (
    <>
      <Container>
        <div className="content">
          <div className="box">
            <div className="img">
              <Image src={iconLocation} alt="Icon location" />
            </div>
            <span>
              Rua Augusto Adamati, 241, Sanvitto, Caxias do Sul-RS - CEP
              95012-310
            </span>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.55080895296!2d-51.20800058445201!3d-29.177906382205915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ea31a28ee0923%3A0xb652e840e046367f!2sR.%20Augusto%20Adamati%2C%20241%20-%20Floresta%2C%20Caxias%20do%20Sul%20-%20RS%2C%2095012-310!5e0!3m2!1spt-BR!2sbr!4v1634143188587!5m2!1spt-BR!2sbr"
          loading="lazy"
        ></iframe>
      </Container>
    </>
  );
};
