import Image from 'next/image';

import { Container } from './styles';

import iconMercanet from '@/assets/BannerSolutions/logo-banner.svg';

export const BannerSolutions = () => {
  return (
    <>
      <Container>
        <div className="solucoes__title">
          <div className="img">
            <Image src={iconMercanet} alt="Mercanet" />
          </div>
          <h2>Soluções para todos os mercados</h2>
        </div>
        <div className="solucoes__container">
          <div className="solucoes__container__box">
            <div className="solucoes__box">
              <div className="img">
                <Image
                  src="/alimenticio.png"
                  width={45}
                  height={45}
                  alt="Alimenticio"
                />
              </div>
              <p>Alimenticio</p>
            </div>
            <div className="solucoes__box">
              <div className="img">
                <Image
                  src="/farmaceutico.png"
                  width={45}
                  height={45}
                  alt="Farmaceutico"
                />
              </div>
              <p>Farmacêutico</p>
            </div>
            <div className="solucoes__box">
              <div className="img">
                <Image
                  src="/eletronico.svg"
                  width={45}
                  height={45}
                  alt="Eletronico"
                />
              </div>
              <p>Eletro Eletrônico</p>
            </div>
            <div className="solucoes__box">
              <div className="img">
                <Image
                  src="/ferramentas.png"
                  width={45}
                  height={45}
                  alt="Ferramentas"
                />
              </div>
              <p>Ferramentas</p>
            </div>
            <div className="solucoes__box">
              <div className="img">
                <Image
                  src="/distribuidores.png"
                  width={45}
                  height={45}
                  alt="Distribuidores"
                />
              </div>
              <p>Distribuidores</p>
            </div>
            <div className="solucoes__box">
              <div className="img">
                <Image
                  src="/limpeza.png"
                  width={45}
                  height={45}
                  alt="Higiene e limpeza"
                />
              </div>
              <p>Higiene e limpeza</p>
            </div>
            <div className="solucoes__box">
              <div className="img">
                <Image
                  src="/cama.png"
                  width={45}
                  height={45}
                  alt="Cama, mesa e banho"
                />
              </div>
              <p>Cama, mesa e banho</p>
            </div>
            <div className="solucoes__box">
              <div className="img">
                <Image
                  src="/construcao.png"
                  width={45}
                  height={45}
                  alt="Construção"
                />
              </div>
              <p>Construção</p>
            </div>
            <div className="solucoes__box">
              <div className="img">
                <Image
                  src="/utilidades-domesticas.png"
                  width={45}
                  height={45}
                  alt="Construção"
                />
              </div>
              <p>Utilidades domésticas</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
