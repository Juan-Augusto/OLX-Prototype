import React from "react";
import { useRoutes } from "react-router-dom";

import { Home } from "./Pages/HomePage/Home"
import { About } from "./Pages/AboutPage/About";
import { LoginPage } from "./Pages/LoginPage";
import { SignupPage } from "./Pages/SignupPage";
import { AdPage } from "./Pages/AdPage";
import { AddAdPage } from "./Pages/AddAd";
import { Ads } from "./Pages/Ads/Home";
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";

export const Routes = () => {
    return useRoutes(
        [
            {path: '/', element: <Home/> },
            {path: '/about', element: <About/> },
            {path: '/signin', element: <LoginPage/> },
            {path: '/signup', element: <SignupPage/> },
            {path: '/ad/:id', element: <AdPage/> },
            {path: '/post-an-ad', element: <AddAdPage/> },
            {path: '/ads', element: <Ads/> },
            {path: '/*', element: <ErrorPage/> }

        ]
    );
}