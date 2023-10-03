import Header from "../../components/shared/Header/Header";
import Navbar from "../../components/shared/Navbar/Navbar";
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
           <h1 className='bg-red-600 text-black text-5xl font-poppins'>This is Home</h1> 
        </div>
    );
};

export default Home;