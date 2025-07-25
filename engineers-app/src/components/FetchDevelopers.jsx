import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { engineersActions } from "../store/engineersSlice";
import { fetchDevStatusActions } from "../store/fetchDevStatusSlice";

const FetchDevelopers = () => {
  const fetchDeveloperStatus = useSelector((store) => store.fetchDeveloperStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchDeveloperStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchDevStatusActions.markFetchingStarted());

    fetch(`${import.meta.env.VITE_API_BASE}/engineers`, { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchDevStatusActions.markFetchDone());
        dispatch(fetchDevStatusActions.markFetchingFinished());
        dispatch(engineersActions.addInitialItems(data.engineers));
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Failed to fetch engineers:", err);
        }
      });

    return () => controller.abort();
  }, [fetchDeveloperStatus, dispatch]);

  return null;
};

export default FetchDevelopers;
