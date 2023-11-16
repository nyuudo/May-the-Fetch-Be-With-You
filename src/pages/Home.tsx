import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import SignInModal from "../components/SignInModal";

const Home = () => {
  const { showSignInModal, isLoggedIn, showMessage, setShowMessage } =
    useContext(AuthContext);

  const handleButtonClick = () => {
    if (!isLoggedIn) {
      setShowMessage(true);
    } else {
      return <Navigate to="/starships" />;
    }
  };

  return (
    <div className="starryNight">
      <div className="welcome-container">
        <h1 className="introText">
          In an Application Programming Interface far, far away...
        </h1>
        <button className="welcome-button" onClick={handleButtonClick}>
          <Link to="/starships">MAY THE FETCH BE WITH YOU</Link>
        </button>

        {showSignInModal ? <SignInModal /> : null}
        {showMessage
          ? !isLoggedIn && (
              <span className="warning-message">
                To access the content, sign in You must
              </span>
            )
          : null}
      </div>
    </div>
  );
};

export default Home;
