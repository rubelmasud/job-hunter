import React from 'react';
import { Link } from 'react-router-dom';


const ApplyJobCart = ({ job }) => {

    const { jobtitle, location, sorttitle, salary, jobtime, logo, id } = job
    return (
        <div className='border my-6 w-11/12 mx-auto shadow rounded flex'>
            <img className='w-2/12 m-8 border rounded ' src={logo} alt="" />
            <div className="mt-1 flex items-center w-full justify-between ">
                <div className="">
                    <h4 className='text-2xl font-semibold text-gray-700'>{jobtitle}</h4>
                    <h4 className='text-2xl font-semibold my-1 text-gray-400'>{sorttitle}</h4>
                    <span className='flex gap-3'>
                        <button className='job-btn'>{jobtime}</button>
                        <button className='job-btn'>Full Time</button>
                    </span>
                    <div className="flex gap-3 mt-4 text-gray-500">
                        <span className='flex items-center gap-2'>
                            <p><img className='w-[16px]' src="https://i.ibb.co/X5DKBNc/location.png" alt="dollar-symbol" border="0" /></p>
                            <p>{location}</p>
                        </span>
                        <span className='flex items-center gap-2'>
                            <p><img className='w-[16px]' src="https://i.ibb.co/fMH2v80/dollar-symbol.png" alt="dollar-symbol" border="0" /></p>
                            <p>{salary}</p>
                        </span>
                    </div>
                </div>
                <div className="m-12">
                    <Link to={`/jobDetails/${id}`}>
                        <button onClick={() => handleFromJobDetails(id)} className='btn-primary'>View Details</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ApplyJobCart;