import Link from 'next/link';
import Image from 'next/image';

import { ButtonPrimary, ButtonTertiary } from '../Button';
import { Container } from './styles';

export const Slide = () => {
  return (
    <>
      <Container>
        <div className="content">
          <div className="h1">
            <span>O software tudo em 1</span>
            <span>CRM e força de vendas na palma da mão!</span>
          </div>
          <div className="buttons">
            <Link href="/mercanet">
              <a>
                <ButtonPrimary text="Conheça o mercanet" width="11rem" bold />
              </a>
            </Link>
            <Link href="/contato">
              <a>
                <ButtonTertiary
                  text="Solicite uma demonstração"
                  width="12.8rem"
                  bold
                />
              </a>
            </Link>
          </div>

          <div className="img">
            <Image src="/banner-mulher.png" layout="fill" alt="Mulher" />
          </div>
        </div>
        <div className="content_image">
          <Image src="/mulher_mercanet.png" layout="fill" alt="Image" />
        </div>
      </Container>
    </>
  );
};
