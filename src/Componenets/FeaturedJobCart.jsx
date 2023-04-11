import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftOnRectangleIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const FeaturedJobCart = ({ featuredJob, handleFromJobDetails }) => {
    const { jobtitle, logo, salary, location, jobtime, sorttitle, id } = featuredJob



    return (
        <div className='border lg:w-[600px] p-10 rounded bg-gray-50'>
            <img className='w-[160px] h-[80px] mb-8' src={logo} alt="" />
            <h5 className='text-[24px] font-extrabold'>{jobtitle}</h5>
            <p className='text-gray-400 font-bold mb-4'>{sorttitle}</p>
            <div className=" flex gap-4 mb-4">
                <button className='job-btn '>{jobtime}</button>
                <button className='job-btn'>Full Time</button>
            </div>
            <div className="mb-6 flex gap-3">
                <span className='flex'>
                    <p><ArrowLeftOnRectangleIcon className="h-6 w-6 text-blue-500" /></p>
                    <p> {location}</p>
                </span>
                <span className='flex'>
                    <p><CurrencyDollarIcon className="h-6 w-6 text-gray-500" /></p>
                    <p>{salary}</p>
                </span>
            </div>
            <Link to={`/jobDetails/${id}`}>
                <button onClick={() => handleFromJobDetails(id)} className='btn-primary'>View Details</button>
            </Link>
        </div>
    );
};

export default FeaturedJobCart;