import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./components/Projects/Projects.jsx";
import ProjectDetails from "./pages/ProjectDetails.js";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "projects/:id",
    element: <ProjectDetails />,
  },
  {
    path: "/privacy-policy", // Dodaj route dla Polityki Prywatności
    element: <PrivacyPolicy />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
