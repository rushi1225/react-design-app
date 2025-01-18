import React from "react";
import { Link } from "react-router-dom";
import bgfirst from "../../public/images/bg-shape1.svg"


const Main = () => {
    return (
        <main className=" max-w-[1320px] mx-auto items-center flex flex-col sm:mt-[100px] justify-center p-7">
            <div className="absolute  sm:mb-[0%] mb-[50%] w-[100%]  flex justify-center items-center">
                <img src={bgfirst} alt="" className="w-[85%] sm:w-[70%]" />
            </div>
            <div className="items-center text-center relative">
                <p className="text-4xl sm:text-6xl font-semibold text-[#002834]">
                    Solve problem with an
                    <br />
                    integrated agency.
                </p>
                <p className="text-[#7D82A1] p-8">
                    Ehya is the Instagram analytics platform teams use to stay focused on the goals, track <br /> engagement for report your business .
                </p>
            </div>


            <div className="flex relative text-center gap-12 items-center font-semibold ">
                <Link to="/" className="bg-[#0075FF] text-white px-12 py-4 rounded-bl-full rounded-r-full hover:text-[#0075FF] hover:border hover:border-[#AEC7E4] hover:bg-white transition-color duration-500"> See our portfolio</Link>
                <Link to="/" className="px-12 py-4 text-[#0075FF] border border-[#AEC7E4] rounded-bl-full rounded-r-full hover:text-white hover:none hover:bg-[#0075FF] transition-color duration-500">More Info
                </Link>
            </div>
        </main>
    );
};

export default Main;
