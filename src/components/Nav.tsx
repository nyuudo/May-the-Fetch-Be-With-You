import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <button>
        <Link to="/" className="linkRouter">
          HOME
        </Link>
      </button>
      <button>
        <Link to="/starships" className="linkRouter">
          STARSHIPS
        </Link>
      </button>
    </nav>
  );
};

export default Nav;
