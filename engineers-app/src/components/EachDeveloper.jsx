import { GrFavorite } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { favoritesActions } from "../store/favoritesSlice";
import { profileSliceActions } from "../store/profileSlice";

const EachDeveloper = ({ engineer }) => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((store) => store.favorites);

  const isFavorite = favoriteItems.includes(engineer.id);

  const handleAddToFav = () => {
    dispatch(favoritesActions.addToFavorite(engineer.id));
  };

  const handleRemoveFromFav = () => {
    dispatch(favoritesActions.removeFromFavorite(engineer.id));
  };

  const handleViewProfile = () => {
    dispatch(profileSliceActions.showProfile(engineer.id));
    window.scrollTo(0, 0);
  };

  return (
    <div className="card engineer-card" style={{ width: "18rem" }}>
      <img
        src={engineer.profilePicture}
        className="card-img-top"
        alt="engineer profile image"
      />
      <div className="card-body">
        <h5 className="card-title my-title">
          {engineer.name}
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
        <li className="list-group-item">
          <b>Skills:</b> {engineer.skills.join(", ")}
        </li>
        <li className="list-group-item">
          <b>Experience: </b>
          {engineer.experience} years
        </li>
        <li className="list-group-item">
          <b>Location: </b> {engineer.location}
        </li>
        <li className="list-group-item">
          <b>Current company: </b>
          {engineer.currentCompany}
        </li>
        <li className="list-group-item">
          <b>Availability: </b>
          {engineer.availability}
        </li>
      </ul>
      <Link
        to="/profiles"
        className="btn btn-primary"
        onClick={handleViewProfile}
      >
        View Profile
      </Link>
    </div>
  );
};

export default EachDeveloper;
