import css from "../css/Metrics.module.css";

const Metrics = () => {
  return (
    <div className={css.metricsContainer}>
      <div className="item-wrapper">
        <div className="title mb-2 mb-md-3">
          <span className="num mbr-fonts-style display-1">
            <b className={css.metrics}>50+</b>
          </span>
        </div>
        <h4 className="card-title mbr-fonts-style display-5">
          <b className={css.metrics}>Developers Available</b>
        </h4>
      </div>

      <div className="item-wrapper">
        <div className="title mb-2 mb-md-3">
          <span className="num mbr-fonts-style display-1">
            <b className={css.metrics}>100+</b>
          </span>
        </div>
        <h4 className="card-title mbr-fonts-style display-5">
          <b className={css.metrics}>Projects Completed</b>
        </h4>
      </div>

      <div className="item-wrapper">
        <div className="title mb-2 mb-md-3">
          <span className="num mbr-fonts-style display-1">
            <b className={css.metrics}>24/7</b>
          </span>
        </div>
        <h4 className="card-title mbr-fonts-style display-5">
          <b className={css.metrics}>Support Guaranteed</b>
        </h4>
      </div>
    </div>
  );
};

export default Metrics;
