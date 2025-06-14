import css from "../css/AboutUsDetails.module.css";

const AboutUsDetails = () => {
  return (
    <div
      className="p-5 text-center bg-body-tertiary"
      style={{ position: "relative", color: "black" }}
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
        className="container py-5"
        style={{ position: "relative", zIndex: 1 }}
      >
        <h1 className="text-body-emphasis">ABOUT US</h1>
        <p className="col-lg-8 mx-auto">
          Welcome to Hire Developers, where we connect talent with opportunity
          in the ever-evolving tech industry. Our mission is to create a dynamic
          platform that empowers developers from around the world to showcase
          their skills, advance their careers, and connect with potential
          clients seeking top-tier expertise.
        </p>
        <p className="col-lg-8 mx-auto">
          At Hire Developers, we believe in unlocking potential. We offer a
          space where developers of all specializations—from frontend wizards to
          backend gurus, and everything in between—can present their profiles,
          highlight their skills, and attract exciting opportunities. Whether
          you’re an up-and-coming talent or a seasoned professional, our
          platform provides the visibility and tools you need to shine.
        </p>
        <p className="col-lg-8 mx-auto">
          For clients, our platform is a gateway to a global pool of talented
          developers. Discover professionals with diverse skills and experience
          levels from various countries, all within a single, streamlined
          interface. Find the right match for your projects, engage in direct
          communication, and leverage the expertise of developers who are
          passionate about their craft.
        </p>
        <p className="col-lg-8 mx-auto">
          Hire Developers is more than just a job board—it’s a community. We
          facilitate meaningful interactions between developers and clients,
          ensuring that both parties find exactly what they’re looking for. Our
          commitment to fostering a collaborative environment means you get
          access to exceptional talent and innovative solutions, no matter where
          you are.
        </p>
        <p className="col-lg-8 mx-auto">
          Join us today and experience the future of hiring and career
          advancement. At Hire Developers, the best developers and the most
          exciting opportunities are just a click away.
        </p>
      </div>
    </div>
  );
};

export default AboutUsDetails;
