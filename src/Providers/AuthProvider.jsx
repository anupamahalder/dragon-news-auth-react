import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

// create context and export for global access
export const AuthContext = createContext(null);
// wherever the authcontext will be provided the full part will be inside auth provider 

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    // declare a state to get info about user login or not 
    const [user, setUser] = useState(null);

    //create a function which will take two parameters to create user with email and password and this function will be used by register page so we put it to authInfo
    const createUser = (email, password) =>{
        //return a function which will call firebase and this function will take three parameters
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //implement signin
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    // implement signout 
    const logOut = () =>{
        return signOut(auth);
    }
    useEffect(()=>{
        // two parameters need auth and a call back function or observer 
        // to clean up we will store it to a variable 
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            console.log('User in the auth state changed',currentUser);
            // set user to current user , now user will have the current user and user is shared for global so any component can access the user
            setUser(currentUser);
        })
        // return function to clean up 
        return () => {
            // call unSubscribe 
            unSubscribe();
        }
    },[]);
    //putting things inside authInfo object for global access
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
    }
    return (
        // we can pass authInfo as a value means whatever thing we will put inside authInfo can be accessed throughout the all component
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>    
    );
};
//adding proptypes
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;