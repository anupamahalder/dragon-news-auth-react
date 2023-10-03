import {FcGoogle} from 'react-icons/fc';
import {FaGithub} from 'react-icons/fa';
const RightSideNav = () => {
    return (
        <div>
            {/* Login with div  */}
            <div>
                <h2 className="text-black font-semibold text-xl py-3">Login With</h2>
                <button className='btn normal-case btn-outline'>
                    <FcGoogle className='text-2xl'></FcGoogle>
                    Login With Google
                </button>
                <button className='btn mt-4 normal-case btn-outline'>
                    <FaGithub className='text-2xl'></FaGithub>
                    Login With Github
                </button>
            </div> 
        </div>
    );
};

export default RightSideNav;