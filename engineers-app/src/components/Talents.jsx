import { useSelector } from "react-redux";
import css from "../css/Talents.module.css";
import EachTalent from "./EachTalent";

const Talents = () => {
  const talents = useSelector((store) => store.talents);

  return (
    <main>
      <div className={`card ${css.talentHeader}`}>
        <div className="card-body">
          <h5 className="card-title">
            <p className={css.heading}>Meet Our Talents</p>
          </h5>
        </div>
      </div>
      <div className={css.container}>
        {talents.map((talent) => (
          <EachTalent key={talent.id} talent={talent} />
        ))}
      </div>
    </main>
  );
};

export default Talents;
