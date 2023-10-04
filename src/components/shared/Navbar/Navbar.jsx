import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
const Navbar = () => {
    // destructure user from AuthContext if user login then we get value else we get null
    const {user, logOut} = useContext(AuthContext);

    // handle sign out 
    const handleSignOut = () =>{
        // call logOut which is accessed from context
        logOut()
        .then()
        .cetch()
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
    </>
    return (
        <div className="my-4">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="mb-2 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal gap-6 px-1 text-gray-600">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-3 mr-6">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src={user} />
                    </div>
                </label>
                    {
                        user ? <Link to='/'>
                        <button onClick={handleSignOut}
                         className="hover:bg-black rounded-md text-white py-2 px-6 bg-gray-800">Sign Out</button>
                        </Link>
                        :<Link to='/login'>
                            <button className="hover:bg-black rounded-md text-white py-2 px-6 bg-gray-800">Login</button>
                        </Link>
                    }
                </div>
                </div>
        </div>
    );
};

export default Navbar;