import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Header from "./Header";

describe("Header Component Test", () => {
  test("logo renders properly", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const svgImage = screen.getByRole("img");
    expect(svgImage).toBeDefined();
  });
  test("sign up renders properly", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const signUpButton = screen.getByRole("button", { name: "SIGN UP" });
    expect(signUpButton).toBeDefined();
  });
  test("should open sign-in modal when sign-up button is clicked", () => {
    const mockSetShowSignInModal = jest.fn();
    const mockSetEmail = jest.fn();
    const mockSetPassword = jest.fn();
    const mockSetIsLoggedIn = jest.fn();
    const mockHandleSignIn = jest.fn();
    render(
      <Router>
        <AuthContext.Provider
          value={{
            showSignInModal: false,
            setShowSignInModal: mockSetShowSignInModal,
            email: "",
            setEmail: mockSetEmail,
            password: "",
            setPassword: mockSetPassword,
            setIsLoggedIn: mockSetIsLoggedIn,
            handleSignIn: mockHandleSignIn,
            emailError: "",
            passwordError: "",
            isLoggedIn: false,
          }}
        >
          <Header />
        </AuthContext.Provider>
      </Router>
    );
    const signUpButton = screen.getByRole("button", { name: "SIGN UP" });
    fireEvent.click(signUpButton);
    expect(mockSetShowSignInModal).toHaveBeenCalledWith(true);
  });
});
