import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { isExpired } from 'react-jwt';
import { api } from '../services/api';

interface UserAuth {
  id: string;
  name: string;
  avatar: string | null;
  email: string;
  subsidiary: {
    id: string;
    name: string;
    city: string;
    state: string;
    country: string;
    active: true;
  };
  office: {
    id: string;
    name: string;
  };
  bank_data: {
    id: string;
    account: string;
    account_type: string;
    agency: string;
    bank_name: string;
  }[];
  avatar_url: string | null;
  goal: string;
}

interface AuthState {
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
  office: string;
}
interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}



const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

  const ISSERVER = typeof window === "undefined";

  const [data, setData] = useState<AuthState>(() => {
    if (!ISSERVER) {
      const token = localStorage.getItem('@TriunfoDigital:token');
      const userAuth = localStorage.getItem('@TriunfoDigital:user');

      if (token && userAuth) {
        const isMyTokenExpired = isExpired(token);
        if (!isMyTokenExpired) {
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          return { token, userAuth: JSON.parse(userAuth) };
        }
      }
    }



    return {} as AuthState;
  });
  const signIn = useCallback(async ({ email, password, office }: SignInCredentials) => {
    const response = await api.post('/sessions', {
      email,
      password,
      office,
    });

    const { token } = response.data;

    localStorage.setItem('@TriunfoDigital:token', token);

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setData({ token });
  }, []);
  const signOut = useCallback(() => {
    localStorage.removeItem('@TriunfoDigital:token');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth só pode ser usado com o AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
