import { useContext } from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const Register = () => {
    // AuthContext will give whatever we put into authInfo 
    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        // console.log(form.get('password'));
        const email = form.get('email');
        const password = form.get('password');
        const photo = form.get('photoURL');
        const name = form.get('name');
        console.log(name, photo, email, password);
        //create user
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-base-200 min-h-screen">
                <div className="hero">
                    <div className="">
                        <h1 className="text-4xl font-bold text-center mb-4 mt-10">Please Register!</h1>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onClick={handleRegister} 
                        className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" 
                             name="name"
                            placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="link" 
                             name="photoURL"
                            placeholder="Photo URL" className="input input-bordered" required />
                            </div>
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
                            <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="text-center pb-5">Already have Account? <Link to='/login' className="text-blue-900 font-semibold">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;