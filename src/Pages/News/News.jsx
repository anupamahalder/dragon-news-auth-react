import { useParams } from "react-router-dom";
import Header from "../../components/shared/Header/Header";
import RightSideNav from "../../components/shared/RightSideNav/RightSideNav";
import Navbar from "../../components/shared/Navbar/Navbar";

const News = () => {
    // get the id from dynamic route using useParams() hook 
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid  md:grid-cols-4">
                <div className="col-span-3">
                    <h2>News Detail</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;