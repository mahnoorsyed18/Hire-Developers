import css from "../../css/EachProfile.module.css";
import { IoStarSharp } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import { PiCurrencyCircleDollarDuotone } from "react-icons/pi";
import { FaCircleNotch } from "react-icons/fa";

const ProfilePerformance = ({ engineer }) => {
  return (
    <div className={css.performance}>
      <div className={css["overall-rating"]}>
        <IoStarSharp className={css.rating} />
        <IoStarSharp className={css.rating} />
        <IoStarSharp className={css.rating} />
        <IoStarSharp className={css.rating} />
        <IoStarSharp className={css.rating} />
        {"   "} <p className={css.rate}>{engineer.overallRating}</p>
        <div className={css.hide}>Overall rating</div>
      </div>

      <div className={css["overall-reviews"]}>
        <MdReviews className={css.reviews} />
        {"   "}
        <p className={css.review}>{engineer.numberOfReviews}</p>
        <div className={css.hide}>Number of reviews</div>
      </div>

      <div className={css["overall-earning"]}>
        <PiCurrencyCircleDollarDuotone className={css.earning} />
        {"   "}
        <p className={css.earn}>{engineer.amountEarned}</p>
        <div className={css.hide}>Amount earned doing projects</div>
      </div>

      <div className={css["overall-progress"]}>
        <FaCircleNotch className={css.progress} />
        {"   "}
        <p className={css.success}>{engineer.successfullyCompletedJobs}</p>
        <div className={css.hide}>Successfully completed jobs</div>
      </div>
    </div>
  );
};

export default ProfilePerformance;
