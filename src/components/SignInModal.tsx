import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const SignInModal = () => {
  const {
    showSignInModal,
    setShowSignInModal,
    email,
    setEmail,
    password,
    setPassword,
    setIsLoggedIn,
    handleSignIn,
    emailError,
    passwordError,
  } = useContext(AuthContext);

  const handleCloseClick = () => {
    setShowSignInModal(false);
    setEmail("");
    setPassword("");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoggedIn(true);
    handleSignIn();
  };

  return (
    <div className={`modalOverlay ${showSignInModal ? "show" : ""}`}>
      <form className="modal" onSubmit={handleSubmit}>
        <button className="closeButton" onClick={handleCloseClick}></button>
        <div className="modalContent">
          <h2>SIGN IN</h2>
          <div className={`form-group ${emailError ? "error" : ""}`}>
            <label>Email</label>
            <input
              className="inputValues"
              type="email"
              name=""
              id=""
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div className={`form-group ${passwordError ? "error" : ""}`}>
            <label>Password</label>
            <input
              className="inputValues"
              type="password"
              name=""
              id=""
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>
          <button className="modalButton" type="submit">
            CREATE ACCOUNT
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInModal;
