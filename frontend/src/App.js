import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Homepage from "./components/MacBookAir/Homepage"
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {

    return (
        <>
            <div>
                <Navigation />
                <Outlet />
                <Footer />
            </div>
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
        ]

    },
    {
        errorElement: <ErrorPage />,
    },
]);
export default appRouter;
