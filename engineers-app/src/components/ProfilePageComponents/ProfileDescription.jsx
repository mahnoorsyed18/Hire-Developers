import css from "../../css/EachProfile.module.css";

const ProfileDescription = ({ engineer }) => {
  return (
    <div className={css.description}>
      <div className={css.paragraph1}>{engineer.description.paragraph1}</div>
      <div className={css.paragraph2}>{engineer.description.paragraph2}</div>
      <div className={css.paragraph3}>{engineer.description.paragraph3}</div>
      <div className={css.paragraph4}>{engineer.description.paragraph4}</div>
    </div>
  );
};

export default ProfileDescription;
