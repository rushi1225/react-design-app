import React from "react";

const StatCard = ({ imgUrl, num, title, desc }) => {
    return (
        <>
            <section className="group max-w-[1320px]  sm:h-[100%] h-[300px] gap-5 p-8 mx-auto  items-center text-center shadow-xl border border-slate-200 hover:bg-[#0075FF] hover:text-white duration-700">
                <figure className=" py-3 flex justify-center ">
                    <img className="items-center" src={imgUrl} alt="" />
                </figure>
                <div>
                    <p className="font-bold text-4xl">{num}</p>
                    <p className="font-semibold my-2">{title}</p>
                    <p className="mt-4 text-slate-500 text-sm group-hover:text-white">{desc}</p>
                </div>
            </section>

        </>
    );
};

export default StatCard;