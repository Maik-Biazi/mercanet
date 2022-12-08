import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import { Navbar } from '../Navbar';
import { Container } from './styles';

import iconDemonstration from '@/assets/icon-demons.svg';
import iconWork from '@/assets/icon-work.svg';
import {
  ButtonClient,
  ButtonPrimary,
  ButtonSecondary,
  ButtonWork,
} from '../Button';

interface headerProps {
  data: string;
  client: string;
}

export const HeaderEmpresa = ({ data, client }: headerProps) => {
  return (
    <>
      <Navbar client={client} />
      <Container>
        <div className="content">
          <div className="esq">
            <div className="h2">
              <h2>Eficiência em </h2>
              <span>Gestão de Vendas</span>
            </div>
            <div className="links">
              <a
                href="https://mercanet.kretos.cc/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={iconWork} alt="icon work" />
                Trabalhe conosco
              </a>
              <Link href="/contato">
                <a>
                  <Image src={iconDemonstration} alt="icon demonstracao" />
                  Solicite uma demonstração
                </a>
              </Link>
            </div>
          </div>
          <div className="dir">
            <div className="title">
              <span>Sobre a </span>
              <h1>Mercanet</h1>
            </div>
            <div className="p">
              <ReactMarkdown>{data}</ReactMarkdown>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
