import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const LogInModal = () => {
  const {
    showLogInModal,
    setShowLogInModal,
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
    setShowLogInModal(false);
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
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };

  return (
    <div className={`modalOverlay ${showLogInModal ? "show" : ""}`}>
      <form className="modal" onSubmit={handleSubmit}>
        <button className="closeModal" onClick={handleCloseClick}>
          X
        </button>
        <div className="modalContent">
          <h2>LOG IN</h2>
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
          <button className="moreInfo" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogInModal;
