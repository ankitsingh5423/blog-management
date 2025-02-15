import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../config/appwriteConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    try {
      const loggedIn = await account.createEmailPasswordSession(
        email,
        password
      );
      console.log("user.......", user);

      setUser(loggedIn);
      window.location.replace("/");
    } catch (error) {
      throw error;
    }
  }

  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
