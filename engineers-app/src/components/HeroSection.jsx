import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      style={{
        position: "relative",
        color: "black",
      }}
    >
      <div
        className="position-relative overflow-hidden p-3 p-md-5 text-center bg-body-tertiary hero-section-heading"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('images/hero-section-bg.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <div
          className="col-md-6 p-lg-5 mx-auto my-5"
          style={{ position: "relative", zIndex: 1 }}
        >
          <h1 className="display-3 fw-bold">Designed For Developers</h1>
          <h3 className="fw-normal mb-3">
            Discover and Hire the Ideal Developer for Your Team
          </h3>
          <Link to="/developers">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => window.scrollTo(0, 0)}
            >
              <b>Begin Your Hiring Journey</b>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
