import css from "../../css/EachProfile.module.css";

const ProfileExpertise = ({ engineer }) => {
  return (
    <div className={css.skillsServicesContainer}>
      <div className={css.skills}>
        <li className="list-group-item">
          <b>Skills:</b>
          <ul>
            {engineer.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </li>
      </div>
      <div className={css.services}>
        <li className="list-group-item">
          <b>Services:</b>
          <ul>
            {engineer.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </li>
      </div>
    </div>
  );
};

export default ProfileExpertise;
