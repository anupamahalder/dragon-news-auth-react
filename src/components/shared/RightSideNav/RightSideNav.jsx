import {FcGoogle} from 'react-icons/fc';
import {FaGithub} from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle,AiOutlineInstagram} from 'react-icons/ai';
const RightSideNav = () => {
    return (
        <div className='mx-auto'>
            {/* Login with div  */}
            <div className='my-4'>
                <h2 className="text-black font-semibold text-xl py-3">Login With</h2>
                <button className='btn normal-case btn-outline'>
                    <FcGoogle className='text-2xl'></FcGoogle>
                    Login With Google
                </button>
                <button className='btn mt-3 normal-case btn-outline'>
                    <FaGithub className='text-2xl'></FaGithub>
                    Login With Github
                </button>
            </div>
            {/* Find us on div  */}
            <div className='my-4 mr-4'>
                <h2 className="text-black font-semibold text-xl py-3">Find Us On</h2>
                <a href="#" className='p-4 flex border rounded-t-lg'> 
                    <BsFacebook className='text-2xl mr-4 text-blue-600'></BsFacebook>
                    <span className='text-gray-700'>Facebook</span>
                </a>
                <a href="#" className='p-4 flex border'> 
                    <AiFillTwitterCircle className='text-3xl mr-4 text-blue-400'></AiFillTwitterCircle>
                    <span className='text-gray-700'>Twitter</span>
                </a>
                <a href="#" className='p-4 flex border rounded-b-lg'> 
                    <AiOutlineInstagram className='text-2xl mr-4 text-pink-600'></AiOutlineInstagram>
                    <span className='text-gray-700'>Instagram</span>
                </a>
            </div> 
        </div>
    );
};

export default RightSideNav;