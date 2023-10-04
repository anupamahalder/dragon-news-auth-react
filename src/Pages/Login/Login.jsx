import { useContext } from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const Login = () => {
    const {signIn} = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        console.log("e current-->", e.currentTarget);
        // e.currentTarget target the form section to access form data
        const form = new FormData(e.currentTarget);
        // using get method we can get the value of the field giving name of the field as parameter 
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
        .then(result => {
            console.log(result)
        })
        .catch(error => console.log(error.message))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-base-200 min-h-screen">
                <div className="hero">
                    <div className="">
                        <h1 className="text-4xl font-bold text-center mb-4 mt-10">Please Login!</h1>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onClick={handleLogin} 
                        className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" 
                             name="email"
                            placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" 
                            name="password"
                            placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center pb-5">Don{`'`}t have Account? <Link to='/register' className="text-blue-900 font-semibold">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;