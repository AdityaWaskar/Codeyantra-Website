import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigation } from "./components";
import LoadingScreen from "./components/LodingScreen/LoadingScreen";

// Lazy import the components
const App = lazy(() => import("./App"));
const About = lazy(() => import("./components/about/About"));
const Team = lazy(() => import("./components/TeamMembers/Team"));

const createRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/Team_members",
    element: <Team />,
  },
  {
    path: "/s",
    element: <LoadingScreen />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Suspense fallback={<LoadingScreen />}>
      <RouterProvider router={createRoute} />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
