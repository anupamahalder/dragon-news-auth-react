import {FcGoogle} from 'react-icons/fc';
import {FaGithub} from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle,AiOutlineInstagram} from 'react-icons/ai';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';
const RightSideNav = () => {
    return (
        <div className='mx-auto'>
            {/* Login with div  */}
            <div className='my-4'>
                <h2 className="text-black font-semibold text-xl py-3">Login With</h2>
                <button className='btn normal-case btn-outline'>
                    <FcGoogle className='text-2xl'></FcGoogle>
                    <span className='pr-16 text-gray-600'>Login With Google</span>
                </button>
                <button className='btn mt-3 normal-case btn-outline'>
                    <FaGithub className='text-2xl'></FaGithub>
                    <span className='pr-16 text-gray-600'>Login With Github
</span>
                </button>
            </div>
            {/* Find us on div  */}
            <div className='my-8 mr-4'>
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
            {/* Q-Zone div  */}
            <div className='my-4 bg-gray-200 mr-4 rounded-md'>
                <h2 className="text-2xl p-2 text-black font-semibold">Q-Zone</h2>
                <img src={qzone1} className='py-2' alt="" />
                <img src={qzone2} className='py-2' alt="" />
                <img src={qzone3} className='py-2' alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;