import Image from 'next/image';

import { Container } from './styles';

import iconArrow from '@/assets/Case/icon-arrow.svg';
import iconAspas from '@/assets/Case/quote.png';

export const Depositions = ({ data }: any) => {
  const image = `${
    data.image.url.startsWith(`/`) ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ``
  }${data.image.url}`;
  return (
    <>
      <Container>
        <div className="header">
          <h2>Depoimento</h2>
          <Image src={iconArrow} alt="Arrow" />
        </div>

        <div className="info__depoimento">
          <div className="aspas">
            <Image src={iconAspas} alt="icon__Aspas" />
          </div>
          <p className="text">{data.description}</p>
          <div className="depoimento__title">
            <p>{data.author}</p>
            <p>{data.office}</p>
          </div>
        </div>
        <div className="img__depoimento">
          <Image
            src={image}
            width={data.image.width}
            height={data.image.height}
            alt="Imagem depoimento"
          />
        </div>
      </Container>
    </>
  );
};
