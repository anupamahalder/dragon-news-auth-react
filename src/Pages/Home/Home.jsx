import { useLoaderData } from "react-router-dom";
import Header from "../../components/shared/Header/Header";
import LeftsideNav from "../../components/shared/LeftSideNav/LeftsideNav";
import Navbar from "../../components/shared/Navbar/Navbar";
import RightSideNav from "../../components/shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
const Home = () => {
    // get data 
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
                <LeftsideNav></LeftsideNav>
            </div>
            {/* news div  */}
            <div className="col-span-2 border">
                {
                    news.map(aNews => <NewsCard 
                        key={aNews._id}
                        news = {aNews}
                    ></NewsCard>)
                }
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
           </div>
        </div>
    );
};

export default Home;