import css from "../../css/EachProfile.module.css";

const ProfileHeader = ({ engineer }) => {
  return (
    <>
      <div
        className={css["cover-pic"]}
        style={{
          backgroundImage: "url(images/cover.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      <div className={`ratio ratio-1x1 ${css["profile-pic"]}`}>
        <img
          style={{
            backgroundImage: `url(${engineer.profilePicture})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </div>
    </>
  );
};

export default ProfileHeader;
