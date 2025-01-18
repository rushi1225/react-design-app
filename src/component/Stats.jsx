import React from "react";
import StatCard from "./StatCard";

import shoppingBag from "../../public/images/shopping-bag.svg";
import settingImg from "../../public/images/settings.svg";
import cartImg from "../../public/images/shopping-cart.svg";
import userImg from "../../public/images/users.svg";

const statsArray = [
    {
        imgUrl: shoppingBag,
        num: "80K",
        title: "Buyers",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum corrupti assumenda laudantium explicabo dolorum ratione labore reprehenderit quia perferendis!",
    },
    {
        imgUrl: settingImg,
        num: "50K",
        title: "Buyers",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum corrupti assumenda laudantium explicabo dolorum ratione labore reprehenderit quia perferendis!",
    },
    {
        imgUrl: cartImg,
        num: "90K",
        title: "Buyers",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum corrupti assumenda laudantium explicabo dolorum ratione labore reprehenderit quia perferendis!",
    },
    {
        imgUrl: userImg,
        num: "40K",
        title: "Buyers",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum corrupti assumenda laudantium explicabo dolorum ratione labore reprehenderit quia perferendis!",
    },
];

const Stats = () => {
    return (
        <div className=" justify-between max-w-[1320px] mx-auto grid  sm:grid-cols-4 grid-cols-1 gap-4 p-5 items-center text-center">
            {statsArray.map((item) => {
                return (
                    <StatCard
                        imgUrl={item.imgUrl}
                        num={item.num}
                        title={item.title}
                        desc={item.desc}
                    />
                );
            })}
        </div>
    );
};

export default Stats;