import css from "../css/EachProfile.module.css";
import ProfileHeader from "./ProfilePageComponents/ProfileHeader";
import ProfileTitle from "./ProfilePageComponents/ProfileTitle";
import ProfilePerformance from "./ProfilePageComponents/ProfilePerformance";
import ProfileInfo from "./ProfilePageComponents/ProfileInfo";
import ProfileDetails from "./ProfilePageComponents/ProfileDetails";
import ProfileWorkDetails from "./ProfilePageComponents/ProfileWorkDetails";
import ProfileExpertise from "./ProfilePageComponents/ProfileExpertise";
import ProfileDescription from "./ProfilePageComponents/ProfileDescription";
import ProfileAvailability from "./ProfilePageComponents/ProfileAvailability";

const EachProfile = ({ engineer }) => {
  return (
    <div className={css["profile-page"]}>
      <ProfileHeader engineer={engineer} />
      <ProfileTitle engineer={engineer} />
      <ProfilePerformance engineer={engineer} />
      <ProfileInfo engineer={engineer} />
      <ProfileDetails engineer={engineer} />
      <ProfileWorkDetails engineer={engineer} />
      <ProfileExpertise engineer={engineer} />
      <ProfileDescription engineer={engineer} />
      <ProfileAvailability engineer={engineer} />
    </div>
  );
};

export default EachProfile;
