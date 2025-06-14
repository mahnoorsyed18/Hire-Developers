import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { experiencedActions } from "../store/experiencedSlice";
import { fetchExpStatusActions } from "../store/fetchExpStatusSlice";

const FetchExperienced = () => {
  const fetchExperiencedStatus = useSelector(
    (store) => store.fetchExperiencedStatus
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchExperiencedStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchExpStatusActions.markFetchingStarted());
    fetch(`${process.env.REACT_APP_API_BASE_URL}/experienced`, { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchExpStatusActions.markFetchDone());
        dispatch(fetchExpStatusActions.markFetchingFinished());
        const experienced = data.experienced;
        dispatch(experiencedActions.addInitialItems(experienced));
      });

    return () => {
      controller.abort();
    };
  }, [fetchExperiencedStatus]);

  return <></>;
};
export default FetchExperienced;
