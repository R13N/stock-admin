import { SignInButton } from '../SignInButton';

import { Container } from './styles';

export function Header() {
  return(
    <Container>
      <h1>Controle de estoque</h1>
      <SignInButton />
    </Container>
  )
}