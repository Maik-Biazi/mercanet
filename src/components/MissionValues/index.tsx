import { Container } from './styles';

export const MissionValues = () => {
  return (
    <>
      <Container>
        <div className="box">
          <h2>Missão</h2>
          <span>
            Disponibilizar soluções avançadas em tecnologia da informação para
            gestão comercial.
          </span>
        </div>
        <div className="box">
          <h2>Visão</h2>
          <span>
            Ser reconhecida nacionalmente como a melhor e uma das princpais
            empresas de Solução de Gestão Comercial e Automação da Força de
            Vendas.
          </span>
        </div>
        <div className="box">
          <h2>Valores</h2>
          <ul>
            <li>Respeito as leis e aos princípios éticos</li>
            <li>Valorização das pessoas</li>
            <li>Compromisso com o cliente</li>
            <li>Qualidade e inovação</li>
            <li>Resultado sustentável</li>
          </ul>
        </div>
      </Container>
    </>
  );
};
