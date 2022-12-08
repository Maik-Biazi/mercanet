import Image from 'next/image';

import { Container } from './styles';

import iconEmpree from '@/assets/Differentials/icon-empree.svg';
import icon02 from '@/assets/Differentials/02.png';
import icon03 from '@/assets/Differentials/03.png';
import icon04 from '@/assets/Differentials/04.png';
import icon05 from '@/assets/Differentials/05.png';
import icon06 from '@/assets/Differentials/06.png';
import icon07 from '@/assets/Differentials/07.png';
import icon08 from '@/assets/Differentials/08.png';

export const Diferentials = () => {
  return (
    <>
      <Container>
        <div className="box">
          <div className="img">
            <Image src={iconEmpree} alt="icon" />
          </div>
          <span>Perfil empreendedor e inovador</span>
        </div>
        <div className="box">
          <div className="img">
            <Image src={icon02} alt="icon" />
          </div>
          <span>Uso de tecnologias de ponta, mundialmente reconhecidos</span>
        </div>
        <div className="box">
          <div className="img">
            <Image src={icon03} alt="icon" />
          </div>
          <span>Base sólida e portfólio diversificado de clientes</span>
        </div>
        <div className="box">
          <div className="img">
            <Image src={icon04} alt="icon" />
          </div>
          <span>Forte prestígio de marcas e produto</span>
        </div>
        <div className="box">
          <div className="img">
            <Image src={icon05} alt="icon" />
          </div>
          <span>Reputação corporativa e equipe profissional dinâmica</span>
        </div>
        <div className="box">
          <div className="img">
            <Image src={icon06} alt="icon" />
          </div>
          <span>Softwares abrangentes e de conceitos avançado</span>
        </div>
        <div className="box">
          <div className="img">
            <Image src={icon07} alt="icon" />
          </div>
          <span>Versatilidade na integração com outros sistemas</span>
        </div>
        <div className="box">
          <div className="img">
            <Image src={icon08} alt="icon" />
          </div>
          <span>Histórico de rentabilidade e solidez financeira</span>
        </div>
      </Container>
    </>
  );
};
