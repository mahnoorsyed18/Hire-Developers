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

    fetch(`${import.meta.env.VITE_API_BASE}/talents`, { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchTalStatusActions.markFetchDone());
        dispatch(fetchTalStatusActions.markFetchingFinished());
        dispatch(talentsActions.addInitialItems(data.talents));
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Failed to fetch talents:", err);
        }
      });

    return () => controller.abort();
  }, [fetchTalentsStatus, dispatch]);

  return null;
};

export default FetchTalents;
