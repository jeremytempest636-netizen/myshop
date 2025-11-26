"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

// Demo users di frontend (untuk contoh saja)
const DEMO_USERS = [
  { email: "admin@myshop.com", password: "admin123", role: "admin" },
  { email: "user@myshop.com", password: "user123", role: "user" },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { email, role } atau null
  const [loading, setLoading] = useState(true);

  // Load dari localStorage biar gak hilang kalau refresh
  useEffect(() => {
    const saved = typeof window !== "undefined"
      ? window.localStorage.getItem("myshop_user")
      : null;
    if (saved) {
      setUser(JSON.parse(saved));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Di sini kita bisa panggil API /api/login, tapi untuk demo
    // kita cocokkan langsung dengan DEMO_USERS
    const found = DEMO_USERS.find(
      (u) => u.email === email && u.password === password
    );
    if (!found) {
      throw new Error("Email atau password salah");
    }

    const loggedUser = { email: found.email, role: found.role };
    setUser(loggedUser);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("myshop_user", JSON.stringify(loggedUser));
    }
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
  if (!ctx) {
    throw new Error("useAuth must be used inside <AuthProvider>");
  }
  return ctx;
}
