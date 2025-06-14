import css from "../../css/EachProfile.module.css";
import { MdOutlinePermIdentity } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { MdDone } from "react-icons/md";

const ProfileDetails = ({ engineer }) => {
  const identityVerified = () => {
    if (engineer.verifications.identity === true) {
      return (
        <div className={css["verification-icon"]}>
          <MdOutlinePermIdentity className={css.identityVerify} />
          <div className={css["verification-hide"]}>
            <span className={css["identity-verify"]}>
              <MdOutlinePermIdentity className={css.identityVerify} />
              {"  "}
              Identity Verified {"  "}
              <MdDone className={css.connected} />
            </span>
          </div>
        </div>
      );
    } else if (engineer.verifications.identity !== true) {
      <div className={css["verification-icon"]}>
        <MdOutlinePermIdentity className={css.identity} />
        <div className={css["verification-hide"]}>
          <span className={css["identity-verify"]}>
            <MdOutlinePermIdentity className={css.identity} />
            {"  "}
            Identity Verified {"  "}
            <FaMinus className={css.notConnected} />
          </span>
        </div>
      </div>;
    }
  };

  const paymentVerified = () => {
    if (engineer.verifications.payment === true) {
      return (
        <div className={css["verification-icon"]}>
          <MdOutlinePayment className={css.paymentVerify} />
          <div className={css["verification-hide"]}>
            <span className={css["payment-verify"]}>
              <MdOutlinePayment className={css.paymentVerify} />
              {"  "}
              Payment Verified {"  "}
              <MdDone className={css.connected} />
            </span>
          </div>
        </div>
      );
    } else if (engineer.verifications.payment !== true) {
      return (
        <div className={css["verification-icon"]}>
          <MdOutlinePayment className={css.payment} />
          <div className={css["verification-hide"]}>
            <span className={css["payment-verify"]}>
              <MdOutlinePayment className={css.payment} />
              {"  "}
              Payment Verified {"  "}
              <FaMinus className={css.notConnected} />
            </span>
          </div>
        </div>
      );
    }
  };

  const phoneVerified = () => {
    if (engineer.verifications.phone === true) {
      return (
        <div className={css["verification-icon"]}>
          <MdOutlineLocalPhone className={css.phoneVerify} />
          <div className={css["verification-hide"]}>
            <span className={css["phone-verify"]}>
              <MdOutlineLocalPhone className={css.phoneVerify} />
              {"  "}
              Phone Verified {"  "}
              <MdDone className={css.connected} />
            </span>
          </div>
        </div>
      );
    } else if (engineer.verifications.phone !== true) {
      return (
        <div className={css["verification-icon"]}>
          <MdOutlineLocalPhone className={css.phone} />
          <div className={css["verification-hide"]}>
            <span className={css["phone-verify"]}>
              <MdOutlineLocalPhone className={css.phone} />
              {"  "}
              Phone Verified {"  "}
              <FaMinus className={css.notConnected} />
            </span>
          </div>
        </div>
      );
    }
  };

  const emailVerified = () => {
    if (engineer.verifications.email === true) {
      return (
        <div className={css["verification-icon"]}>
          <MdOutlineEmail className={css.emailVerify} />
          <div className={css["verification-hide"]}>
            <span className={css["email-verify"]}>
              <MdOutlineEmail className={css.emailVerify} />
              {"  "}
              Email Verified {"  "}
              <MdDone className={css.connected} />
            </span>
          </div>
        </div>
      );
    } else if (engineer.verifications.email !== true) {
      return (
        <div className={css["verification-icon"]}>
          <MdOutlineEmail className={css.email} />
          <div className={css["verification-hide"]}>
            <span className={css["email-verify"]}>
              <MdOutlineEmail className={css.email} />
              {"  "}
              Email Verified {"  "}
              <FaMinus className={css.notConnected} />
            </span>
          </div>
        </div>
      );
    }
  };

  const facebookConnected = () => {
    if (engineer.verifications.facebook === true) {
      return (
        <div className={css["verification-icon"]}>
          <FaFacebook className={css.facebookVerify} />
          <div className={css["verification-hide"]}>
            <span className={css["facebook-verify"]}>
              <FaFacebook className={css.facebookVerify} />
              {"  "}
              Facebook Connected {"  "}
              <MdDone className={css.facebookConnected} />
            </span>
          </div>
        </div>
      );
    } else if (engineer.verifications.facebook !== true) {
      return (
        <div className={css["verification-icon"]}>
          <FaFacebook className={css.facebook} />
          <div className={css["verification-hide"]}>
            <span className={css["facebook-verify"]}>
              <FaFacebook className={css.facebook} />
              {"  "}
              Facebook Connected {"  "}
              <FaMinus className={css.notConnected} />
            </span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={css["bio-verifications"]}>
      <div className={css.bio}>{engineer.bio}</div>

      <div className={`row ${css.verifications}`}>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Verifications</h5>
              <p className="card-text">
                <div className={css["verification-icons"]}>
                  {identityVerified()}
                  {paymentVerified()}
                  {phoneVerified()}
                  {emailVerified()}
                  {facebookConnected()}
                </div>

                <div className={css.puncual}>
                  <b className={css["on-time"]}>On Time</b>
                  <span className={css["on-time-percent"]}>
                    {engineer.onTimeDelivery}
                  </span>
                  <div className={css.hideItem}>Jobs completed on time</div>
                </div>

                <div className={css.affordable}>
                  <b className={css["on-budget"]}>On Budget</b>
                  <span className={css["on-budget-percent"]}>
                    {engineer.onBudget}
                  </span>
                  <div className={css.hideItem}>
                    Jobs completed at agreed price
                  </div>
                </div>

                <div className={css.likeliness}>
                  <b className={css["accept-rate"]}>Accept Rate</b>
                  <span className={css["accept-rate-percent"]}>
                    {engineer.acceptRate}
                  </span>
                  <div className={css.hideItem}>
                    Likelihood of accepting a project
                  </div>
                </div>

                <div className={css.rehired}>
                  <b className={css["repeat-hire-rate"]}>Repeat Hire Rate</b>
                  <span className={css["repeat-hire-rate-percent"]}>
                    {engineer.repeatHireRate}
                  </span>
                  <div className={css.hideItem}>Freelancer rehire rate</div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
