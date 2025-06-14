import css from "../../css/EachProfile.module.css";

const ProfileInfo = ({ engineer }) => {
  return (
    <div className={css["charges-location"]}>
      <b>{engineer.hourlyCharges}</b> • {engineer.location}
    </div>
  );
};

export default ProfileInfo;
