import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div style={{ backgroundImage: "url('https://i.ibb.co/T4LyJkq/cool-background-2.png')", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }} className="h-screen w-full">
            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)' }} className="w-full h-full text-center pt-24 space-y-5">
                <h1 className="text-7xl font-bold text-amber-500"> 404 </h1>
                <h3 className="text-3xl font-bold text-white">Data Not Found </h3>
                <Link to='/' className="btn bg-white border-2 border-amber-400 text-amber-500"> Go Back Home </Link>
            </div>
        </div>
    );
};

export default ErrorPage;