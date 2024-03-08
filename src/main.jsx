import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import ErrorPage from "./error-page";
import Root from "./routes/root";
import SignUp from "./routes/signup";
import LogIn from "./routes/login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/signup",
        element: <SignUp />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <LogIn />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
