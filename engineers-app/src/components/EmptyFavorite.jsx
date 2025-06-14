import { Link } from "react-router-dom";
import css from "../css/EmptyFavorite.module.css";

const EmptyFavorite = () => {
  return (
    <div className={` text-center ${css["empty-message"]}`}>
      <h1
        className={`display-5 fw-bold text-body-emphasis ${css["empty-heading"]}`}
      >
        No engineers are in your Favorites list.
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className={` mb-4 ${css["empty-para"]}`}>
          Visit the developer's page and add your favorite engineers to your
          list by clicking the button below.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to="/developers">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              style={{
                backgroundColor: "rgb(41, 41, 87)",
                borderColor: "rgb(41, 41, 87)",
              }}
            >
              Add Engineers to Your Favorites
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyFavorite;
