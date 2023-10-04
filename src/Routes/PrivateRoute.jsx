import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    // get the user from AuthContext 
    const {user} = useContext(AuthContext);
    // if user is there we will allow him to go whatever he wants to go by taking children as props 
    if(user){
        return children;
    }
    // else we will navigate user to login page 
    return <Navigate to='/login'></Navigate>
};
//adding proptypes
PrivateRoute.propTypes = {
    children: PropTypes.object.isRequired,
}
export default PrivateRoute;