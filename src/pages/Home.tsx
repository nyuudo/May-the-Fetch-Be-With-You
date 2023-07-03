import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import SignInModal from "../components/SignInModal";
import LogInModal from "../components/LogInModal";

const Home = () => {
  const { showSignInModal, showLogInModal } = useContext(AuthContext);
  return (
    <div className="introHome">
      <h1 className="introText">
        In an Application Programming Interface far, far away...
      </h1>
      <button className="moreInfo">
        <Link to="/starships" className="linkRouter">
          MAY THE FETCH BE WITH YOU
        </Link>
      </button>
      {showSignInModal ? <SignInModal /> : null}
      {showLogInModal ? <LogInModal /> : null}
    </div>
  );
};

export default Home;
