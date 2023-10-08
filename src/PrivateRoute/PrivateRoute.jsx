import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types"
import { Dna } from "react-loader-spinner";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="h-screen w-full pt-24">
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper mx-auto"
            />
        </div>
    }
    if (!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    else {
        return children
    }

};


PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivateRoute;