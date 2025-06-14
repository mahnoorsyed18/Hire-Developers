import { useSelector } from "react-redux";
import EmptyFavorite from "./EmptyFavorite";
import EachFavorite from "./EachFavorite";

const Favorites = () => {
  const favItems = useSelector((store) => store.favorites);
  const engineers = useSelector((store) => store.engineers);
  const finalFavItems = engineers.filter((engineer) => {
    const engineerFound = favItems.indexOf(engineer.id);
    return engineerFound >= 0;
  });

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
        {favItems.length === 0 ? (
          <EmptyFavorite />
        ) : (
          <div className="engineers-container">
            {finalFavItems.map((engineer) => (
              <EachFavorite engineer={engineer} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
