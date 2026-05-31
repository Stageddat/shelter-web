"use client";

import { User } from "@/lib/db";
import { getUser } from "@/lib/db.utils";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextType {
  user?: User;
  masterKey: CryptoKey | null;
  setMasterKey: (key: CryptoKey | null) => void;
  isAuthenticated: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [masterKey, setMasterKey] = useState<CryptoKey | null>(null);
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    getUser().then(setUser);
  }, []);

  const logout = () => {
    setMasterKey(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        masterKey,
        setMasterKey,
        isAuthenticated: masterKey !== null,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("dont use it here dumbass");
  }
  return context;
}
