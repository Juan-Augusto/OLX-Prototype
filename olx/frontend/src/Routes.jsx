import React from "react";
import { useRoutes } from "react-router-dom";

import { Home } from "./Pages/HomePage/Home";
import { About } from "./Pages/AboutPage/About";

export const Routes = () => {
    return useRoutes(
        [
            {path: '/', element: <Home/> },
            {path: '/about', element: <About/> }
        ]
    );
}