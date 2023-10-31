import { Container, Divider } from './styles';

export function Section({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Divider />
      {children}
    </Container>
  );
}
