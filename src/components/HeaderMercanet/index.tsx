import { Navbar } from '../Navbar';
import { Container } from './styles';

export const HeaderMercanet = ({ ...props }: any) => {
  return (
    <>
      <Container>
        <Navbar client={props.client} />
        <div className="content" id="geral">
          <div className="title">
            <span>Conheça o</span>
            <h1>Mercanet</h1>
            <div className="tags">
              <ul>
                <li>Visão 360º</li>
                <li>Mobilidade</li>
                <li>Flexibilidade</li>
              </ul>
            </div>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="#geral">Visão geral</a>
              </li>
              <li>
                <a href="#features">Funcionalidades</a>
              </li>
              <li>
                <a href="#results">Resultados</a>
              </li>
              <li>
                <a href="#Benefits">Vantagens</a>
              </li>
            </ul>
          </div>
          <div className="text">
            <h2 id="geral">Solução completa para força de vendas!</h2>
            <div className="p">
              <p>
                Os constantes avanços na tecnologia (em especial na área de
                computação móvel) permitem que o trabalhador em movimento ignore
                as fronteiras existentes entre o trabalho, a casa e a viagem. A
                era da mobilidade muda o conceito tradicional da paralisação.
              </p>
              <p>
                As empresas descobriram que os trabalhadores podem acessar
                informações localmente, junto aos clientes ou em qualquer parte
                do mundo, obtendo um ganho considerável em termos de eficiência
                e produtividade.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
