import React from "react";
import dashboardImage from "../../public/images/dashboard.png";
import bgfirst from "../../public/images/bg-shape2.svg"

const Dashboard = () => {
    return (
        <section className="max-w-[1320px] mx-auto flex justify-center items-center p-4">
            <div className="relative sm:w-[80%] w-[85%] flex justify-center items-center">
            <img src={bgfirst} alt="" />
            </div>

            <div className="absolute w-[100%] sm:w-[90%] mb-0 mt-[5%] mr-[2%] mx-auto flex justify-center items-center text-center">    
            <img src={dashboardImage} alt="" className="rounded-[60px] w-3/4" />
            </div>
        </section>
    );
};

export default Dashboard;