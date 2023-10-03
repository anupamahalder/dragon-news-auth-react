import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="max-w-[1200px] mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;