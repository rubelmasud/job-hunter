import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';



const FeaturedJobDetails = () => {

    const { jobId } = useParams()

    const [job, setJob] = useState([])

    useEffect(() => {
        fetch(`/FeaturedJobsData.json`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const jobsData = data.find(job => job.id == jobId)
                setJob(jobsData)
            })
    }, [])
    // console.log(job);


    const { jobdetails, jobResponsibility, Experiences, EducationalRequirements, email, phone, salary, jobtitle, location } = job
    return (
        < div className='lg:flex  gap-6 mx-6 my-16'>
            {/* jobs-details */}
            <div className="lg:w-8/12 border p-6 shadow rounded ">
                <h4><span className='text-1xl font-bold'>Job Description:</span>{jobdetails}</h4><br></br>
                <p><span className='text-1xl font-bold'>Job Responsibility:</span>{jobResponsibility}</p><br></br>
                <p className='text-1xl font-bold'>Educational Requirements:</p><br />
                <p>{EducationalRequirements}</p><br></br>
                <p>:</p><br />
                <p>{Experiences}</p>
            </div>
            {/* jobs carts */}
            <div className="lg:w-4/12 my-6 lg:my-0">
                <div className="border-2 bg-gradient-to-r from-slate-100 to-slate-200 shadow-md p-8 rounded">
                    <h5 className='text-lg font-sans font-bold '>Job Details</h5>
                    <div className="h-[1px] opacity-25 w-11/12 my-4 bg-black"></div>
                    <div className="flex items-center gap-2 ">
                        <span><img className='w-[16px]' src="https://i.ibb.co/fMH2v80/dollar-symbol.png" alt="dollar-symbol" border="0" /></span>
                        <span><span className='text-1xl font-bold'>Salary :</span> {salary}  (per Month)</span>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <span><img className='w-[16px]' src="https://i.ibb.co/1bTLY30/suitcase.png" alt="dollar-symbol" border="0" /></span>
                        <span><span className='text-1xl font-bold'>Job Title :</span> {salary}  (per Month)</span>
                    </div><br />

                    <h5 className='text-lg font-sans font-bold '>Contact Information</h5>
                    <div className="h-[1px] opacity-25 w-11/12 my-4 bg-black"></div>

                    <div className="flex items-center gap-2 ">
                        <span><img className='w-[16px]' src="https://i.ibb.co/Vwyz3wD/phone.png" alt="dollar-symbol" border="0" /></span>
                        <span><span className='text-1xl font-bold'>Phone :</span> {phone} </span>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <span><img className='w-[16px]' src="https://i.ibb.co/1zhDN3S/gmail.pngg" alt="dollar-symbol" border="0" /></span>
                        <span><span className='text-1xl font-bold'>Email :</span> {email} </span>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <span><img className='w-[16px]' src="https://i.ibb.co/X5DKBNc/location.png" alt="dollar-symbol" border="0" /></span>
                        <span><span className='text-1xl font-bold'>Address :</span> {location} </span>
                    </div>
                </div>
                <button className='btn-primary my-6 w-full shadow-md'>Apply Now</button>
            </div>
        </div >
    );
};

export default FeaturedJobDetails;
