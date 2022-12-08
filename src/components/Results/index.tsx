import Image from 'next/image';

import { Container } from './styles';

import icon01 from '@/assets/Results/01.png';
import icon02 from '@/assets/Results/02.png';
import icon03 from '@/assets/Results/03.png';
import icon04 from '@/assets/Results/04.png';
import icon05 from '@/assets/Results/05.png';
import icon06 from '@/assets/Results/06.png';
import icon07 from '@/assets/Results/07.png';
import icon08 from '@/assets/Results/08.png';

export const Results = () => {
  return (
    <>
      <Container>
        <div className="content" id="results">
          <h2>Resultados reais!</h2>
          <ul>
            <li>
              <div className="img">
                <Image src={icon01} layout="fixed" alt="Image" />
              </div>
              <span>
                Controle completo e automatizado de todo processo de venda
              </span>
            </li>
            <li>
              <div className="img">
                <Image src={icon02} layout="fixed" alt="Image" />
              </div>
              <span>Adequação do cenário tecnológico </span>
            </li>
            <li>
              <div className="img">
                <Image src={icon03} layout="fixed" alt="Image" />
              </div>
              <span>
                Maior agilidade e melhor qualidade no processo comercial
              </span>
            </li>
            <li>
              <div className="img">
                <Image src={icon04} layout="fixed" alt="Image" />
              </div>
              <span>Aderência ao negócio do cliente </span>
            </li>
            <li>
              <div className="img">
                <Image src={icon05} layout="fixed" alt="Image" />
              </div>
              <span>
                Adição de mais recursos e mais mobilidade para equipe de vendas
              </span>
            </li>
            <li>
              <div className="img">
                <Image src={icon06} layout="fixed" alt="Image" />
              </div>
              <span>
                Maior flexibilização nas negociações, sem perder o controle{` `}
              </span>
            </li>
            <li>
              <div className="img">
                <Image src={icon07} layout="fixed" alt="Image" />
              </div>
              <span>Melhoria na satisfação da equipe de vendas </span>
            </li>
            <li>
              <div className="img">
                <Image src={icon08} layout="fixed" alt="Image" />
              </div>
              <span>
                Utilização das ferramentas de forma efetiva para gerar mais
                resultados{` `}
              </span>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};
