import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Ai } from "./pages/Ai.jsx";
import { Crypto } from "./pages/Crypto.jsx";
import { Register } from "./pages/Register.jsx";
import { Login } from "./pages/Login.jsx";
import { Tech } from "./pages/Tech.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/crypto",
    element: <Crypto />,
  },
  {
    path: "/tech",
    element: <Tech />,
  },
  {
    path: "/ai",
    element: <Ai />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
