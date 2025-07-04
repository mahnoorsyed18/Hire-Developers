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
          src={engineer.profilePicture}
          alt={`${engineer.name}'s profile`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
};

export default ProfileHeader;
