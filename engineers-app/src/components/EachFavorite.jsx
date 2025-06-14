import { FcLike } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { favoritesActions } from "../store/favoritesSlice";
import { profileSliceActions } from "../store/profileSlice";

const EachFavorite = ({ engineer }) => {
  const allSkills = engineer.skills.join(", ");
  const dispatch = useDispatch();

  const handleRemoveFavs = () => {
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
          {engineer.name}{" "}
          <div className="mark-fav">
            <FcLike size={28} onClick={handleRemoveFavs} />

            <div className="hide">Remove from Favorites</div>
          </div>
        </h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <b>Skills:</b> {allSkills}
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

export default EachFavorite;
