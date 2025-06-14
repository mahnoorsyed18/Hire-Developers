import Experienced from "../components/Experienced";
import FetchTalents from "../components/FetchTalents";
import HeroSection from "../components/HeroSection";
import Talents from "../components/Talents";
import FetchExperienced from "../components/FetchExperienced";
import Metrics from "../components/Metrics";

const Home = () => {
  return (
    <div
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
      <div className="content" style={{ position: "relative", zIndex: 1 }}>
        <HeroSection />
        <FetchTalents />
        <div id="talents">
          <Talents />
        </div>
        <FetchExperienced />
        <div id="experienced">
          <Experienced />
        </div>
        <Metrics />
      </div>
    </div>
  );
};

export default Home;
