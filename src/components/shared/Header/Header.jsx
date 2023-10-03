import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='mx-auto flex justify-center py-4 max-w-[1200px]'>
            <div className=''>
                <img src={logo} alt="" />
                <p className='text-center mt-6 text-gray-500'>Journalism Without Fear or Favour</p>
                {/* dynamic date  */}
                <p className='text-xl text-center mt-2'>{moment().format("dddd, MMMM Do, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;