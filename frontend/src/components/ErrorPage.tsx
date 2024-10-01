import React from 'react';
import { useRouteError } from "react-router-dom";

interface RouteError {
    status?: number;
    statusText?: string;
    message?: string;
}

const ErrorPage: React.FC = () => {
    const err = useRouteError() as RouteError;
    console.log(err);
    return (
        
        <h2 style={{ textAlign: "center" }}>
            <i>{err.status + ' : ' + (err.statusText || err.message) + "....."}</i>
        </h2>
        
    );
}

export default ErrorPage;
