import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const API = "http://localhost:5000/api/auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("mumtaz_user"));
  });

  const login = async (data) => {
    try {
      const res = await axios.post(`${API}/login`, data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("mumtaz_user", JSON.stringify(res.data.user));

      setUser(res.data.user);
      return { ok: true };
    } catch (err) {
      return {
        ok: false,
        error: err.response?.data?.message || "Login failed",
      };
    }
  };

  const signup = async (data) => {
    try {
      const res = await axios.post(`${API}/signup`, data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("mumtaz_user", JSON.stringify(res.data.user));

      setUser(res.data.user);
      return { ok: true };
    } catch (err) {
      return {
        ok: false,
        error: err.response?.data?.message || "Signup failed",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("mumtaz_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);