import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import SignInModal from "../components/SignInModal";

const Home = () => {
  const { showSignInModal } = useContext(AuthContext);
  return (
    <div className="starryNight">
      <div className="welcome-container">
        <h1 className="introText">
          In an Application Programming Interface far, far away...
        </h1>
        <Link to="/starships" className="welcome-button">
          MAY THE FETCH BE WITH YOU
        </Link>
        {showSignInModal ? <SignInModal /> : null}
      </div>
    </div>
  );
};

export default Home;
