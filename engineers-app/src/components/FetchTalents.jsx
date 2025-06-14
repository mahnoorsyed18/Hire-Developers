import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { talentsActions } from "../store/talentsSlice";
import { fetchTalStatusActions } from "../store/fetchTalStatusSlice";

const FetchTalents = () => {
  const fetchTalentsStatus = useSelector((store) => store.fetchTalentsStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchTalentsStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchTalStatusActions.markFetchingStarted());
    fetch(`${process.env.REACT_APP_API_BASE_URL}/talents`, { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchTalStatusActions.markFetchDone());
        dispatch(fetchTalStatusActions.markFetchingFinished());
        const talents = data.talents;
        dispatch(talentsActions.addInitialItems(talents));
      });

    return () => {
      controller.abort();
    };
  }, [fetchTalentsStatus]);

  return <></>;
};
export default FetchTalents;
