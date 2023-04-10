import React from 'react';

const JobCategoryCart = ({ job }) => {
    const { jobTitle, quantity, icon } = job
    return (
        <div className='rounded   my-2 lg:mx-0 mx-auto w-[320px] lg:w-[270px] h-[243px] to  lg:p-10 bg-gradient-to-r from-gray-50 to-zinc-100  '>
            <img className='w-[70px] h-[70px]  bg-slate-200 rounded p-3 m-6 lg:m-0' src={icon} alt="" />
            <div className="pl-3 lg:pl-0 mt-8">
                <h4 className='text-[20px] font-extrabold'>{jobTitle}</h4>
                <p className='font-semibold text-[#A3A3A3]'>{quantity}</p>
            </div>
        </div>
    );
};

export default JobCategoryCart;