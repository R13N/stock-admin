import { Route } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider/useAuth';
import { Home } from '../pages/Home';

interface IProtectedRouteProps {
  pathName: string;
  elementName: JSX.Element;
}

export function ProtectedRoute({elementName, pathName}: IProtectedRouteProps) {
  
  const auth = useAuth();

  return auth.isLoggedIn ? 
    (
      <Route path={pathName} element={elementName} />
    ) 
    :
    (
      <Route path="/" element={<Home />}/>
    )
}