import { GrFavorite } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { favoritesActions } from "../store/favoritesSlice";
import { profileSliceActions } from "../store/profileSlice";

const EachTalent = ({ talent }) => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((store) => store.favorites);

  const isFavorite = favoriteItems.includes(talent.id);

  const handleAddToFav = () => {
    dispatch(favoritesActions.addToFavorite(talent.id));
  };

  const handleRemoveFromFav = () => {
    dispatch(favoritesActions.removeFromFavorite(talent.id));
  };

  const handleViewProfile = () => {
    dispatch(profileSliceActions.showProfile(talent.id));
    window.scrollTo(0, 0);
  };

  return (
    <div className="card wrapper" style={{ width: "15rem" }}>
      <img
        src={talent.profilePicture}
        className="card-img-top"
        alt="engineer profile image"
      />
      <div className="card-body">
        <h5 className="card-title my-title">
          {talent.name}
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
            {talent.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </li>
        <li className="list-group-item">
          <b>Experience: </b>
          {talent.experience} years
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

export default EachTalent;
