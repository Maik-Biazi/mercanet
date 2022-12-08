import { Navbar } from '../Navbar';
import { Container } from './styles';

export const HeaderCase = ({ ...props }: any) => {
  return (
    <>
      <Container>
        <Navbar client={props.client} />
        <h1>
          <span>Nossos</span>
          <span>Cases</span>
        </h1>
      </Container>
    </>
  );
};
