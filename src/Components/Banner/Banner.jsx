import React from 'react';
import bannerMain from "../../assets/banner-main.png"

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div
                className="hero min-h-[60vh] bg-linear-to-r from-purple-800 to-purple-300 rounded-b-4xl">
                <div className="hero-overlay rounded-b-4xl"></div>
                <div className="hero-content text-neutral-content text-center grid grid-rows-2">
                    <div className='max-w-md flex justify-center items-center'>
                        <img src={bannerMain} alt="" />
                    </div>
                    <div className="max-w-md">
                        <h1 className="mb-5 text-xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-5">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <button className="btn btn-primary">Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;