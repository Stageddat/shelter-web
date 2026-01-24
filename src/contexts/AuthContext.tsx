"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  masterKey: CryptoKey | null;
  setMasterKey: (key: CryptoKey | null) => void;
  isAuthenticated: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [masterKey, setMasterKey] = useState<CryptoKey | null>(null);

  const logout = () => {
    setMasterKey(null);
  };

  return (
    <AuthContext.Provider
      value={{
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
