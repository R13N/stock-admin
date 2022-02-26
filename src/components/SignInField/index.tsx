import { useState } from 'react';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../context/AuthProvider/useAuth';


import { Button, Container } from './styles';

export function SignInField() {

  const [ userEmailLogin, setUserEmailLogin ] = useState('');
  const [ userPasswordLogin, setUserPasswordLogin ] = useState('');

  const auth = useAuth();

  async function handleLoginAuth() {
    await auth.authenticate(userEmailLogin, userPasswordLogin);
  }
  
  function handleLogoutAuth() {
    auth.logout();
    setUserEmailLogin('');
    setUserPasswordLogin('');
  }

  
  console.log(auth.isLoggedIn);

  return (
    auth.isLoggedIn ? (
      <Container>
        <p>Bem vindo, <span>{auth.username}</span></p>
        <Button
          onClick={handleLogoutAuth}
        >
          <p>LOGOUT</p>
          <FiLogOut size={24}  color={'#fa5c5c'}/>
        </Button>
      </Container>
    )
    :
    (
      <Container>
        <form>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder='E-mail'
            onChange={e => setUserEmailLogin(e.target.value)}
          />
          <input 
            type="password" 
            name="password" 
            id="password"
            placeholder='Senha'
            onChange={e => setUserPasswordLogin(e.target.value)}
          />
        </form>
        <Button
          onClick={handleLoginAuth}
        >
          <p>LOGIN</p>
          <FiLogIn size={24} color={'#7efd5e'}/>
        </Button>
      </Container>
    )
  )
}