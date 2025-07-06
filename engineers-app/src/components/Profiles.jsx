import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EachProfile from "./EachProfile";

const Profiles = () => {
  const navigate = useNavigate();
  const engineers = useSelector((store) => store.engineers);
  const selectedEngineerId = useSelector(
    (store) => store.profile.selectedEngineerId
  );

  const [engineerToShow, setEngineerToShow] = useState(null);

  useEffect(() => {
    if (engineers.length === 0) return; // wait for data to load

    const foundEngineer = engineers.find(
      (engineer) => engineer.id === selectedEngineerId
    );

    if (foundEngineer) {
      setEngineerToShow(foundEngineer);
    } else {
      navigate("/"); // only navigate if not found after data is ready
    }
  }, [engineers, selectedEngineerId, navigate]);

  return (
    <main>
      <div>
        {engineerToShow && (
          <EachProfile key={selectedEngineerId} engineer={engineerToShow} />
        )}
      </div>
    </main>
  );
};

export default Profiles;
