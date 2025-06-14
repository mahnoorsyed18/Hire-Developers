import css from "../../css/EachProfile.module.css";

const ProfileWorkDetails = ({ engineer }) => {
  return (
    <>
      <div className={css.currentCompany}>
        <b>Company Currently Employed At:</b> {engineer.currentCompany}
      </div>
      <div className={css.experience}>
        <b>Experince:</b> {engineer.experience} years
      </div>
    </>
  );
};

export default ProfileWorkDetails;
