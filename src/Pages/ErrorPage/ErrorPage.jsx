import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen text-center mt-24">
            <h1 className="text-7xl font-bold"> 404 </h1>
            <h3 className="text-3xl font-bold"> Not Found </h3>
            <Link to='/' className="btn "> Go Back Home </Link>
        </div>
    );
};

export default ErrorPage;