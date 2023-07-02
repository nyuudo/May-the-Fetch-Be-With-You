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
  } = useContext(AuthContext);

  const handleCloseClick = () => {
    setShowSignInModal(false);
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={`modalOverlay ${showSignInModal ? "show" : ""}`}>
      <form className="modal" onSubmit={handleSubmit}>
        <button className="closeModal" onClick={handleCloseClick}>
          X
        </button>
        <div className="modalContent">
          <h2>Enter Your Email Address</h2>
          <div className="inputContainer">
            <input
              className="inputValues"
              type="email"
              name=""
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="inputValues"
              type="password"
              name=""
              id=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="moreInfo" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInModal;

/*
    Enter at least 6 characters.
    Use letters together with spaces, numbers, or symbols (!@#$%^&*).
*/
