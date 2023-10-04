import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    // get the user from AuthContext 
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    // before checking user we will check that if loading is true then do not need to go below rather show a spinner 
    if(loading){
        return <span className="loading loading-spinner text-info"></span>;
    }

    // if user is there we will allow him to go whatever he wants to go by taking children as props 
    if(user){
        return children;
    }
    // else we will navigate user to login page 
    return <Navigate state={location.pathname} to='/login'></Navigate>
};
//adding proptypes
PrivateRoute.propTypes = {
    children: PropTypes.object.isRequired,
}
export default PrivateRoute;