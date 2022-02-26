import { SignInField } from '../SignInField';

import { Container } from './styles';

export function Header() {
  return(
    <Container>
      <div>
        <span>Controle de estoque</span>
      </div>
      <SignInField />
    </Container>
  )
}