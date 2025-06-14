import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import LoadingSpinner from "../components/LoadingSpinner";
import FetchDevelopers from "../components/FetchDevelopers";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const fetchDeveloperStatus = useSelector(
    (store) => store.fetchDeveloperStatus
  );

  useEffect(() => {
    // Scroll to top on initial render and on route change
    window.scrollTo(0, 0);
  }, [location]); // Run effect on route change

  useEffect(() => {
    if (!fetchDeveloperStatus.currentlyFetching) {
      // Ensure scroll to top after data fetching is complete
      window.scrollTo(0, 0);
    }
  }, [fetchDeveloperStatus.currentlyFetching]);

  return (
    <>
      <Header />
      <FetchDevelopers />
      {fetchDeveloperStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
