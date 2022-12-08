import Image from 'next/image';
import Link from 'next/link';

import { Container } from './styles';

import icon from '@/assets/BannerImpulse/icon-impulse.svg';
import { ButtonPrimary } from '../Button';

export const BannerImpulse = () => {
  return (
    <>
      <Container>
        <div className="content">
          <div className="img">
            <Image src={icon} alt="Icon" />
          </div>
          <h2>O impulso para sua estratégia de vendas</h2>
          <p>
            Há quase 30 anos no mercado, a Mercanet tem seu foco no
            desenvolvimento e comercialização de softwares abrangentes e de
            conceitos avançados para Gestão Comercial e Automação da Força de
            Vendas.
          </p>

          <div className="button">
            <Link href="/empresa">
              <a>
                <ButtonPrimary text="Conheça a empresa" bold />
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};
