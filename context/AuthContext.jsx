"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const DEMO_USERS = [
  { email: "admin@myshop.com", password: "admin123", role: "admin" },
  { email: "user@myshop.com", password: "user123", role: "user" },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { email, role }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("myshop_user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const found = DEMO_USERS.find(
      (u) => u.email === email && u.password === password
    );
    if (!found) {
      throw new Error("Email atau password salah");
    }

    const loggedUser = { email: found.email, role: found.role };
    setUser(loggedUser);
    window.localStorage.setItem("myshop_user", JSON.stringify(loggedUser));
    return loggedUser;
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("myshop_user");
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
