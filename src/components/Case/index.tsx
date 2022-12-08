import Image from 'next/image';

import { Container } from './styles';

import iconRep from '@/assets/Case/icon-rep.png';
import iconClient from '@/assets/Case/icon-clients.png';

export const Case = ({ data }: any) => {
  const logo = `${
    data.logo.url.startsWith(`/`) ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ``
  }${data.logo.url}`;

  return (
    <>
      <Container>
        <div className="about__case">
          <div className="esq">
            <div className="img">
              <Image
                src={logo}
                width={data.logo.width}
                height={data.logo.height}
                alt="Logo"
              />
            </div>
            <div className="p">
              <p>{data.description}</p>
            </div>
          </div>

          {data.representatives !== 0 && (
            <div className="dir">
              <span>Números EMS</span>
              <div className="one">
                <div className="img">
                  <Image src={iconClient} layout="fixed" alt="Icon Map" />
                </div>
                <div className="info">
                  <span>mais de</span>
                  <span>{data.representatives} mil representantes</span>
                  <span>espalhados pelo Brasil</span>
                </div>
              </div>
              <div className="two">
                <div className="img">
                  <Image src={iconRep} layout="fixed" alt="Icon Rep" />
                </div>
                <div className="info">
                  <span>mais de</span>
                  <span>{data.clients} mil</span>
                  <span>clientes</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};
