import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftsideNav = () => {
    // fetch data and store to a state 
    const [categories, setCategories] = useState([]);
    //for loading data when component will be loaded data will aslo be loaded
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[]);
    return (
        <div className="space-y-6">
            <h2 className="text-2xl ml-2">All Categories</h2>
            {
                categories.map(category => <Link className="block m-2 font-semibold text-gray-500" 
                key={category.id}
                to={`/category/${category.id}`}>
                    {category.name}
                </Link>)
            }
        </div>
    );
};

export default LeftsideNav;