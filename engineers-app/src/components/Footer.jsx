import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import css from "../css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footerContent}>
        <div>
          <Link to="/">
            <span className={`fs-4 ${css.logo}`}>
              <img
                src="/images/logo.png"
                alt="logo"
                height="50px"
                width="50px"
              />
              HIRE DEVELOPERS
            </span>
          </Link>
        </div>
        <div className={css.footerLinks}>
          <Link
            to="/"
            className={css.footerLink}
            onClick={() => window.scrollTo(0, 0)}
          >
            Home
          </Link>
          <Link
            to="/developers"
            className={css.footerLink}
            onClick={() => window.scrollTo(0, 0)}
          >
            All Developers
          </Link>
          <Link
            to="/favorites"
            className={css.footerLink}
            onClick={() => window.scrollTo(0, 0)}
          >
            Your Favorite Developers
          </Link>
          <HashLink to="/#talents" className={css.footerLink}>
            Talented Developers
          </HashLink>
          <HashLink to="/#experienced" className={css.footerLink}>
            Experienced Developers
          </HashLink>
          <Link
            to="/about-us"
            className={css.footerLink}
            onClick={() => window.scrollTo(0, 0)}
          >
            About Us
          </Link>
        </div>
        <div className={css.footerInfo}>
          <p>&copy; 2024 Hire Developers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
