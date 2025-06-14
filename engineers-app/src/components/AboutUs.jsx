import css from "../css/AboutUs.module.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div
      className="p-5 bg-body-tertiary"
      style={{
        position: "relative",
        color: "black",
      }}
    >
      <div
        className="background-image"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('images/background-image.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.2,
          zIndex: 0,
        }}
      ></div>

      <div
        className={`container py-5 ${css["about-us-main"]}`}
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className={css["left-section"]}>
          <h1 className="text-body-emphasis">
            <b>ABOUT US</b>
          </h1>
          <p className="col-lg-8">
            At Hire Developers, we bridge the gap between talented developers
            and clients seeking top-notch expertise. Our platform offers
            developers a space to showcase their skills and attract
            opportunities while providing clients with access to a diverse pool
            of professionals from around the world. Whether you're looking to
            advance your career or find the perfect developer for your project,
            Hire Developers connects you with exceptional talent and innovative
            solutions, all in one place.
          </p>
          <Link to="/about-us-details">
            <button
              type="button"
              className="btn btn-info"
              style={{
                backgroundColor: "rgb(41, 41, 87)",
                color: "white",
                borderColor: "rgb(41, 41, 87)",
              }}
              onClick={() => window.scrollTo(0, 0)}
            >
              Learn More
            </button>
          </Link>
        </div>
        <div className={css["right-section"]}>
          <img
            src="images/about-us-page.jpeg"
            alt="developers picture"
            height="350px"
            width="350px"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
