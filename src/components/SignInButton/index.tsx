import { FiUser } from 'react-icons/fi';

import { Container } from './styles';

export function SignInButton () {

  const name = "Rodrigo";

  return(
    <Container>
      <p>Bem vindo, <span>{name}</span></p>
      <FiUser size={24} />
    </Container>
  )
}