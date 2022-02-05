import React from "react";
import { useRoutes } from "react-router-dom";

import { Home } from "./Pages/HomePage/Home";
import { About } from "./Pages/AboutPage/About";
import { LoginPage } from "./Components/Partials/LoginPage/LoginPage";
import { ErrorPage } from "./Components/Partials/ErrorPage/ErrorPage";

export const Routes = () => {
    return useRoutes(
        [
            {path: '/', element: <Home/> },
            {path: '/about', element: <About/> },
            {path: '/signin', element: <LoginPage/> },
            {path: '/*', element: <ErrorPage/> }
        ]
    );
}