import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex gap-4 bg-base-200">
            <button className="btn btn-error mx-2 my-2">Breaking News</button>
            <Marquee pauseOnHover={true} className="py-2">
                {/* Here we are providing link to each breaking news  */}
                <Link to='/' className="mr-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Link>
                <Link to='/' className="mr-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas quis distinctio a similique cupiditate voluptatum officiis vel ullam perspiciatis quo!</Link>
                <Link to='/' className="mr-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas quis distinctio a similique cupiditate voluptatum officiis vel ullam perspiciatis quo!</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;