
import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <h2 style={{ textAlign: "center" }}><i>{err.status + ' : ' + err.statusText + "....."}</i></h2>
    );
}

export default ErrorPage;
