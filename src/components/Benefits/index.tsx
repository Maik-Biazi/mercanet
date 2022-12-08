import Image from 'next/image';

import { Container } from './styles';

import icon360 from '@/assets/Benefits/icon-360.svg';
import iconAvaliacao from '@/assets/Benefits/avaliacao.png';
import iconCalculo from '@/assets/Benefits/calculo.png';
import iconConsistencia from '@/assets/Benefits/consistencia.png';
import iconFlexi from '@/assets/Benefits/flexi.png';
import iconWork from '@/assets/Benefits/work.png';
import iconMonitoramento from '@/assets/Benefits/monitoramento.png';
import iconRelatorio from '@/assets/Benefits/relatorio.png';

export const Benefits = () => {
  return (
    <>
      <Container>
        <h2 id="Benefits">Vantagens</h2>
        <div className="content">
          <div className="box">
            <div className="img">
              <Image src={icon360} alt="Icon 360" />
            </div>
            <div className="infos">
              <h3>360º</h3>
              <span>Permite ter visão 360 graus dos clientes</span>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <Image src={iconConsistencia} layout="fixed" alt="Icon 360" />
            </div>
            <div className="infos">
              <h3>Consistência</h3>
              <span>99,9% das políticas no ato da venda</span>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <Image src={iconFlexi} layout="fixed" alt="Icon 360" />
            </div>
            <div className="infos">
              <h3>Flexibilidade</h3>
              <span>
                Agilidade na criação e manipulação de regras de negócio,
                políticas comerciais, bonificações e campanhas promocionais
              </span>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <Image src={iconCalculo} layout="fixed" alt="Icon 360" />
            </div>
            <div className="infos">
              <h3>Cálculo</h3>
              <span>dos impostos e atribuição automática da regra fiscal</span>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <Image src={iconWork} layout="fixed" alt="Icon 360" />
            </div>
            <div className="infos">
              <h3>Workflow</h3>
              <span>
                de aprovação de pedidos com definição de limites por alçadas
              </span>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <Image src={iconRelatorio} layout="fixed" alt="Icon 360" />
            </div>
            <div className="infos">
              <h3>Relatórios</h3>
              <span>
                de dados analíticos, gerenciais, gráficos e dashboards
                totalmente configuráveis
              </span>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <Image src={iconMonitoramento} layout="fixed" alt="Icon 360" />
            </div>
            <div className="infos">
              <h3>Monitoramento</h3>
              <span>da eficiência do trabalho da equipe</span>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <Image src={iconAvaliacao} layout="fixed" alt="Icon 360" />
            </div>
            <div className="infos">
              <h3>Avaliação</h3>
              <span>
                lucratividade por pedido e consolidada, com definição de
                fórmulas para composição da DRE
              </span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
