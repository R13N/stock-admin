import { createContext, useEffect, useState} from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function authenticate (email: string, password: string) {
    const response = await LoginRequest(email, password);

    const payload = {token: response.token, email, username: response.user.username};

    setUser(payload);
    setUserLocalStorage(payload);
    if(payload.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }
  
  function logout () {
    setUser(null);
    setUserLocalStorage(null);
    setIsLoggedIn(false);
  }

  useEffect(() =>{
    const userLocalStorage = getUserLocalStorage()

    if(userLocalStorage) {
      setUser(userLocalStorage)
      setIsLoggedIn(true);
    }
  }, [])

  return (
    <AuthContext.Provider value={{...user, authenticate, logout, isLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}