import { createContext, useState } from "react";
import { AuthContextType, ProviderProps } from "../@types/starships";

export const AuthContext = createContext<AuthContextType>({
  showSignInModal: false,
  setShowSignInModal: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  handleSignIn: () => {},
});

export const AuthProvider = ({ children }: ProviderProps) => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignIn = () => {
    //RegEx to validate email and password
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^.{6,}$/;

    if (!emailPattern.test(email)) {
      setEmailError("Invalid email format");
      return;
    } else {
      setEmailError("");
    }

    if (!passwordPattern.test(password)) {
      setPasswordError("Password must be at least 6 characters");
      return;
    } else {
      setPasswordError("");
    }

    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };

  /* const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  }; */

  return (
    <AuthContext.Provider
      value={{
        showSignInModal,
        setShowSignInModal,
        email,
        setEmail,
        password,
        setPassword,
        handleSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
