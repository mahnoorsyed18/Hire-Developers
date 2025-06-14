import { GrFavorite } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { favoritesActions } from "../store/favoritesSlice";
import { profileSliceActions } from "../store/profileSlice";

const EachExperienced = ({ experience }) => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((store) => store.favorites);

  const isFavorite = favoriteItems.includes(experience.id);

  const handleAddToFav = () => {
    dispatch(favoritesActions.addToFavorite(experience.id));
  };

  const handleRemoveFromFav = () => {
    dispatch(favoritesActions.removeFromFavorite(experience.id));
  };

  const handleViewProfile = () => {
    dispatch(profileSliceActions.showProfile(experience.id));
    window.scrollTo(0, 0);
  };

  return (
    <div className="card wrapper" style={{ width: "15rem" }}>
      <img
        src={experience.profilePicture}
        className="card-img-top"
        alt="engineer profile image"
      />
      <div className="card-body">
        <h5 className="card-title my-title">
          {experience.name}
          <div className="mark-fav">
            {isFavorite ? (
              <FcLike size={28} onClick={handleRemoveFromFav} />
            ) : (
              <GrFavorite size={28} onClick={handleAddToFav} />
            )}
            <div className="hide">
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </div>
          </div>
        </h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item" style={{ height: "6.2rem" }}>
          <b>Skills:</b>
          <ul className="skills-list">
            {experience.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </li>
        <li className="list-group-item">
          <b>Experience: </b>
          {experience.experience} years
        </li>
      </ul>
      <Link
        to="/profiles"
        className="btn btn-primary profile-btn"
        onClick={handleViewProfile}
      >
        View Profile
      </Link>
    </div>
  );
};

export default EachExperienced;
