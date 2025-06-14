import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Favorites from "./components/Favorites.jsx";
import AboutUs from "./components/AboutUs.jsx";
import App from "./routes/App.jsx";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import engineersStore from "./store/index.js";
import Developers from "./components/Developers.jsx";
import Profiles from "./components/Profiles.jsx";
import AboutUsDetails from "./components/AboutUsDetails.jsx";
import Talents from "./components/Talents.jsx";
import Experienced from "./components/Experienced.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/developers",
        element: <Developers />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/about-us-details",
        element: <AboutUsDetails />,
      },
      {
        path: "/profiles",
        element: <Profiles />,
      },
      {
        path: "/talents",
        element: <Talents />,
      },
      {
        path: "/experienced",
        element: <Experienced />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={engineersStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
