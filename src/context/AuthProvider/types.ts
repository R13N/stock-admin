export interface IUser {
  email?: string;
  username?: string;
  token?: string;
}

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoggedIn: boolean;
}

export interface IAuthProvider {
  children: JSX.Element[];
}