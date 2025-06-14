import { useSelector } from "react-redux";
import css from "../css/Experienced.module.css";
import EachExperienced from "./EachExperienced";

const Experienced = () => {
  const experienced = useSelector((store) => store.experienced);

  return (
    <main>
      <div className={`card ${css.experiencedHeader}`}>
        <div className="card-body">
          <h5 className="card-title">
            <p className={css.heading}>Our Experienced Developers</p>
          </h5>
        </div>
      </div>
      <div className={css.container}>
        {experienced.map((experience) => (
          <EachExperienced key={experience.id} experience={experience} />
        ))}
      </div>
    </main>
  );
};

export default Experienced;
