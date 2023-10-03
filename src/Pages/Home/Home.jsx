import Header from "../../components/shared/Header/Header";
import LeftsideNav from "../../components/shared/LeftSideNav/LeftsideNav";
import Navbar from "../../components/shared/Navbar/Navbar";
import RightSideNav from "../../components/shared/RightSideNav/RightSideNav";
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
           <h1 className='bg-red-600 text-black text-5xl font-poppins'>This is Home</h1> 
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
                <LeftsideNav></LeftsideNav>
            </div>
            <div className="col-span-2 border">
                <h2>News comming soon...</h2>
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
           </div>
        </div>
    );
};

export default Home;