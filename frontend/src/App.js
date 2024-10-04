import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Homepage from "./components/MacBookAir/Homepage"
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ServicePage from "./components/ServicePage/ServicePage";
import ApplyNow from "./components/ApplyNow/ApplyNow"
import Services from "./components/Services/Services"
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
            {
                path: "/services",
                element: <ServicePage />,
            },
            {
                path: "/services/:category",
                element: <Services />,
                loader: ({ params }) => ({ category: params.category })
            },
            {
                path: "/apply",
                element: <ApplyNow />
            }
        ]
    },
    {
        errorElement: <ErrorPage />,
    },
]);

export default appRouter;
