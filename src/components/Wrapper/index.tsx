import { useAuth } from '../../context/AuthProvider/useAuth';
import MainRoutes from '../../routes';

import { NoRouteMessage } from './styles';

export function Wrapper() {

  const auth = useAuth();

  return auth.isLoggedIn ? 
    (
      <MainRoutes />
    )
      :
    (
      <NoRouteMessage>
        <p>Mande um e-mail para <strong>contato@trezetech.com.br</strong> e solicite email e senha para o acesso.</p>
      </NoRouteMessage>
    )
}