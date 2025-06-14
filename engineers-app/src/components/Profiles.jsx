import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EachProfile from "./EachProfile";

const Profiles = () => {
  const navigate = useNavigate();
  const engineers = useSelector((store) => store.engineers);
  const selectedEngineerId = useSelector(
    (store) => store.profile.selectedEngineerId
  );

  const selectedEngineer = engineers.find(
    (engineer) => engineer.id === selectedEngineerId
  );

  useEffect(() => {
    if (!selectedEngineer) {
      navigate("/");
    }
  }, [selectedEngineer, navigate]);

  return (
    <main>
      <div>
        {selectedEngineer && (
          <EachProfile key={selectedEngineerId} engineer={selectedEngineer} />
        )}
      </div>
    </main>
  );
};

export default Profiles;
