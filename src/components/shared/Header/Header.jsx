import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='mx-auto flex justify-center py-4 max-w-[1200px]'>
            <div className=''>
                <img src={logo} alt="" />
                <p className='mx-auto'>Journalism Without Fear or Favour</p>
                {/* dynamic date  */}
                <p className='text-xl mx-auto'>{moment().format("dddd, MMMM Do, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;