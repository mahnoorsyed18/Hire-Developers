import css from "../../css/EachProfile.module.css";

const ProfileAvailability = ({ engineer }) => {
  return (
    <div className={css.availability}>
      <b>Availability at This Time:</b> {engineer.availability}
    </div>
  );
};

export default ProfileAvailability;
