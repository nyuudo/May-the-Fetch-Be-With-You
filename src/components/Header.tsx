import starwars from "../assets/star-wars.svg";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();
  const { setShowSignInModal } = useContext(AuthContext);

  const handleSignUpClick = () => {
    setShowSignInModal(true);
  };

  return (
    <header>
      <img className="brand" src={starwars} alt="brand" />
      {location.pathname !== "/starships" && (
        <>
          <button className="loginSignin" onClick={handleSignUpClick}>
            SIGN UP
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
