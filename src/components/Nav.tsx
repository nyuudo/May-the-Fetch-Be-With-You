import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <button>
        <Link to="/" className="navLink">
          HOME
        </Link>
      </button>
      <button>
        <Link to="/starships" className="navLink">
          STARSHIPS
        </Link>
      </button>
    </nav>
  );
};

export default Nav;
