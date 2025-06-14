import { useDispatch, useSelector } from "react-redux";
import { profileSliceActions } from "../store/profileSlice";
import EachDeveloper from "./EachDeveloper";

const Developers = () => {
  const dispatch = useDispatch;
  const engineers = useSelector((store) => store.engineers);
  const handleProfileClick = (id) => {
    dispatch(profileSliceActions.showProfile(id));
  };

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

      <div className="engineers-container">
        {engineers.map((engineer) => (
          <EachDeveloper
            key={engineer.id}
            engineer={engineer}
            onClick={handleProfileClick(engineer.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Developers;
