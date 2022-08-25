import type { User } from 'firebase/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

import { app } from '../../firebase/config';

type TAuthUserContext = {
  authUser: null | User;
  loading: boolean;
};

export const AuthUserContext = createContext<TAuthUserContext>({
  authUser: null,
  loading: true,
});

const AuthUserProvider = ({ children }: { children: any }) => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const authStateChanged = async (authState: any) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
    } else {
      setLoading(true);
      setAuthUser(authState);
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return (
    <AuthUserContext.Provider value={{ authUser, loading }}>
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserProvider;
