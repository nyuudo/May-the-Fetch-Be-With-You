import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Nav = () => {
  const { setShowMessage } = useContext(AuthContext);

  return (
    <nav>
      <button>
        <Link to="/" className="navLink">
          HOME
        </Link>
      </button>
      <button onClick={() => setShowMessage(true)}>
        <Link to="/starships" className="navLink">
          STARSHIPS
        </Link>
      </button>
    </nav>
  );
};

export default Nav;
