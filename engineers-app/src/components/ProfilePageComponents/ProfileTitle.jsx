import css from "../../css/EachProfile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { favoritesActions } from "../../store/favoritesSlice";
import { GrFavorite } from "react-icons/gr";
import { FcLike } from "react-icons/fc";

const ProfileTitle = ({ engineer }) => {
  const dispatch = useDispatch();

  const favoriteItems = useSelector((store) => store.favorites);

  const isFavorite = favoriteItems.includes(engineer.id);

  const handleAddToFav = () => {
    dispatch(favoritesActions.addToFavorite(engineer.id));
  };

  const handleRemoveFromFav = () => {
    dispatch(favoritesActions.removeFromFavorite(engineer.id));
  };
  return (
    <div className={css["name-designation"]}>
      <h1 className={css["engineer-name"]}>
        <b>{engineer.name}</b>
      </h1>
      <h5 className={css["engineer-designation"]}>
        ({engineer.designation}){" "}
        <div className={css.markFav}>
          {isFavorite ? (
            <FcLike
              size={40}
              style={{ marginLeft: "1rem" }}
              onClick={handleRemoveFromFav}
            />
          ) : (
            <GrFavorite
              size={40}
              style={{ marginLeft: "1rem" }}
              onClick={handleAddToFav}
            />
          )}
          <div className={css.markHide}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </div>
        </div>
      </h5>
    </div>
  );
};

export default ProfileTitle;
