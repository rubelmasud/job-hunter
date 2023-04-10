import React from 'react';

const FeaturedJobCart = ({ featuredJob }) => {
    const { jobtitle, logo, salary, location, jobtime1, jobtime2, sorttitle } = featuredJob
    return (
        <div className='border lg:w-[600px] p-10 rounded bg-gray-50'>
            <img className='w-[160px] h-[80px] mb-8' src={logo} alt="" />
            <h5 className='text-[24px] font-extrabold'>{jobtitle}</h5>
            <p className='text-gray-400 font-bold mb-4'>{sorttitle}</p>
            <div className=" flex gap-4 mb-4">
                <button className='job-btn '>{jobtime1}</button>
                <button className='job-btn'>{jobtime2}</button>
            </div>
            <div className="mb-6">
                <span>{location}</span>
                <span>{salary}</span>
            </div>
            <button className='btn-primary'>View Details</button>
        </div>
    );
};

export default FeaturedJobCart;