// import React from 'react';
import BannerPng from "../assets/banner-stack.png";
const Banner = () => {
    return (
        <div className="container mx-auto mt-15 flex justify-between items-center">
            <div className="grid grid-cols-1 gap-5">
                <div>
                    <span className="text-5xl font-extrabold">Build Your Ideal</span>
                    <br/>
                    <span className="gradient-text text-5xl font-extrabold mb-3">Development Stack</span>
                </div>
                <p className="text-[#475569] font-1xl mb-10">Explore frontend, backend, database, and tooling options,<br/>
                compare them side by side, and put together the stack that fits your<br/>
                next project.</p>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="btn bg-linear-to-r from-[#FF5722] to-[#D81B7E] text-white font-bold py-3 px-6 rounded-lg">Explore Technologies</button>
                        <button className="btn btn-active">Learn More</button>
                    </div>
            </div>
                <img src={BannerPng} alt="banner photo" />
        </div>
    );
};

export default Banner;