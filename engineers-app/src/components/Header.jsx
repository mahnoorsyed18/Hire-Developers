import { Link } from "react-router-dom";
import css from "../css/Header.module.css";

const Header = () => {
  return (
    <header>
      <div
        className={`d-flex flex-column flex-md-row align-items-center pb-3 border-bottom ${css.header}`}
      >
        <div>
          <Link
            to="/"
            className="d-flex align-items-center link-body-emphasis text-decoration-none"
          >
            <span className={`fs-4 ${css.title}`}>
              <img
                src="./images/logo.png"
                alt="logo"
                height="50px"
                width="50px"
              />
              HIRE DEVELOPERS
            </span>
          </Link>
        </div>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <Link
            className="me-3 py-2 link-body-emphasis text-decoration-none"
            to="/"
          >
            <b className={css["nav-clicks"]}>Home</b>
            {"  "}
          </Link>
          <Link
            className="me-3 py-2 link-body-emphasis text-decoration-none"
            to="/developers"
          >
            <b className={css["nav-clicks"]}>Developers</b>
            {"  "}
          </Link>
          <Link
            className="me-3 py-2 link-body-emphasis text-decoration-none"
            to="/favorites"
          >
            <b className={css["nav-clicks"]}>Favorites</b>
            {"  "}
          </Link>
          <Link
            className="py-2 link-body-emphasis text-decoration-none"
            to="/about-us"
          >
            <b className={css["nav-clicks"]}>About Us</b>
            {"  "}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
